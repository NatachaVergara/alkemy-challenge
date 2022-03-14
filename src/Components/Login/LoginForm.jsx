import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import ModalMensajes from '../Modales/ModalMensajes';
import { error } from '../Alerts/Alerts';

const LoginForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [startModal, setStartModal] = useState(false)
    
    const [modalMsj, setModalMsj] = useState('')
    //Funcion para el enviar al modal
    const handleClose = () => setStartModal(false);

    let navigate = useNavigate();

    const user = {
        email: 'challenge@alkemy.org',
        password: 'react'
    }


    localStorage.setItem('token', JSON.stringify(user))


    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(valores) => {
                    let isError = {};
                    //Validacion email
                    if (!valores.email) {
                        isError.email = 'Por favor ingrese un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        isError.email = 'El correo solo puede contener letras, números, puntos, guiones, guion bajo y @'
                    }

                    //Validacion password
                    if (!valores.password) {
                        isError.password = 'Por favor ingrese su contraseña'

                        

                    }

                    return isError
                }}



                onSubmit={(valores, { resetForm }) => {
                   let isUser = JSON.parse(localStorage.getItem('token'))

                    if (isUser.email !== valores.email && isUser.password === valores.password) {
                        error(`El correo electronico ingresado no se encuentra registrado, asegurese de haberlo ingresado correctamente`)
                     
                    }

                    if (isUser.email === valores.email && isUser.password !== valores.password) {                      
                        error(`La contraseña ingresada no corresponde con el mail ingresado, asegurese de habelo ingresado correctamente`)
                       
                       
                    }

                    if (isUser.email !== valores.email && isUser.password !== valores.password) {
                    
                        error('Tanto el email como la contraseña ingresados están incorrectos, por favor revise la información y vuelva a intentar')

                    }



                    if (isUser.email === valores.email && isUser.password === valores.password) {
                        resetForm()
                         setStartModal(true)
                        setIsLoggedIn(true)
                        console.log('usuario logeado/Formik funcionando')
                       

                        setModalMsj('Bienvenido/a nuevamente, lo estamos enviado a su menu')
                        setTimeout(() => {
                            setStartModal(false)
                            navigate('/home')                            
                        }, 5000)

                       
                    }

                }}



            >
                {({ errors, touched }) => (
                    <Form >
                        <div className="mb-3 d-flex flex-column justify-content-center align-item-center">
                            <Field
                                type="email"
                                className="form-control w-25"
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                placeholder="challenge@alkemy.org"
                            // value={values.email}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            />

                            {touched.email && errors.email ? <div className="form-text text-danger fs-6">{errors.email}</div> : <div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>}
                        </div>
                        <div className="mb-3">
                            <Field
                                type="password"
                                className="form-control w-25"
                                id="password"
                                name="password"
                                placeholder="react"
                            // value={values.password}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            />
                            {touched.password && errors.password ? <div className="form-text text-danger fs-6">{errors.password}</div> : null}
                        </div>
                        <button type="submit"
                            className="btn btn-primary"

                            >Login</button>
                        <ModalMensajes handleClose={handleClose} show={startModal} modalMsj={modalMsj} isLoggedIn={isLoggedIn} />
                    </Form>

                )}
            </Formik>
           

        </>
    )
}

export default LoginForm
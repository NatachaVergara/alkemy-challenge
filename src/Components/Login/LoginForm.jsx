import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';

const LoginForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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



                onSubmit={(valores, {resetForm}) => {
                    console.log(valores)
                    
                    // resetForm()
                    let isUser = JSON.parse(localStorage.getItem('token'))

                    if (isUser.email !== valores.email) {
                        alert('Wrong email')
                    }

                    if (isUser.password !== valores.password) {
                        alert('Wrong password')
                    } 

                    if (isUser.email === valores.email && isUser.password === valores.password) {
                        resetForm()
                        console.log('usuario logeado/Formik funcionando')
                        setTimeout(() => {
                            navigate('/home');
                            setIsLoggedIn(true)
                        }, 5000)

                        //Agregar un Modal
                    }
                   
                }}



            >
                {({errors,touched}) => (
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

                            {touched.email && errors.email ? <div className="form-text text-danger fs-6">{ errors.email}</div> :<div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>}
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
                        <button type="submit" className="btn btn-primary">Login</button>
                    </Form>

                )}

            </Formik>
        </>
    )
}

export default LoginForm
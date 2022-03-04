import React, { useState } from 'react'
import LoginForm from './LoginForm'

const Login = () => {
    //const [btn, setBtn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)

    const onHandleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)

        const msj = {
            email: email,
            password: password
        }

        localStorage.setItem('storageLogin', JSON.stringify(msj))

        

        usuarioRegistrado()
        setLogin(true)



        
    }

    const usuarioRegistrado = () => {

        let registrado = localStorage.getItem('storageLogin')
        if (registrado.email !== email) {
            alert('usuario no registrado')
          
        }
    }



    const onHandleLogOut = () => {
        localStorage.removeItem('msj')
        setLogin(false)
    }


    return (
        <div>
            <LoginForm onHandleSubmit={onHandleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}
                onHandleLogOut={onHandleLogOut}
                login={login} setLogin={setLogin}
            />
        </div>
    )
}

export default Login
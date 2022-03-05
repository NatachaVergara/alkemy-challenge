import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import LoginForm from './LoginForm'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)
    let navigate = useNavigate();


    const logIn = {
        email: '1@gmail.com',
        password: 'react'
    }

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(logIn))
    })

    const onHandleSubmit = (e) => {
        e.preventDefault()
        let registrado = JSON.parse(localStorage.getItem('token'))

        // console.log(email, password)
        // console.log(registrado.email)

        if (registrado.email !== email) {
            alert('Wrong email')
        } else if (registrado.password !== password) {
            alert('Wrong password')
        }

        if (registrado.email === email && registrado.password === password) {
                     
                navigate('/home');
                setLogin(true)

          

        }


    }








    return (
        <div>
            <LoginForm onHandleSubmit={onHandleSubmit} email={email} setEmail={setEmail}
                password={password} setPassword={setPassword}
                login={login} setLogin={setLogin}
            />
        </div>
    )
}

export default Login
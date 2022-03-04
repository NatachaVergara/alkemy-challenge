import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import './styles.css'

const LoginForm = ({ onHandleSubmit, email, setEmail, password, setPassword, onHandleLogOut, login, setLogin }) => {
    return (
        <>  <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="emailLabel" >Email address</Form.Label>
                <Form.Control className="emailInput" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="passwordInput"type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {login !== true ?
                <Button variant="primary" type="submit"  onClick={onHandleSubmit}>Submit
                    <Link to='/home'  > </Link>
                </Button> :
                <Button variant="primary" type="submit" className='ms-5' onClick={onHandleLogOut}>
                    Logout
                </Button>}
        </Form></>
    )
}

export default LoginForm
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    const handleLogout = () => {
        localStorage.clear()
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/home'>Alkemy Challenge</Link>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-5 ps-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active text-decoration-none" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-decoration-none" to='/search'>Buscar</Link>
                        </li>

                    </ul>
                    <button type="button" className="btn btn-dark text-decoration-none color-light">
                        <Link to='/' className="text-decoration-none color-light"onClick={handleLogout}> Log out </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    const handleLogout = () => {
        localStorage.clear()
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light h-100">
            <div className="container d-flex flex-column flex-md-row">
                <Link className="navbar-brand" to='/home'>Alkemy Challenge</Link>
                <div className="collapse d-inline navbar-collapse " id="navbarSupportedContent">                  
                    <button type="button" className="btn btn-dark text-decoration-none color-light">
                        <Link to='/' className="text-decoration-none color-light"onClick={handleLogout}> Log out </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
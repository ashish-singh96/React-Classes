import React from 'react'
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
        <div className='navBar'>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand">Home</a>
                    <a className="navbar-brand">About</a>
                    <a className="navbar-brand">Contact</a>
                    <a className="navbar-brand">Service</a>
                    <a className="navbar-brand">Activity</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" style={{marginLeft:"9px"}} type="submit">Search</button>
                        <button className='btn btn-outline-primary' style={{marginLeft:"9px"}} >Login</button>
                        <button className='btn btn-outline-danger' style={{marginLeft:"9px"}} >SignUp</button>
                    </form>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default NavBar
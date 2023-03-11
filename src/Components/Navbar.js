import React from "react";
import { Link } from "react-router-dom";


export default function navBar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div style={navbarStyle}>
                        <h2>
                            <Link to='/' style={titleStyle}>Food Delivery App</Link>
                        </h2>
                    </div>
                    <div className="justify-content-end">
                        <h5>
                            <Link to='/login' style={LoginBtn}>Login</Link>
                        </h5>
                    </div>
                </div>
            </nav>
        </>
    )
}

const navbarStyle = {
    padding: '5px',
    lineHeight: '10px'
}

const titleStyle = {
    color: 'white',
    textDecoration: 'none'
}

const LoginBtn = {
    color: 'white',
    textDecoration: 'none'
}
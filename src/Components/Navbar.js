import React from "react";
import { Link } from "react-router-dom";


export default function navBar() {
    return(
        <>
            <div style={{display: 'flex'}}>
                <div style={navbarStyle}>
                    <h2>
                        <Link to='/' style={titleStyle}>Food Delivery</Link>
                    </h2>
                </div>
                <div style={{paddingLeft: '5px', marginTop: '10px'}}>
                    <h3>
                        <Link to='/login' style={LoginBtn}>Login</Link>
                    </h3>
                </div>
            </div>
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
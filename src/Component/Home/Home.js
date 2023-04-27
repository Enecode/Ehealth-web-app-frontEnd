import React from "react";

import './home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container"><h1 className="home-heading">Welcome To General Hospital Isaleko</h1>
        
        <div className="registration-button-holder"><button className="registration-button">
            <Link className="registration-text" to='/DoctorReg' >Register as doctor</Link>
            </button> <button className="registration-button" ><Link className="registration-text" to='/DoctorLogin' >Login as doctor
                    </Link></button></div>

        <div 
            className="login-button-holder">
                <button className="login-button">
                    <Link className="registration-text" to='/PatientReg'>Register as patient
                    </Link></button> <button className="login-button"><Link className="registration-text" to='/PatientLogin'>Login as patient
                    </Link></button></div>
        </div>
    );
    };

export default Home;
import React from "react";
// import PatientUpdateForm from "./PatientUpdateProfile";
import { Link } from "react-router-dom";
import "./PatientDashboard.css";


function PatientDashboard() {
  return (
    <div class="container">
      <h1 className="home-heading">Home</h1>
      <p className="heading-welcome">Welcome to your dashboard</p>
      <div class="patient-features-container">
        <Link className="patient-text" to='/DoctorDetail' >View your Doctors Details</Link>
      </div>
      <div class="patient-features-container">
        <Link className="patient-text" to='/home' >Change password</Link>
      </div>
      <div class="patient-features-container">
        <Link className="patient-text" to='/PatientCreateProfile' >Update Your Profile</Link>
      </div>
      <div class="patient-features-container">
        <Link className="patient-text" to='/home' >Log Out</Link>
      </div>
      <div class="patient-features-container">
        <p className="patient-text">Book for Lab Test</p>
      </div>
      <div class="patient-features-container">
        <p className="patient-text">Book appointment</p>
      </div>
      <div class="patient-features-container">
        <p className="patient-text">View Medical Report</p>
      </div>
      
     

      <div class="patient-features-container">
        {/* <p lassName="patient-text" ></p> */}
        <p className="patient-text">View Payment Slips</p>
      </div>

     
    </div>
  );
}

export default PatientDashboard;
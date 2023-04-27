import React from "react";
import { Link } from "react-router-dom";
import './DoctorDashboard.css'

function DoctorDashboard() {
  return (
    <div class="dashboard-container">
      <h1 className="home-heading">Home</h1>
      <p className="heading-welcome">Welcome to your dashboard</p>
      <div class="patient-features-container">
        <Link className="doctor-text" to='/DoctorCreateProfile' >Update Your Profile</Link>
      </div>

      <div class="patient-features-container">
        <Link className="doctor-text" to='/PatientCreateProfile' >Create account for patient</Link>
      </div>

      <div class="patient-features-container">
        <Link className="doctor-text" to='/PatientDetail' >View Your Patients Details</Link>
      </div>

      <div class="patient-features-container">
        <Link className="doctor-text" to='/DoctorLogin'>Log Out</Link>
      </div>
    </div>
  );
}

export default DoctorDashboard;
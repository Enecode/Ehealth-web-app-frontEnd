import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Registration from './Component/registration/Registration';
import Home from './Component/Home/Home';
import DoctorCreateProfile from './Component/Doctor/profile/DoctorCreateProfile';
import PatientCreateProfile from './Component/patient/createprofile/PatientCreateProfile';
import DoctorLogin from './Component/Doctor/Login/DoctorLoging';
import DoctorRegistration from './Component/Doctor/Registration/DoctorRegistration';
import PatientDetail from './Component/patient/PatientDetails';
import PatientLogin from './Component/patient/PatientLogin';
import PatientDashboard from './Component/patient/patient-dashboard/PatientDashboard';
import PatientUpdateForm from './Component/patient/PatientUpdateProfile';
import PatientRegistration from './Component/patient/PatientRegistration';
import DoctorDashboard from './Component/Doctor/DoctorDashboard';
import DoctorDetails from './Component/Doctor/DoctorDetail';


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctorcreateprofile" element={<DoctorCreateProfile />} />
            <Route path="/DoctorLogin" element={<DoctorLogin/>} />
            <Route path="/DoctorReg" element={<DoctorRegistration/>} />
            <Route path="/DoctorDashboard" element={<DoctorDashboard/>} />
            <Route path="/DoctorUpdateProfile" element={<DoctorLogin/>} />
            <Route path="/DoctorDetail" element={<DoctorDetails/>} />
            <Route path="/DoctorLogin" element={<DoctorLogin/>} />
            <Route path="/PatientCreateProfile" element={<PatientCreateProfile />} />
            <Route path="/PatientDetail" element={<PatientDetail/>} />
            <Route path="/PatientLogin" element={<PatientLogin/>} />
            <Route path="/PatientUpdateProfile" element={<PatientUpdateForm/>} />
            <Route path="/PatientDashboard" element={<PatientDashboard/>} />
            <Route path="/PatientReg" element={<PatientRegistration/>} />
            <Route path="/SignUp" element={<Registration/>} />
            <Route path="/home" element={<Home />} />
          </Routes>
    </Router>
  );
}

export default App;

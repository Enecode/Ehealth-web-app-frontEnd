import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DoctorCreateProfile.css';

function DoctorCreateProfile() {
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [available_days, setAvailable_days] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [Specialization, setSpecialization] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://52.87.213.149:8000/api/doctor/create/', {
      first_name: first_name,
      last_name: last_name,
      available_days: available_days,
      email: email,
      Specialization: Specialization,
      phone_number: phone_number,
    })
      .then((response) => {
        navigate('/DoctorDashboard');
        console.log(response.data);
       
      })
      .catch((error) => {
        console.log(error.response);
        setErrorMessage(error.response.data.detail);
      });
  };

  return (
    <div>
      <h1 className='heading'>Doctor Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={first_name} onChange={(event) => setFirst_Name(event.target.value)} />
        </label>

        <label>
          Last Name:
          <input type="text" value={last_name} onChange={(event) => setLast_Name(event.target.value)} />
        </label>

        <label>
          Specialization:
          <select value={Specialization} onChange={(event) => setSpecialization(event.target.value)}>
            <option value="" disabled hidden>Select Specialization</option>
            <option value="Dermatologists">Dermatologists</option>
            <option value="Infectious">Infectious disease doctors</option>
            <option value="Ophthalmologists">Ophthalmologists</option>
            <option value="Endocrinologists">Endocrinologists</option>
            <option value="Cardiologists">Cardiologists</option>
            <option value="Gastroenterologists">Gastroenterologists</option>
            <option value="gynecologists">gynecologists</option>
            <option value="Nephrologists">Nephrologists</option>
            <option value="Psychiatrists">Psychiatrists</option>
            <option value="Radiologists">Radiologists</option>
            <option value="Rheumatologists">Rheumatologists</option>
            <option value="Cardiac">Cardiac surgeons</option>
          </select>
        </label>
        <label>
          Available Days:
          <select value={available_days} onChange={(event) => setAvailable_days(event.target.value)}>
            <option value="" disabled hidden>Select Available Days</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
         
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="password" value={phone_number} onChange={(event) => setPhone_number(event.target.value)} />
        </label>
        <button type="submit">Update Profile</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default DoctorCreateProfile;

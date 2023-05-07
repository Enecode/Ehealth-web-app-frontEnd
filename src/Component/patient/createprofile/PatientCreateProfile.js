
import React, { useState } from 'react';
import axios from 'axios';
// import { fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import './PatienceCreateProfile.css'


function PatientCreateProfile() {
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [gender, setGender] = useState('');
  
  
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://imperfect-bite-pipeops-852f7cf2.pipeops.app/api/patients/create/', {
      first_name: first_name,
      last_name: last_name,
      address: address,
      email: email,
      phone_number: phone_number,
      gender: gender,
      date_of_birth: date_of_birth,
    })
      .then((response) => {
        console.log(response.data);
        navigate('/PatientDashboard');
      })
      .catch((error) => {
        console.log(error.response);
        setErrorMessage(error.response.data.detail);
      });
  };

  return (
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
        Address:
        <input type="address" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="tel" value={phone_number} onChange={(event) => setPhone_number(event.target.value)} />
      </label>

      <label>
        Date of birth:
        <input type="date" value={date_of_birth} onChange={(event) => setDate_of_birth(event.target.value)} />
      </label>
      <label class="custom-select">
        Gender:
        <select type='text' value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="" disabled hidden>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Create Profile</button>
      {errorMessage && <div>{errorMessage.join(', ')}</div>}
    </form>
  );
}

export default PatientCreateProfile;

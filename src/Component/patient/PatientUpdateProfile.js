import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientUpdateForm = ({patient_Id}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("id -->", patient_Id)
    
    axios.get(`http://52.87.213.149:8000/api/patients/${patient_Id}/`)
      .then(response => {
        const { first_name, last_name, gender, email, phone_number } = response.data;
        setFirstName(first_name);
        setLastName(last_name);
        setGender(gender);
        setEmail(email);
        setPhoneNumber(phone_number);
      })
      .catch(error => {
        console.log(error);
        setError('Failed to fetch patient data.');
      });
  }, [patient_Id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    const data = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      email: email,
      phone_number: phoneNumber,
    };

    
    axios.put(`http://52.87.213.149:8000/api/patients/${patient_Id}/`, data)
      .then(response => {
        console.log(response);
        
      })
      .catch(error => {
        console.log(error);
        setError('Failed to update patient data.');
      });
      console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <label htmlFor="first-name-input">First Name:</label>
        <input id="first-name-input" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="last-name-input">Last Name:</label>
        <input id="last-name-input" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="gender-select">Gender:</label>
        <select id="gender-select" value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input id="email-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="phone-number-input">Phone Number:</label>
        <input id="phone-number-input" type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default PatientUpdateForm;

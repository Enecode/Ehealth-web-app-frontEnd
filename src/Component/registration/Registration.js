import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
    };
    try {
      const res = await axios.post('http://52.87.213.149:9000/api/register/', newUser);
      console.log(res.data);
      
    } catch (err) {
      console.log(err);
    }
    navigate("/DoctorLogin")
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
      </label>

      <label>
        Last Name:
        <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
      </label>
      
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
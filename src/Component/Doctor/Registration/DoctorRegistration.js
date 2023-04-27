import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const DoctorRegistration = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      email: email,
    };
    try {
      const res = await axios.post('http://52.87.213.149:8000/api/register/', newUser);
      navigate("/DoctorLogin")
      console.log(res.data);
      
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className='register-container'>
      <p className='heading'>Enter your details below to register</p>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input required type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
        </label>

        <label>
          Last Name:
          <input required type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label>
          Email:
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        
        <label>
          Username:
          <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>

  );
};

export default DoctorRegistration;
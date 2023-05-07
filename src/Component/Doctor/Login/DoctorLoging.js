import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './DoctorLogin.css';

function DoctorLogin() {
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://imperfect-bite-pipeops-852f7cf2.pipeops.app/api/token/', {
      password: password,
      username: username,
    })
      .then((response) => {

        axios.post('https://imperfect-bite-pipeops-852f7cf2.pipeops.app/api/token/', {
          password: password,
          username: username,
        }, {
          headers: {
            'Authorization': `Bearer ${response.data.access}`,
          },
        })
          .then((response) => {
           
            navigate("/DoctorDashboard")
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .then(data => {
            console.log("Login successful", data);
          })
          .catch(error => {
                       
            if (error.response.status === 401) {
              setErrorMessage("Incorrect password");
              console.log("incorrect password");
            } else if (error.response.status === 404) {
              setErrorMessage("Username not found");
              console.log("username not found");
            } else {
              setErrorMessage("Incorrect username");
              console.log("incorrect username");
            }
          })
      })
      .catch(error => {
        setErrorMessage(error.response.data.username);
        setErrorMessage(error.response.data.password);
      })
      if (!username || !password) {
        throw new Error('{"detail":"No active account found with the given credentials"}');
      }
  }

  return (
    <div className='login-container'>
      <p className='heading'>Enter your username and password below to login</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='doctor-login-passwordl'>
            Password:
            <input required type="password" className='doctor-login-passwordt' value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
        </div>
        <div>
          <label className='doctor-login-usernamel'>
            Username:
            <input required type="text" className='doctor-login-usernamet' value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className='submit-btn-holder'><button className='login-submit-button' type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default DoctorLogin;
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PatientLogin() {
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
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
            navigate("/PatientDashboard")
            console.log(response);
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
        setErrorMessage(error.message);
      })
      
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Username:
        <input required type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
  
      </label>
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default PatientLogin;
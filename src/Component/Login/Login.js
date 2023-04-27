import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://52.87.213.149:9000/api/token/', {
      password: password,
      username: username,
    })
      .then((response) => {
        // Store the access token in local storage or a cookie
        // localStorage.setItem('access_token', response.data.access);

        axios.post('http://52.87.213.149:9000/api/token/', {
          password: password,
          username: username,
          // Add any other patient details you need to collect
        }, {
          headers: {
            'Authorization': `Bearer ${response.data.access}`,
          },
        })
          .then((response) => {
            // Handle successful patient creation
            navigate("/home")
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .then(data => {
            console.log("Login successful", data);
          })
          .catch(error => {
            // Handle errors in patient creation
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
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
  
      </label>
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default Login;
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function Registration() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const registered = {
      email: email,
      password: password
    };

    axios.post('http://localhost:4000/app/register', registered)
      .then(response => {
        console.log(response.data);
        setEmail('');
        setPassword('');
        setSubmitted(true);
      
      })
      .catch(error => {
        console.log(error.response.data);
        
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    return (
      <div className='container'>
       
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <h6 style={{textAlign:'center', color:"dark green"}}>Register</h6>
            <label>
              E-mail:
              <input
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={handleEmailChange}
                className='form-control form-group'
                required
              />
            </label>
            <br/>
            <label>
              Password:
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                className='form-control form-group'
                required
              />
            </label>
            <br/>
            {submitted && <h5 style={{color: "darkGreen", textAlign: "center"}}>Registered successfully!</h5>} 
            <br/>
            <input
              type='submit'
              className='btn btn-danger btn-block'
              value='Submit'
            />
          </form>
          
        </div>
      </div>
    );
  }


export default Registration;

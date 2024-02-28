'use client'
import React, { useState, FormEvent } from 'react';
import './page.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) { 
        // Handle general HTTP errors
        throw new Error(`Login failed with status: ${response.status}`); 
      }

      const data = await response.json(); 

      if (data.success) {
        console.log('Login successful!');
        // Redirect the user or handle successful login
      } else {
        setErrorMessage(data.error || 'Login failed');
      }
    } catch (error) { 
      // Handle network errors and login errors
      setErrorMessage('An error occurred');  
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;

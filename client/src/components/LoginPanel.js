
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
//import { baseUrl } from ‘./config’;
import { UserContext } from './UserContext';
import './LoginPanel.css';

const LoginPanel = (props) => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.ok) {
      const { token } = await response.json();
      login(token);
      props.history.push('/');// CHANGE TO REDIRECT TO PRODUCTS
    }
  };
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  return (
    <main className='login-form-wrapper'>
      <div className='login-form-container'>
        <h2>Log In</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type='text' placeholder='Email' value={email} onChange={updateEmail} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type='password' placeholder='Password' value={password} onChange={updatePassword} />
          </div>
          <div className="form-group-btn">
            <button className="btn btn-primary" type='submit'>Login</button>
            <Link to="/signup" className="btn btn-link">
              Need to sign up?
          </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
export default LoginPanel;

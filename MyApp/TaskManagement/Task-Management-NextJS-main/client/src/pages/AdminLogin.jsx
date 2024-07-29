// pages/AdminLogin.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { loginUser, loginInfo, updateLoginInfo, loginError, isLoginLoading } = useContext(AuthContext);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      setFormError('Both fields are required');
      return;
    }
    setFormError('');
    await loginUser(e);
    if (!loginError) {
      navigate('/admindash');
    }
  };

  return (
    <div style={outerContainerStyle} className='bg-gray-200'>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Admin Login</h1>
        {formError && <p style={errorStyle}>{formError}</p>}
        <form style={formStyle} onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Admin Email"
            value={loginInfo.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginInfo.password}
            onChange={handleChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle} disabled={isLoginLoading}>
            {isLoginLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {loginError && <p style={errorStyle}>{loginError.error}</p>}
      </div>
    </div>
  );
};

const outerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f4',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '400px',
  padding: '50px',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2em',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#242f47',
  border: 'none',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginBottom: '10px',
};

export default AdminLogin;

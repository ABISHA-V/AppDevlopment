import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const GetStarted = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <div style={logoStyle}>OptiTime</div>
          <ul style={navListStyle}>
            <li style={navItemStyle}><Link to="/login" style={navLinkStyle}>User Login</Link></li>
            <li style={navItemStyle}><Link to="/admin-login" style={navLinkStyle}>Admin Login</Link></li>
          </ul>
        </nav>
      </header>
      <main style={mainStyle}>
        <h1 style={headingStyle}>Welcome to OptiTime Task Management</h1>
        <p style={paragraphStyle}>Efficiently manage your tasks and boost your productivity with OptiTime.</p>
        <div style={featuresContainerStyle}>
          <div style={featureStyle}>
            <h2 style={featureHeadingStyle}>Organize Tasks</h2>
            <p style={featureParagraphStyle}>Keep your tasks organized with our intuitive interface.</p>
          </div>
          <div style={featureStyle}>
            <h2 style={featureHeadingStyle}>Track Progress</h2>
            <p style={featureParagraphStyle}>Monitor task completion and stay on top of your deadlines.</p>
          </div>
          
        </div>
        <div style={ctaContainerStyle}>
          <Link to="/register" style={ctaButtonStyle}>Get Started</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Inline styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
};

const headerStyle = {
  backgroundColor: '#242f47',
  padding: '15px 20px',
  color: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
};

const navListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
};

const navItemStyle = {
  margin: '0 20px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  margin: '20px',
};

const headingStyle = {
  fontSize: '2.5em',
  margin: '20px 0',
  color: '#333',
};

const paragraphStyle = {
  fontSize: '1.2em',
  margin: '0 20px',
  color: '#666',
};

const featuresContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const featureStyle = {
  margin: '20px 0',
  textAlign: 'center',
};

const featureHeadingStyle = {
  fontSize: '2em',
  color: '#333',
};

const featureParagraphStyle = {
  fontSize: '1.2em',
  color: '#666',
};

const ctaContainerStyle = {
  marginTop: '30px',
};

const ctaButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#242f47',
  color: '#ffffff',
  borderRadius: '5px',
  fontSize: '18px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease',
};

export default GetStarted;

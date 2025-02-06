import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
import SocialLogin from './SocialLogin';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // Perform authentication logic here
    console.log('User logged in:', formData);
    onLogin(); // Call onLogin prop to update authentication state
    navigate('/profile');
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <UserForm formType="login" onSubmit={handleLogin} />
      <SocialLogin />
      <p>New user? <button onClick={() => navigate('/register')}>Register here</button></p>
      <p><button onClick={() => navigate('/')}>Back to Landing Page</button></p>
    </div>
  );
};

export default LoginPage;
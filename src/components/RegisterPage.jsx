import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    // Perform registration logic here
    console.log('User registered:', formData);
    navigate('/profile');
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <UserForm formType="register" onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;

import React from 'react';
import AuthForm from '../../components/auth/AuthForm';

const Register = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
        <p className="text-muted-foreground text-center mb-8">
          Create a new account to start shopping with us.
        </p>
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default Register;

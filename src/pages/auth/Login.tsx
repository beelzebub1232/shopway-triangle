
import React from 'react';
import AuthForm from '../../components/auth/AuthForm';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
        <p className="text-muted-foreground text-center mb-8">
          Welcome back! Sign in to your account to continue.
        </p>
        <AuthForm type="login" redirectPath="/dashboard" />
      </div>
    </div>
  );
};

export default Login;

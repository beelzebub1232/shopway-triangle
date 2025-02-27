
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'register';
  redirectPath?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ 
  type, 
  redirectPath = '/' 
}) => {
  const navigate = useNavigate();
  const { login, register, loading } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'customer' | 'staff' | 'admin'>('customer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === 'login') {
      const success = await login(email, password, role);
      if (success) navigate(redirectPath);
    } else {
      const success = await register(name, email, password);
      if (success) navigate('/login');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {type === 'register' && (
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full"
            />
          </div>
        )}
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={type === 'register' ? 'Create a password' : 'Enter your password'}
            required
            className="w-full"
          />
        </div>
        
        {type === 'login' && (
          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium">
              Login As
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as 'customer' | 'staff' | 'admin')}
              className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              For demo purposes: Different login types have different dashboards.
            </p>
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </>
          ) : (
            type === 'login' ? 'Sign In' : 'Create Account'
          )}
        </Button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        {type === 'login' ? (
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-primary hover:underline font-medium">
              Register
            </a>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-primary hover:underline font-medium">
              Sign In
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;

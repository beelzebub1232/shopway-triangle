
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, User, ShoppingBag, CreditCard, LogOut } from 'lucide-react';

const UserDashboard = () => {
  const { user, isAuthenticated, isCustomer, logout } = useAuth();
  
  if (!isAuthenticated || !isCustomer) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <p className="text-muted-foreground mb-8">
        Welcome back, {user?.name}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 border border-border rounded-lg flex flex-col items-center text-center">
          <ShoppingBag className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium mb-1">My Orders</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View and track your orders
          </p>
          <Button variant="outline" className="w-full">View Orders</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg flex flex-col items-center text-center">
          <User className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium mb-1">Profile</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage your personal info
          </p>
          <Button variant="outline" className="w-full">Edit Profile</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg flex flex-col items-center text-center">
          <CreditCard className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium mb-1">Payment Methods</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage payment options
          </p>
          <Button variant="outline" className="w-full">Manage Payments</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg flex flex-col items-center text-center">
          <Package className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium mb-1">Addresses</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage shipping addresses
          </p>
          <Button variant="outline" className="w-full">Manage Addresses</Button>
        </div>
      </div>
      
      <div className="flex justify-center mt-12">
        <Button variant="outline" onClick={logout} className="flex items-center">
          <LogOut className="w-4 h-4 mr-2" /> Sign Out
        </Button>
      </div>
    </div>
  );
};

export default UserDashboard;

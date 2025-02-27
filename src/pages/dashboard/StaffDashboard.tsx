
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Users, ShoppingBag, BarChart, LogOut } from 'lucide-react';

const StaffDashboard = () => {
  const { user, isAuthenticated, isStaff, logout } = useAuth();
  
  if (!isAuthenticated || !isStaff) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Staff Dashboard</h1>
      <p className="text-muted-foreground mb-8">
        Welcome, {user?.name}. Manage orders and customers here.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border border-border rounded-lg">
          <ShoppingBag className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Orders</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View and manage customer orders
          </p>
          <Button variant="outline">Manage Orders</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <Users className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Customers</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View customer information
          </p>
          <Button variant="outline">View Customers</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <Package className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Products</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View product inventory
          </p>
          <Button variant="outline">View Products</Button>
        </div>
      </div>
      
      <div className="p-6 border border-border rounded-lg mb-8">
        <h3 className="font-medium text-lg mb-4">Recent Orders</h3>
        <p className="text-muted-foreground">
          No orders to display at this time.
        </p>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" onClick={logout} className="flex items-center">
          <LogOut className="w-4 h-4 mr-2" /> Sign Out
        </Button>
      </div>
    </div>
  );
};

export default StaffDashboard;

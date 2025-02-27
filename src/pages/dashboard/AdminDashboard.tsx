
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Package, Users, Settings, BarChart, LogOut, ShieldAlert, Database } from 'lucide-react';

const AdminDashboard = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-muted-foreground mb-8">
        Welcome, {user?.name}. Full administrative controls are available here.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <div className="p-6 border border-border rounded-lg">
          <BarChart className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Analytics</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View site performance metrics
          </p>
          <Button variant="outline">View Analytics</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <Package className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Products</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add and manage products
          </p>
          <Button variant="outline">Manage Products</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <Users className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Users</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage user accounts
          </p>
          <Button variant="outline">Manage Users</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <Settings className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Settings</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Configure store settings
          </p>
          <Button variant="outline">Store Settings</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <ShieldAlert className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Permissions</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage user roles and access
          </p>
          <Button variant="outline">Access Control</Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg">
          <Database className="w-8 h-8 mb-4 text-primary" />
          <h3 className="font-medium text-lg mb-1">Database</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View and manage store data
          </p>
          <Button variant="outline">Database Tools</Button>
        </div>
      </div>
      
      <div className="p-6 border border-border rounded-lg mb-8">
        <h3 className="font-medium text-lg mb-4">System Status</h3>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>All systems operational</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Last checked: {new Date().toLocaleString()}
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

export default AdminDashboard;

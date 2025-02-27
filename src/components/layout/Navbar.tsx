
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Search,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { itemCount } = useCart();
  const location = useLocation();
  
  // Listen for scroll to add backdrop when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300
    ${isScrolled ? 'py-2 glass' : 'py-4 bg-transparent'}
  `;

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const getDashboardLink = () => {
    if (!isAuthenticated) return "/login";
    
    switch (user?.role) {
      case "admin":
        return "/admin";
      case "staff":
        return "/staff";
      case "customer":
      default:
        return "/dashboard";
    }
  };
  
  const dashboardText = () => {
    if (!isAuthenticated) return "Login";
    
    switch (user?.role) {
      case "admin":
        return "Admin Dashboard";
      case "staff":
        return "Staff Dashboard";
      case "customer":
      default:
        return "My Account";
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-display font-bold">
            LUXESTORE
          </span>
          <span className="text-xs tracking-widest mt-1 text-muted-foreground">
            PREMIUM
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover-underline">Home</Link>
          <Link to="/products" className="hover-underline">Shop</Link>
          <Link to="/about" className="hover-underline">About</Link>
          <Link to="/contact" className="hover-underline">Contact</Link>
        </div>
        
        {/* Actions: Search, Cart, User */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/search">
            <Search className="h-5 w-5 transition-colors hover:text-primary" />
          </Link>
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-5 w-5 transition-colors hover:text-primary" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
          
          <div className="relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <User className="h-5 w-5" />
              <ChevronDown className="h-3 w-3" />
            </button>
            
            {/* User dropdown */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 py-2 glass rounded-md shadow-lg ring-1 ring-black ring-opacity-5 animate-fade-in">
                <div className="px-4 py-2 text-sm text-muted-foreground border-b border-border">
                  {isAuthenticated ? `Hi, ${user?.name}` : 'Account'}
                </div>
                
                <Link 
                  to={getDashboardLink()} 
                  className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  {dashboardText()}
                </Link>
                
                {isAuthenticated ? (
                  <button 
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-accent transition-colors flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Sign Out
                  </button>
                ) : (
                  <Link 
                    to="/register" 
                    className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                  >
                    Register
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 min-h-[50vh] animate-slide-in-right">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link to="/" className="text-lg font-medium">Home</Link>
            <Link to="/products" className="text-lg font-medium">Shop</Link>
            <Link to="/about" className="text-lg font-medium">About</Link>
            <Link to="/contact" className="text-lg font-medium">Contact</Link>
            
            <div className="border-t border-border pt-4 mt-4">
              <Link to="/search" className="flex items-center space-x-2 py-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </Link>
              
              <Link to={getDashboardLink()} className="flex items-center space-x-2 py-2">
                <User className="h-5 w-5" />
                <span>{dashboardText()}</span>
              </Link>
              
              {isAuthenticated ? (
                <button 
                  onClick={logout}
                  className="flex items-center space-x-2 py-2 text-destructive"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <Link to="/register" className="flex items-center space-x-2 py-2">
                  <User className="h-5 w-5" />
                  <span>Register</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

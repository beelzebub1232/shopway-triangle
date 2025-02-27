
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";

type UserRole = "customer" | "staff" | "admin";

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isStaff: boolean;
  isCustomer: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers = [
  { id: "1", email: "admin@example.com", password: "admin123", name: "Admin User", role: "admin" as UserRole },
  { id: "2", email: "staff@example.com", password: "staff123", name: "Staff User", role: "staff" as UserRole },
  { id: "3", email: "user@example.com", password: "user123", name: "John Customer", role: "customer" as UserRole }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for saved user
    const savedUser = localStorage.getItem("ecommerce-user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem("ecommerce-user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password && u.role === role
    );
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("ecommerce-user", JSON.stringify(userWithoutPassword));
      toast.success(`Welcome back, ${userWithoutPassword.name}!`);
      setLoading(false);
      return true;
    } else {
      toast.error("Invalid credentials");
      setLoading(false);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const existingUser = mockUsers.find(u => u.email === email);
    
    if (existingUser) {
      toast.error("Email already in use");
      setLoading(false);
      return false;
    }
    
    // Normally we would create the user in the database here
    const newUser = {
      id: Math.random().toString(36).substring(2, 9),
      email,
      name,
      role: "customer" as UserRole
    };
    
    setUser(newUser);
    localStorage.setItem("ecommerce-user", JSON.stringify(newUser));
    toast.success("Account created successfully");
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ecommerce-user");
    toast.info("You have been logged out");
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    isStaff: user?.role === "staff",
    isCustomer: user?.role === "customer"
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

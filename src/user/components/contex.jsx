import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage if available
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Parse the user data from localStorage
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user data in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access Auth context
export const useAuth = () => useContext(AuthContext);

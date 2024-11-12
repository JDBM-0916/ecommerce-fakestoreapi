"use client"; // Agrega esta línea al principio del archivo

import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any; // Puedes especificar el tipo exacto de usuario si lo deseas
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Asegúrate de que `data.user` contiene la información del usuario
        setToken(data.token); // Asegúrate de que `data.token` contenga el token
        return true; // Inicio de sesión exitoso
      } else {
        return false; // Fallo en el inicio de sesión
      }
    } catch (error) {
      console.error('Login failed:', error);
      return false; // Fallo en el inicio de sesión
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

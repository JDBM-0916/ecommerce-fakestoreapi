'use client';

import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from "@/auth/AuthContext";
import { useRouter } from 'next/navigation'; // Asegúrate de importar useRouter
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const LoginPage = () => {
  const router = useRouter(); // Inicializa el enrutador
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);

    if (!success) {
      setErrorMessage('Credenciales incorrectas. Intenta de nuevo.');
      setShowAlert(true);
    } else {
      console.log('Login success');
      router.push('/home'); // Usa router.push para navegar
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="flex flex-col items-center space-y-4 bg-white p-10 rounded-3xl shadow-lg max-w-md w-full">

        {/* Header */}
        <h2 className='text- font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
          Elegance & Home
        </h2>

        {/* Back Button */}
        <Link href={'/home'} className="absolute top-4 left-4 bg-pink-500 w-9 h-9 flex items-center justify-center rounded-full text-white hover:bg-pink-400">
          <ArrowLeft size={20} />
        </Link>

        {/* Alert for login error */}
        {showAlert && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {errorMessage}
            </AlertDescription>
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Email Input */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="ejemplo@empresa.com"
                required
                autoComplete='off'
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                placeholder="••••••••"
                required
                autoComplete='off'
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

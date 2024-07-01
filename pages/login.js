// pages/Login.js
import { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi form
    if (!username || !password) {
      setError('Username dan Password harus diisi');
      return;
    }

    // Contoh sederhana untuk redirect ke halaman home setelah login
    try {
      // Simulasi login sukses, seharusnya ada validasi lebih lanjut di sini
      // Misalnya, jika login berhasil, navigasi ke halaman home
      Router.push('/home');
    } catch (error) {
      setError('Login gagal. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Halaman Login</title>
        <meta name="description" content="Halaman Login menggunakan Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">Halaman Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan username"
              aria-label="Username"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan password"
              aria-label="Password"
            />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-6">Daftar KasPlus</h1>
        <form>
          <input type="text" placeholder="Nama Lengkap" className="w-full p-3 mb-4 border rounded-xl" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-xl" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-xl" />
          <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">Daftar</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Sudah punya akun? <Link to="/" className="text-green-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
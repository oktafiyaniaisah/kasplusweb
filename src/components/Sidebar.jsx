import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-green-700 text-white p-4 fixed">
      <h1 className="text-xl font-bold mb-6">KasPlus</h1>
      <ul className="space-y-3">
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/kasir" className="hover:underline">Kasir</Link></li>
        <li><Link to="/produk" className="hover:underline">Produk</Link></li>
        <li><Link to="/inventaris" className="hover:underline">Inventaris</Link></li>
        <li><Link to="/keuangan" className="hover:underline">Keuangan</Link></li>
        <li><Link to="/pajak" className="hover:underline">Pajak</Link></li>
        <li><Link to="/tren-penjualan" className="hover:underline">Tren Penjualan</Link></li>
        <li><Link to="/integrasi-bank" className="hover:underline">Integrasi Bank</Link></li>
        <li><Link to="/laporan" className="hover:underline">Laporan</Link></li>
      </ul>
    </div>
  );
}
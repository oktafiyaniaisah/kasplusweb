import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function KeuanganPage() {
  const [filter, setFilter] = useState('harian');

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Keuangan</h1>

        {/* Filter dan PDF */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <label className="font-semibold mr-4">Lihat laporan:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="harian">Harian</option>
              <option value="mingguan">Mingguan</option>
              <option value="tahunan">Tahunan</option>
            </select>
          </div>
          <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow">
            Download PDF
          </button>
        </div>

        {/* Ringkasan Keuangan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Pendapatan</h3>
            <p className="text-2xl font-bold text-green-700">Rp 4.200.000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Pengeluaran</h3>
            <p className="text-2xl font-bold text-red-500">Rp 1.150.000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Laba Bersih</h3>
            <p className="text-2xl font-bold text-blue-600">Rp 3.050.000</p>
          </div>
        </div>

        {/* Riwayat Transaksi */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Riwayat Transaksi</h2>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="text-sm text-gray-600 border-b">
                <th className="py-2">Tanggal</th>
                <th>Jenis</th>
                <th>Keterangan</th>
                <th>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">2025-05-30</td>
                <td>Pendapatan</td>
                <td>Penjualan Puding</td>
                <td className="text-green-700 font-semibold">Rp 600.000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2025-05-30</td>
                <td>Pengeluaran</td>
                <td>Bahan Baku</td>
                <td className="text-red-500 font-semibold">Rp 200.000</td>
              </tr>
              {/* Tambah data dummy lainnya */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

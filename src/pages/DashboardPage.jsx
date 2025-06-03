import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

// Data grafik bulanan
const dataPenjualan = [
  { bulan: 'Jan', penjualan: 400 },
  { bulan: 'Feb', penjualan: 800 },
  { bulan: 'Mar', penjualan: 600 },
  { bulan: 'Apr', penjualan: 1000 },
];

const dataPendapatan = [
  { bulan: 'Jan', pendapatan: 1000 },
  { bulan: 'Feb', pendapatan: 1500 },
  { bulan: 'Mar', pendapatan: 1300 },
  { bulan: 'Apr', pendapatan: 1800 },
];

const dataProduk = [
  { nama: 'Puding Coklat', jumlah: 40 },
  { nama: 'Puding Mangga', jumlah: 25 },
  { nama: 'Puding Stroberi', jumlah: 35 },
];

const dataMingguanPerBulan = {
  Jan: [
    { minggu: '1-7', pemasukan: 500000, pengeluaran: 560000 },
    { minggu: '8-14', pemasukan: 300000, pengeluaran: 250000 },
    { minggu: '15-21', pemasukan: 400000, pengeluaran: 300000 },
    { minggu: '22-28', pemasukan: 450000, pengeluaran: 350000 },
  ],
  Feb: [
    { minggu: '1-7', pemasukan: 600000, pengeluaran: 520000 },
    { minggu: '8-14', pemasukan: 350000, pengeluaran: 270000 },
    { minggu: '15-21', pemasukan: 480000, pengeluaran: 320000 },
    { minggu: '22-28', pemasukan: 500000, pengeluaran: 400000 },
  ],
  Mar: [
    { minggu: '1-7', pemasukan: 700000, pengeluaran: 640000 },
    { minggu: '8-14', pemasukan: 450000, pengeluaran: 370000 },
    { minggu: '15-21', pemasukan: 580000, pengeluaran: 420000 },
    { minggu: '22-28', pemasukan: 600000, pengeluaran: 500000 },
  ],
};

const COLORS = ['#34d399', '#10b981', '#047857'];

export default function DashboardPage() {
  const [bulanDipilih, setBulanDipilih] = useState('Jan');
  const dataMingguan = dataMingguanPerBulan[bulanDipilih];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Dashboard</h1>

        {/* Ringkasan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-green-800">
            <p className="text-lg font-semibold">Pendapatan</p>
            <p className="text-2xl font-bold mt-2">Rp 5.000.000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-green-800">
            <p className="text-lg font-semibold">Pengeluaran</p>
            <p className="text-2xl font-bold mt-2">Rp 2.000.000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-green-800">
            <p className="text-lg font-semibold">Total Transaksi</p>
            <p className="text-2xl font-bold mt-2">320</p>
          </div>
        </div>

        {/* Grafik mingguan dengan filter */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold text-green-800">Pemasukan & Pengeluaran Mingguan</p>
            <select
              value={bulanDipilih}
              onChange={(e) => setBulanDipilih(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm text-green-800 focus:outline-none"
            >
              {Object.keys(dataMingguanPerBulan).map((bulan) => (
                <option key={bulan} value={bulan}>{bulan}</option>
              ))}
            </select>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={dataMingguan}>
              <XAxis dataKey="minggu" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip formatter={(value) => `Rp ${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="pengeluaran" fill="#f87171" name="Pengeluaran" />
              <Bar dataKey="pemasukan" fill="#34d399" name="Pemasukan" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik penjualan dan produk terlaris */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow col-span-2">
            <p className="text-lg font-semibold text-green-800 mb-4">Grafik Penjualan</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dataPenjualan}>
                <XAxis dataKey="bulan" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="penjualan" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-lg font-semibold text-green-800 mb-4">Produk Terlaris</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dataProduk}
                  dataKey="jumlah"
                  nameKey="nama"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#10b981"
                  label
                >
                  {dataProduk.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grafik garis pendapatan */}
        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <p className="text-lg font-semibold text-green-800 mb-4">Grafik Pendapatan</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dataPendapatan}>
              <XAxis dataKey="bulan" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line type="monotone" dataKey="pendapatan" stroke="#047857" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

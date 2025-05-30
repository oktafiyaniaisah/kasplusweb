// pages/DashboardPage.jsx
import Sidebar from '../components/Sidebar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

export default function DashboardPage() {
  const summary = {
    totalPenjualan: 'Rp 120.000',
    produkTerjual: 40,
    rataRataHarian: 'Rp 30.000',
  };

  const penjualanData = {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
    datasets: [
      {
        label: 'Jumlah Penjualan',
        data: [12, 19, 10, 14, 20],
        backgroundColor: 'rgba(34,197,94,0.5)',
      },
    ],
  };

  const pendapatanData = {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
    datasets: [
      {
        label: 'Pendapatan Harian',
        data: [20000, 30000, 25000, 40000, 50000],
        borderColor: 'rgb(34,197,94)',
        backgroundColor: 'rgba(34,197,94,0.2)',
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ['Puding Coklat', 'Puding Mangga', 'Puding Strawberry'],
    datasets: [
      {
        label: 'Produk Terlaris',
        data: [15, 10, 5],
        backgroundColor: ['#4ade80', '#86efac', '#bbf7d0'],
      },
    ],
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 text-sm">Total Penjualan</h2>
            <p className="text-2xl font-bold text-green-700">{summary.totalPenjualan}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 text-sm">Produk Terjual</h2>
            <p className="text-2xl font-bold text-green-700">{summary.produkTerjual}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-600 text-sm">Rata-rata Harian</h2>
            <p className="text-2xl font-bold text-green-700">{summary.rataRataHarian}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Grafik Pendapatan</h2>
            <Line data={pendapatanData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Jumlah Penjualan</h2>
            <Bar data={penjualanData} />
          </div>
        </div>

        <div className="bg-white p-6 mt-8 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Produk Terlaris</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}

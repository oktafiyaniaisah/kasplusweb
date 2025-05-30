// pages/TrenPenjualanPage.jsx
import Sidebar from '../components/Sidebar';

export default function TrenPenjualanPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Tren Penjualan</h1>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Grafik Penjualan</h2>
          <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">[Grafik Placeholder]</p>
          </div>

          <div className="mt-6">
            <label htmlFor="range" className="block mb-2 font-medium text-gray-700">Pilih Rentang Waktu:</label>
            <select id="range" className="w-60 p-2 border rounded">
              <option>7 Hari Terakhir</option>
              <option>30 Hari Terakhir</option>
              <option>3 Bulan Terakhir</option>
              <option>1 Tahun Terakhir</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// pages/LaporanPage.jsx
import Sidebar from '../components/Sidebar';

export default function LaporanPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Laporan Bisnis</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Laporan Keuangan</h2>
            <p className="text-sm text-gray-600">Pendapatan, pengeluaran, dan riwayat transaksi.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Laporan Inventaris</h2>
            <p className="text-sm text-gray-600">Status stok dan histori masuk/keluar barang.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Laporan Penjualan</h2>
            <p className="text-sm text-gray-600">Produk terjual, waktu penjualan, dan total penjualan.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Laporan Pajak</h2>
            <p className="text-sm text-gray-600">Ringkasan pajak terutang dan terbayar berdasarkan periode.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Laporan Produk Terlaris</h2>
            <p className="text-sm text-gray-600">Analisis performa produk terlaris selama periode tertentu.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Ekspor Laporan</h2>
          <form className="flex flex-col md:flex-row items-start md:items-end gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Laporan</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
                <option>Keuangan</option>
                <option>Inventaris</option>
                <option>Penjualan</option>
                <option>Pajak</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Periode</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
                <option>Harian</option>
                <option>Mingguan</option>
                <option>Bulanan</option>
                <option>Tahunan</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-lg mt-2 md:mt-0"
            >
              Ekspor PDF
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

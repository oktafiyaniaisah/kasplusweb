// pages/PajakPage.jsx
import Sidebar from '../components/Sidebar';

export default function PajakPage() {
  const pendapatan = 12000000;
  const pajakPersen = 10;
  const estimasiPajak = (pendapatan * pajakPersen) / 100;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Perhitungan Pajak</h1>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-xl">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Total Pendapatan</label>
            <input
              type="number"
              value={pendapatan}
              disabled
              className="mt-1 block w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Persentase Pajak (%)</label>
            <input
              type="number"
              value={pajakPersen}
              disabled
              className="mt-1 block w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Estimasi Pajak</label>
            <input
              type="text"
              value={`Rp ${estimasiPajak.toLocaleString()}`}
              disabled
              className="mt-1 block w-full border px-3 py-2 rounded bg-gray-100 text-green-800 font-bold"
            />
          </div>

          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
            Simpan Laporan Pajak
          </button>
        </div>
      </div>
    </div>
  );
}

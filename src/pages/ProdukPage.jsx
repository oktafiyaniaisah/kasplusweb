// pages/ProdukPage.jsx
import Sidebar from '../components/Sidebar';

export default function ProdukPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Daftar Produk</h1>

        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Cari produk..."
            className="border px-3 py-2 rounded w-1/3"
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            + Tambah Produk
          </button>
        </div>

        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="text-left p-3">Nama Produk</th>
              <th className="text-left p-3">Harga</th>
              <th className="text-left p-3">Stok</th>
              <th className="text-left p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {[
              { nama: 'Puding Strawberry', harga: 5000, stok: 30 },
              { nama: 'Puding Coklat', harga: 6000, stok: 20 },
            ].map((produk, i) => (
              <tr key={i} className="border-b hover:bg-green-50">
                <td className="p-3">{produk.nama}</td>
                <td className="p-3">Rp {produk.harga}</td>
                <td className="p-3">{produk.stok}</td>
                <td className="p-3 space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

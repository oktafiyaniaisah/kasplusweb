// pages/InventarisPage.jsx
import Sidebar from '../components/Sidebar';

export default function InventarisPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Manajemen Inventaris</h1>

        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Cari barang..."
            className="border px-3 py-2 rounded w-1/3"
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            + Tambah Barang
          </button>
        </div>

        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="text-left p-3">Nama Barang</th>
              <th className="text-left p-3">Kategori</th>
              <th className="text-left p-3">Stok</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {[
              { nama: 'Kemasan Plastik', kategori: 'Bahan', stok: 100, status: 'Aman' },
              { nama: 'Puding Coklat', kategori: 'Produk', stok: 15, status: 'Perlu Restock' },
            ].map((item, i) => (
              <tr key={i} className="border-b hover:bg-green-50">
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.kategori}</td>
                <td className="p-3">{item.stok}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.status === 'Aman' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
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

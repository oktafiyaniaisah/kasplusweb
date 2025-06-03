// pages/ProdukPage.jsx
import Sidebar from '../components/Sidebar';

export default function ProdukPage() {
return (
<div className="flex bg-gray-100 min-h-screen">
<Sidebar />
<div className="ml-64 p-8 w-full">
<div className="flex justify-between items-center mb-6">
<h1 className="text-3xl font-bold text-green-800">Manajemen Produk</h1>
<button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow">
+ Tambah Produk
</button>
</div>
<div className="bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-green-100 text-green-800">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Nama Produk</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Kategori</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Harga</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Stok</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {[
            { nama: "Puding Coklat", kategori: "Dessert", harga: 6000, stok: 20, status: "Aktif" },
            { nama: "Puding Mangga", kategori: "Dessert", harga: 7000, stok: 12, status: "Aktif" },
          ].map((produk, i) => (
            <tr key={i} className="border-t">
              <td className="px-6 py-4">{produk.nama}</td>
              <td className="px-6 py-4">{produk.kategori}</td>
              <td className="px-6 py-4">Rp {produk.harga}</td>
              <td className="px-6 py-4">{produk.stok}</td>
              <td className="px-6 py-4">{produk.status}</td>
              <td className="px-6 py-4 space-x-2">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-3 py-1 rounded text-sm">Edit</button>
                <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-sm">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
);
}
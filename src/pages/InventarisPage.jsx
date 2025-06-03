import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function InventarisPage() {
  const [inventaris, setInventaris] = useState([
    { id: 1, nama: 'Gelas Plastik', stok: 100, lokasi: 'Gudang A' },
    { id: 2, nama: 'Sendok', stok: 200, lokasi: 'Gudang B' },
    { id: 3, nama: 'Box Kemasan', stok: 50, lokasi: 'Gudang A' },
  ]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Inventaris</h1>
        <button className="mb-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition">
          + Tambah Inventaris
        </button>
        <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead className="border-b border-gray-300">
              <tr>
                <th className="px-4 py-2">Nama Barang</th>
                <th className="px-4 py-2">Stok</th>
                <th className="px-4 py-2">Lokasi</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {inventaris.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-green-50">
                  <td className="px-4 py-3">{item.nama}</td>
                  <td className="px-4 py-3">{item.stok}</td>
                  <td className="px-4 py-3">{item.lokasi}</td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                      Hapus
                    </button>
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

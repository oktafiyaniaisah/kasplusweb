// pages/KasirPage.jsx
import Sidebar from '../components/Sidebar';

const produkList = [
  { nama: "Puding Strawberry", harga: 5000 },
  { nama: "Puding Coklat", harga: 6000 },
  { nama: "Puding Mangga", harga: 7000 },
  { nama: "Puding Vanila", harga: 5500 },
  { nama: "Puding Matcha", harga: 7500 },
  { nama: "Puding Taro", harga: 7200 },
];

export default function KasirPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Sistem Kasir POS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daftar Produk */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Produk</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {produkList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-green-50 transition-all border border-green-100"
                >
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-800 font-bold text-xl mx-auto mb-3">
                    {item.nama.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-center text-green-800">{item.nama}</h3>
                  <p className="text-sm text-center text-gray-600">Rp {item.harga}</p>
                  <button className="mt-3 w-full px-3 py-1 bg-green-700 hover:bg-green-600 text-white rounded text-sm">
                    Tambah ke Keranjang
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Keranjang */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Keranjang</h2>
            <ul className="text-sm text-gray-800 mb-4 space-y-2">
              <li className="flex justify-between">
                <span>Puding Coklat x1</span>
                <span>Rp 6000</span>
              </li>
              <li className="flex justify-between">
                <span>Puding Mangga x2</span>
                <span>Rp 14000</span>
              </li>
            </ul>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between font-bold text-green-800">
              <span>Total:</span>
              <span>Rp 20000</span>
            </div>
            <button className="mt-6 w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-lg">
              Bayar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

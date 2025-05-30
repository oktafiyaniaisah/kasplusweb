import Sidebar from '../components/Sidebar';

export default function KasirPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Sistem Kasir POS</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Daftar Produk */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold mb-2">Produk</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Puding Strawberry", "Puding Coklat", "Puding Mangga"].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded shadow hover:bg-green-100 cursor-pointer">
                  <h3 className="font-semibold">{item}</h3>
                  <p className="text-sm">Rp {5000 + index * 1000}</p>
                  <button className="mt-2 px-2 py-1 bg-green-700 text-white rounded text-sm">Tambah</button>
                </div>
              ))}
            </div>
          </div>

          {/* Keranjang */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Keranjang</h2>
            <ul className="text-sm mb-2">
              <li className="flex justify-between py-1">
                <span>Puding Coklat x1</span>
                <span>Rp 6000</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Puding Mangga x2</span>
                <span>Rp 14000</span>
              </li>
            </ul>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>Rp 20000</span>
            </div>
            <button className="mt-4 w-full bg-green-700 text-white py-2 rounded">Bayar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

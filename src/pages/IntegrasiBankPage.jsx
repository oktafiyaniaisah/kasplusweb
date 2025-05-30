// pages/IntegrasiBankPage.jsx
import Sidebar from '../components/Sidebar';

export default function IntegrasiBankPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Integrasi Perbankan</h1>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Sambungkan Akun Bank</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Pilih Bank</label>
              <select className="w-full border rounded p-2">
                <option value="">-- Pilih Bank --</option>
                <option>Bank BCA</option>
                <option>Bank BRI</option>
                <option>Bank Mandiri</option>
                <option>Bank BNI</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nomor Rekening</label>
              <input type="text" className="w-full border rounded p-2" placeholder="Masukkan Nomor Rekening" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nama Pemilik Rekening</label>
              <input type="text" className="w-full border rounded p-2" placeholder="Masukkan Nama" />
            </div>
            <button type="submit" className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded">Sambungkan</button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Akun Bank Tersambung</h2>
          <ul className="list-disc pl-5 text-gray-800">
            <li>BCA - 1234567890 a.n. Toko Pudding Pops</li>
            <li>Mandiri - 9876543210 a.n. Pudding Sehat</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

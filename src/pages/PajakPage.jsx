import { useState } from "react";
import Sidebar from "../components/Sidebar";

const pajakRates = {
  PPN: 0.11,      // 11%
  PPh21: 0.05,    // 5%
  PPh23: 0.02,    // 2%
};

export default function PajakPage() {
  const [pendapatan, setPendapatan] = useState("");
  const [jenisPajak, setJenisPajak] = useState("PPN");
  const [hasilPajak, setHasilPajak] = useState(null);

  function hitungPajak() {
    const pendapatanNum = parseFloat(pendapatan);
    if (isNaN(pendapatanNum) || pendapatanNum <= 0) {
      alert("Masukkan total pendapatan yang valid!");
      return;
    }
    const rate = pajakRates[jenisPajak] || 0;
    const pajak = pendapatanNum * rate;
    setHasilPajak(pajak);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Perhitungan Pajak</h1>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-5">
          <div>
            <label className="block font-semibold mb-2">Total Pendapatan (Rp)</label>
            <input
              type="number"
              value={pendapatan}
              onChange={(e) => setPendapatan(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Masukkan total pendapatan"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Jenis Pajak</label>
            <select
              value={jenisPajak}
              onChange={(e) => setJenisPajak(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="PPN">PPN (11%)</option>
              <option value="PPh21">PPh 21 (5%)</option>
              <option value="PPh23">PPh 23 (2%)</option>
            </select>
          </div>

          <button
            onClick={hitungPajak}
            className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Hitung Pajak
          </button>

          {hasilPajak !== null && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded font-semibold">
              Pajak yang harus dibayar: Rp {hasilPajak.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

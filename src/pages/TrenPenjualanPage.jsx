import { useState } from "react";
import { Line } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dataSamples = {
  daily: {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    datasets: [{
      label: "Penjualan Harian",
      data: [120, 150, 170, 130, 190, 210, 230],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34,197,94,0.3)",
      tension: 0.3,
    }]
  },
  weekly: {
    labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
    datasets: [{
      label: "Penjualan Mingguan",
      data: [700, 820, 900, 980],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34,197,94,0.3)",
      tension: 0.3,
    }]
  },
  monthly: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
    datasets: [{
      label: "Penjualan Bulanan",
      data: [3000, 3500, 4000, 4200, 4700, 5200, 5600],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34,197,94,0.3)",
      tension: 0.3,
    }]
  }
};

export default function TrenPenjualanPage() {
  const [range, setRange] = useState("monthly");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 p-8 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Tren Penjualan</h1>

        <div className="mb-6">
          <label htmlFor="range" className="mr-3 font-semibold">Rentang Waktu:</label>
          <select
            id="range"
            value={range}
            onChange={e => setRange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1"
          >
            <option value="daily">Harian</option>
            <option value="weekly">Mingguan</option>
            <option value="monthly">Bulanan</option>
          </select>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <Line
            data={dataSamples[range]}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: {
                  display: true,
                  text: `Grafik Penjualan ${range.charAt(0).toUpperCase() + range.slice(1)}`,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </main>
    </div>
  );
}

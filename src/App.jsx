import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import KasirPage from './pages/KasirPage';
import ProdukPage from './pages/ProdukPage';
import InventarisPage from './pages/InventarisPage';
import KeuanganPage from './pages/KeuanganPage';
import PajakPage from './pages/PajakPage';
import TrenPenjualanPage from './pages/TrenPenjualanPage';
import IntegrasiBankPage from './pages/IntegrasiBankPage';
import LaporanPage from './pages/LaporanPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/kasir" element={<KasirPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/inventaris" element={<InventarisPage />} />
        <Route path="/keuangan" element={<KeuanganPage />} />
        <Route path="/pajak" element={<PajakPage />} />
        <Route path="/tren-penjualan" element={<TrenPenjualanPage />} />
        <Route path="/integrasi-bank" element={<IntegrasiBankPage />} />
        <Route path="/laporan" element={<LaporanPage />} />
      </Routes>
    </Router>
  );
}
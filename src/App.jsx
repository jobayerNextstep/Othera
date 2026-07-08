import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import WhyPage from './pages/WhyPage';
import GerdPage from './pages/GerdPage';
import FaqPage from './pages/FaqPage';
import HcpPage from './pages/HcpPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="why" element={<WhyPage />} />
        <Route path="gerd" element={<GerdPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="hcp" element={<HcpPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

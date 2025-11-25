import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateLock from './pages/CreateLock';
import UnlockPage from './pages/UnlockPage';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Blog from './pages/Blog';
import EndToEndEncryption from './pages/blog/EndToEndEncryption';
import PasswordManagement from './pages/blog/PasswordManagement';
import CybersecurityMyths from './pages/blog/CybersecurityMyths';
import PrivacyVsSecurity from './pages/blog/PrivacyVsSecurity';
import ClientSideEncryption from './pages/blog/ClientSideEncryption';
import VPNs from './pages/blog/VPNs';
import DataBreaches from './pages/blog/DataBreaches';
import PhishingAttacks from './pages/blog/PhishingAttacks';
import HTTPS from './pages/blog/HTTPS';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/v1/" replace />} />
          <Route path="/v1/" element={<CreateLock />} />
          <Route path="/v1/:hash" element={<UnlockPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/end-to-end-encryption-explained" element={<EndToEndEncryption />} />
          <Route path="/blog/password-management-best-practices" element={<PasswordManagement />} />
          <Route path="/blog/cybersecurity-myths-debunked" element={<CybersecurityMyths />} />
          <Route path="/blog/privacy-vs-security" element={<PrivacyVsSecurity />} />
          <Route path="/blog/client-side-encryption-benefits" element={<ClientSideEncryption />} />
          <Route path="/blog/vpns-explained" element={<VPNs />} />
          <Route path="/blog/data-breaches-protection" element={<DataBreaches />} />
          <Route path="/blog/phishing-attacks-guide" element={<PhishingAttacks />} />
          <Route path="/blog/https-ssl-tls-explained" element={<HTTPS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

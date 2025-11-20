import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateLock from './pages/CreateLock';
import UnlockPage from './pages/UnlockPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/v1/" replace />} />
        <Route path="/v1/" element={<CreateLock />} />
        <Route path="/v1/:hash" element={<UnlockPage />} />
      </Routes>
    </Router>
  );
}

export default App;

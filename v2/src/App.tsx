import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateLock from './pages/CreateLock';
import UnlockPage from './pages/UnlockPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateLock />} />
        <Route path="/:hash" element={<UnlockPage />} />
      </Routes>
    </Router>
  );
}

export default App;

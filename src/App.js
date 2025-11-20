import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateLink from './components/CreateLink';
import DecryptLink from './components/DecryptLink';
import AboutModal from './components/AboutModal';

function App() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [isDecryptView, setIsDecryptView] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsDecryptView(window.location.hash.substring(1).length > 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('load', handleHashChange);
    handleHashChange(); // Call on initial load as well

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('load', handleHashChange);
    };
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  };

  return (
    <div className="App">
      <Header onAboutClick={handleAboutClick} />
      <main className="page-content">
        <div className="main-container">
          {isDecryptView ? <DecryptLink /> : <CreateLink />}
        </div>
      </main>
      <Footer />
      <AboutModal isOpen={showAboutModal} onClose={handleCloseAboutModal} />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function DecryptLink() {
  const [decryptPassword, setDecryptPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [unlockedUrl, setUnlockedUrl] = useState('');
  const [showUnlockedContent, setShowUnlockedContent] = useState(false);

  const fixUrl = (url) => {
    try {
      new URL(url);
      return url;
    } catch {
      return "https://" + url;
    }
  };

  const handleDecrypt = () => {
    const encrypted = window.location.hash.substring(1);

    if (!decryptPassword) {
      setErrorMessage('Please enter a password.');
      return;
    }

    try {
      const decrypted = CryptoJS.AES.decrypt(encrypted, decryptPassword);
      const originalUrl = decrypted.toString(CryptoJS.enc.Utf8);
      const safeOriginalUrl = fixUrl(originalUrl);

      if (originalUrl) {
        setUnlockedUrl(safeOriginalUrl);
        setShowUnlockedContent(true);
        setErrorMessage('');
      } else {
        setErrorMessage('Incorrect password.');
      }
    } catch (e) {
      setErrorMessage('Incorrect password.');
    }
  };

  const handleOpenUrl = () => {
    if (unlockedUrl) {
      window.open(unlockedUrl, "_blank");
    }
  };

  const handleGoBack = () => {
    setShowUnlockedContent(false);
    setDecryptPassword('');
    setErrorMessage('');
    setUnlockedUrl('');
  };

  return (
    <div id="decryptView" className="form-section">
      <h2>Unlock Your Link</h2>
      {!showUnlockedContent ? (
        <>
          <input
            type="password"
            id="decryptPasswordInput"
            className="form-control"
            placeholder="Enter password to unlock"
            value={decryptPassword}
            onChange={(e) => setDecryptPassword(e.target.value)}
          />
          <button id="decryptBtn" className="btn" onClick={handleDecrypt}>Unlock Link</button>
          {errorMessage && <p id="errorMessage" className="text-danger">{errorMessage}</p>}
        </>
      ) : (
        <div id="unlockedContent" style={{ display: 'block', marginTop: '20px' }}>
          <p style={{ fontWeight: 600, marginBottom: '10px' }}>Unlocked URL:</p>
          <p id="unlockedUrlDisplay" style={{ wordBreak: 'break-all', marginBottom: '15px', color: 'var(--primary-color)', fontWeight: 500 }}>
            {unlockedUrl.length > 70 ? unlockedUrl.substring(0, 67) + '...' : unlockedUrl}
          </p>
          <button id="openUrlBtn" className="btn" style={{ marginBottom: '10px' }} onClick={handleOpenUrl}>Open Link</button>
          <button id="goBackBtn" className="btn" style={{ backgroundColor: '#6B7280', marginTop: '0' }} onClick={handleGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default DecryptLink;

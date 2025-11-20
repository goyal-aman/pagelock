import React from 'react';

function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>How to use</h2>
        <p>PageLock allows you to encrypt url and share it securely. The recipient will need the password to decrypt the link and access the original page.</p>
        <h3>How to use:</h3>
        <ol>
          <li>Enter the URL you want to lock.</li>
          <li>Choose a unique phrase to encrypt</li>
          <li>Click "Encrypt".</li>
          <li>Share the encrypted link. The part after the '#' contains the encrypted data.</li>
        </ol>
      </div>
    </div>
  );
}

export default AboutModal;

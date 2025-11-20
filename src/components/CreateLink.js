import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function CreateLink() {
  const [url, setUrl] = useState('');
  const [password, setPassword] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const [isCopied, setIsCopied] = useState(false);

  const handleEncrypt = () => {
    if (!url || !password) {
      alert('Please enter both a URL and a password.');
      return;
    }

    const encrypted = CryptoJS.AES.encrypt(url, password).toString();
    const newUrl = `${window.location.href.split('#')[0]}#${encrypted}`;
    setGeneratedLink(newUrl);
  };

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(generatedLink);
      } else {
        // Fallback for older browsers
        const secureLinkInput = document.getElementById('secureLinkInput');
        secureLinkInput.select();
        const successful = document.execCommand('copy');
        if (!successful) throw new Error('execCommand copy failed');
      }
      setCopyButtonText('Copied!');
      setIsCopied(true);
      setTimeout(() => {
        setCopyButtonText('Copy');
        setIsCopied(false);
      }, 1800);
    } catch (err) {
      window.prompt('Copy this link', generatedLink);
    }
  };

  return (
    <div id="createView" className="">
      <input
        type="url"
        id="urlInput"
        className="form-control"
        aria-label="Secure link"
        placeholder="Enter URL to lock (e.g., https://example.com/secret-doc)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="password"
        id="passwordInput"
        className="form-control"
        placeholder="Choose a password strong enough your ex can't guess"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        id="createBtn"
        className="btn"
        aria-live="polite"
        aria-controls="generatedUrl"
        aria-expanded={!!generatedLink}
        aria-label="Encrypt URL and generate secure link"
        onClick={handleEncrypt}
      >
        Encrypt & Generate Link
      </button>

      {generatedLink && (
        <div id="generatedUrl">
          <label style={{ display: 'block', fontWeight: 600, color: 'var(--success-text)', marginBottom: '10px' }}>Your secure link:</label>
          <div className="secure-link-row">
            <input
              type="text"
              id="secureLinkInput"
              readOnly
              className="secure-link-input"
              aria-label="Secure link"
              value={generatedLink}
              onClick={(e) => e.target.select()}
              onFocus={(e) => e.target.select()}
            />
            <button
              id="copyBtn"
              className={`copy-btn ${isCopied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {copyButtonText}
            </button>
          </div>
          <p className="hint" style={{ marginTop: '6px', color: 'var(--text-medium)' }}>Share this link with anyone.</p>
        </div>
      )}
    </div>
  );
}

export default CreateLink;

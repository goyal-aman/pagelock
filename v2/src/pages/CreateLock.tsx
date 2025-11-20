import React, { useState } from 'react';
import { encryptUrl } from '../utils/crypto';

const CreateLock: React.FC = () => {
    const [targetUrl, setTargetUrl] = useState('');
    const [password, setPassword] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const handleLock = (e: React.FormEvent) => {
        e.preventDefault();
        if (!targetUrl || !password) return;

        // Ensure URL has protocol
        let urlToEncrypt = targetUrl;
        if (!/^https?:\/\//i.test(urlToEncrypt)) {
            urlToEncrypt = 'https://' + urlToEncrypt;
        }

        const encrypted = encryptUrl(urlToEncrypt, password);
        const fullUrl = `${window.location.origin}/${encrypted}`;
        setGeneratedUrl(fullUrl);
        setCopied(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="glass-card animate-fade-in">
            <h1 className="delay-100">PageLock</h1>
            <p className="delay-200">Securely share links with password protection. No server, purely client-side.</p>

            {!generatedUrl ? (
                <form onSubmit={handleLock} className="flex-col delay-200">
                    <input
                        type="text"
                        placeholder="Enter URL to lock (e.g., google.com)"
                        className="glass-input"
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Set a password"
                        className="glass-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn-primary">
                        Lock Page
                    </button>
                </form>
            ) : (
                <div className="animate-fade-in">
                    <div className="copy-box">
                        <span className="copy-text">{generatedUrl}</span>
                        <button
                            onClick={copyToClipboard}
                            className="icon-btn"
                            title="Copy to clipboard"
                        >
                            {copied ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            )}
                        </button>
                    </div>
                    <p className="success-msg" style={{ marginBottom: '1.5rem' }}>
                        {copied ? 'Copied to clipboard!' : 'Link generated successfully!'}
                    </p>
                    <button
                        onClick={() => {
                            setGeneratedUrl('');
                            setTargetUrl('');
                            setPassword('');
                        }}
                        className="btn-primary"
                        style={{ background: 'rgba(255,255,255,0.1)' }}
                    >
                        Create Another
                    </button>
                </div>
            )}
        </div>
    );
};

export default CreateLock;

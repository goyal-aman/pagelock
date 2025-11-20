import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { decryptUrl } from '../utils/crypto';
import { FEATURE_FLAGS } from '../config';

const UnlockPage: React.FC = () => {
    const { hash } = useParams<{ hash: string }>();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [decryptedUrl, setDecryptedUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!hash) {
            navigate('/v1/');
        }
    }, [hash, navigate]);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!hash || !password) return;

        try {
            const originalUrl = decryptUrl(hash, password);

            if (FEATURE_FLAGS.ENABLE_AUTO_REDIRECT) {
                window.location.href = originalUrl;
            } else {
                setDecryptedUrl(originalUrl);
            }
        } catch (err) {
            setError('INCORRECT PASSWORD OR INVALID LINK');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(decryptedUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="card">
            <div className="flex-col" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
            <h1>LOCKED</h1>

            {!decryptedUrl ? (
                <>
                    <p>ENTER PASSWORD TO UNLOCK</p>
                    <form onSubmit={handleUnlock} className="flex-col">
                        <input
                            type="password"
                            placeholder="PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoFocus
                            required
                        />
                        <button type="submit">
                            UNLOCK
                        </button>
                        {error && <div className="error-msg">{error}</div>}
                    </form>
                </>
            ) : (
                <div className="flex-col">
                    <p>SUCCESS! HERE IS YOUR LINK:</p>
                    <div className="copy-box">
                        <span className="copy-text">{decryptedUrl}</span>
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
                    <a href={decryptedUrl} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', display: 'block', marginTop: '1rem' }}>
                        OPEN LINK DIRECTLY
                    </a>
                </div>
            )}

            <div style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6, textAlign: 'center' }}>
                <a href="/v1/" style={{ color: 'inherit', textDecoration: 'none' }}>CREATE YOUR OWN</a>
            </div>
        </div>
    );
};

export default UnlockPage;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { decryptUrl } from '../utils/crypto';

const UnlockPage: React.FC = () => {
    const { hash } = useParams<{ hash: string }>();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!hash) {
            navigate('/');
        }
    }, [hash, navigate]);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!hash || !password) return;

        try {
            const originalUrl = decryptUrl(hash, password);
            // Redirect to the original URL
            window.location.href = originalUrl;
        } catch (err) {
            setError('Incorrect password or invalid link.');
        }
    };

    return (
        <div className="glass-card animate-fade-in">
            <div className="flex-col" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
            <h1 style={{ fontSize: '2rem' }}>Locked Page</h1>
            <p>This URL is password protected.</p>

            <form onSubmit={handleUnlock} className="flex-col">
                <input
                    type="password"
                    placeholder="Enter password to unlock"
                    className="glass-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    required
                />
                <button type="submit" className="btn-primary">
                    Unlock
                </button>
                {error && <div className="error-msg">{error}</div>}
            </form>

            <div style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6 }}>
                <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Create your own locked page</a>
            </div>
        </div>
    );
};

export default UnlockPage;

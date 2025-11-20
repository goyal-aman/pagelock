import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{
            padding: '2rem 0',
            textAlign: 'center',
            borderBottom: '2px solid var(--border-color)',
            marginBottom: '2rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h1 style={{ margin: 0, border: 'none', fontSize: '1.5rem' }}>PAGELOCK</h1>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            marginTop: 'auto',
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '2px solid var(--border-color)',
            fontSize: '0.9rem',
            opacity: 0.8
        }}>
            <div style={{ marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 0.5rem 0' }}>Created by <a href="https://github.com/goyal-aman" target="_blank" rel="noopener noreferrer">@goyal-aman</a></p>
                <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} PageLock. All rights reserved.</p>
            </div>
            <div style={{ maxWidth: '400px', margin: '0 auto', fontSize: '0.8rem', opacity: 0.7 }}>
                <p style={{ margin: 0 }}>
                    PageLock is a client-side URL encryption tool. Your data never leaves your browser.
                    Passwords are not stored anywhere.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

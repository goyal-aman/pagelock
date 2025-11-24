import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <h1 style={{
                fontSize: '6rem',
                margin: '0',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>
                404
            </h1>
            <h2 style={{
                fontSize: '2rem',
                margin: '1rem 0',
                color: '#e2e8f0'
            }}>
                Page Not Found
            </h2>
            <p style={{
                color: '#94a3b8',
                marginBottom: '2rem',
                lineHeight: '1.6'
            }}>
                The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <Link
                to="/v1/"
                style={{
                    display: 'inline-block',
                    padding: '0.75rem 2rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                Go Home
            </Link>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const HTTPS: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>HTTPS and SSL/TLS: The Padlock Explained</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>December 5, 2023</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What is HTTPS?</h2>
                    <p>
                        HTTPS stands for Hypertext Transfer Protocol Secure. It's the encrypted version of HTTP, the protocol
                        that your browser uses to communicate with websites. The "S" is arguably the most important letter on
                        the internet.
                    </p>
                    <p>
                        When you see a padlock icon in your browser's address bar, it means the website is using HTTPS. This
                        encrypts all data exchanged between your browser and the server, preventing eavesdropping and tampering.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>HTTP vs HTTPS: What's the Difference?</h2>
                    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div style={{ padding: '1.5rem', border: '2px solid var(--border-color)', borderRadius: '8px' }}>
                            <h3 style={{ marginTop: 0, color: 'var(--accent-color)' }}>HTTP (Not Secure)</h3>
                            <ul style={{ lineHeight: '1.8', marginBottom: 0 }}>
                                <li>Data sent in plain text</li>
                                <li>Anyone can intercept</li>
                                <li>No encryption</li>
                                <li>Vulnerable to tampering</li>
                            </ul>
                        </div>
                        <div style={{ padding: '1.5rem', border: '2px solid var(--accent-color)', borderRadius: '8px', background: 'rgba(255, 71, 87, 0.05)' }}>
                            <h3 style={{ marginTop: 0, color: 'var(--accent-color)' }}>HTTPS (Secure)</h3>
                            <ul style={{ lineHeight: '1.8', marginBottom: 0 }}>
                                <li>Data encrypted end-to-end</li>
                                <li>Protected from eavesdropping</li>
                                <li>Uses SSL/TLS encryption</li>
                                <li>Verifies server identity</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What is SSL/TLS?</h2>
                    <p>
                        SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are the cryptographic protocols that
                        actually implement the encryption in HTTPS. TLS is the modern, more secure successor to SSL, though
                        people still commonly say "SSL certificate."
                    </p>
                    <p>
                        When you connect to an HTTPS website:
                    </p>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li>Your browser requests the server's SSL/TLS certificate</li>
                        <li>The server sends its certificate (like an ID card)</li>
                        <li>Your browser verifies the certificate with a trusted authority</li>
                        <li>If valid, an encrypted connection is established</li>
                        <li>All subsequent data is encrypted</li>
                    </ol>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What HTTPS Protects Against</h2>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>1. Eavesdropping</h3>
                    <p>
                        On an HTTP site, anyone on the same network (coffee shop Wi-Fi, for example) can see everything you're
                        doing. With HTTPS, they only see that you're connected to the website, not what you're viewing or typing.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Man-in-the-Middle Attacks</h3>
                    <p>
                        Attackers can insert themselves between you and the website, intercepting or modifying data. HTTPS
                        detects these attacks because the attacker can't produce a valid certificate.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Tampering</h3>
                    <p>
                        HTTPS ensures that data can't be modified in transit. If someone tries to alter the data, the encryption
                        will break and the connection will fail.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What HTTPS Doesn't Protect Against</h2>
                    <p>
                        It's important to understand the limitations:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>The server itself:</strong> HTTPS encrypts data <em>in transit</em>, but the server can still see and store everything in plain text.</li>
                        <li><strong>Malicious websites:</strong> A phishing site can have HTTPS. The padlock just means the connection is encrypted, not that the site is trustworthy.</li>
                        <li><strong>Malware on your device:</strong> If your computer is infected, HTTPS won't help.</li>
                        <li><strong>Metadata:</strong> HTTPS hides content but not which websites you're visiting (your ISP can still see the domain names).</li>
                    </ul>
                </section>

                <section>
                    <h2>Best Practices</h2>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Always check for HTTPS</strong> before entering passwords or payment information</li>
                        <li><strong>Be wary of certificate warnings</strong> in your browser—they indicate potential security issues</li>
                        <li><strong>Don't assume HTTPS = trustworthy</strong>—verify the website is legitimate</li>
                        <li><strong>Use browser extensions</strong> like HTTPS Everywhere to force HTTPS connections when available</li>
                        <li><strong>Avoid HTTP sites entirely</strong> when possible, especially for sensitive activities</li>
                    </ul>
                    <p style={{ marginTop: '1.5rem' }}>
                        Today, HTTPS is the standard—over 95% of web traffic is encrypted. If a site still uses HTTP in 2024,
                        that's a red flag.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default HTTPS;

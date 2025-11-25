import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const ClientSideEncryption: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Why Client-Side Encryption is Superior</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>December 28, 2023</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>The Traditional Model: Server-Side Encryption</h2>
                    <p>
                        Most online services use server-side encryption. Here's how it works:
                    </p>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li>You send your data to the company's server (often over HTTPS)</li>
                        <li>The server receives your unencrypted data</li>
                        <li>The server encrypts your data and stores it</li>
                        <li>When you need it back, the server decrypts it and sends it to you</li>
                    </ol>
                    <p>
                        This model has a critical flaw: <strong>the server sees your data in plain text</strong>.
                        Even if it's encrypted at rest, the company has the keys and can decrypt it at any time.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>The Client-Side Alternative</h2>
                    <p>
                        Client-side encryption flips this model on its head:
                    </p>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li>Your data is encrypted <em>in your browser</em> before it leaves your device</li>
                        <li>Only the encrypted data is sent to the server</li>
                        <li>The server stores encrypted data without ever seeing the original</li>
                        <li>When you retrieve it, the encrypted data comes back and is decrypted <em>in your browser</em></li>
                    </ol>
                    <p>
                        The crucial difference: <strong>Your data is never exposed to the server in unencrypted form</strong>.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>The Benefits</h2>
                    <h3>1. Zero-Knowledge Architecture</h3>
                    <p>
                        The service provider literally cannot access your data because they never have the decryption keys.
                        This is called "zero knowledge" because the provider has zero knowledge of your unencrypted data.
                    </p>

                    <h3>2. Protection from Data Breaches</h3>
                    <p>
                        If the server is hacked, all the attacker gets is encrypted data. Without the keys (which only you possess),
                        it's useless. Server-side encryption, by contrast, means the server has both your data <em>and</em> the keys
                        to decrypt it.
                    </p>

                    <h3>3. No Trust Required</h3>
                    <p>
                        With server-side encryption, you're trusting the company to:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Not read your data</li>
                        <li>Not sell your data</li>
                        <li>Properly secure their servers</li>
                        <li>Resist government pressure to hand over data</li>
                    </ul>
                    <p>
                        Client-side encryption removes the need for this trust. Mathematics, not promises, protects your data.
                    </p>

                    <h3>4. Immunity to Insider Threats</h3>
                    <p>
                        Even employees at the company can't access your data. There's no "admin panel" that can decrypt your information.
                        This protects against rogue employees, social engineering, and legal compulsion.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>The Trade-offs</h2>
                    <p>
                        Client-side encryption isn't without limitations:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>No password recovery:</strong> If you forget your password, no one can help you decrypt your data—not even the service provider.</li>
                        <li><strong>Limited server-side features:</strong> Features like server-side search or automated processing become impossible because the server can't read the data.</li>
                        <li><strong>Requires JavaScript:</strong> Your browser needs to run code to perform the encryption/decryption.</li>
                    </ul>
                    <p>
                        For many use cases, these trade-offs are well worth the significant privacy and security benefits.
                    </p>
                </section>

                <section>
                    <h2>Real-World Applications</h2>
                    <p>
                        Client-side encryption is used by:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Signal:</strong> End-to-end encrypted messaging</li>
                        <li><strong>Bitwarden:</strong> Password manager with zero-knowledge encryption</li>
                        <li><strong>ProtonMail:</strong> Encrypted email service</li>
                        <li><strong>PageLock:</strong> Client-side URL encryption for sharing links</li>
                    </ul>
                    <p>
                        These services prove that client-side encryption is practical, scalable, and provides vastly superior privacy.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default ClientSideEncryption;

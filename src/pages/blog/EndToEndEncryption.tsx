import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const EndToEndEncryption: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>End-to-End Encryption Explained</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>January 15, 2024</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What is End-to-End Encryption?</h2>
                    <p>
                        End-to-end encryption (E2EE) is a method of secure communication that prevents third parties from accessing data
                        while it's transferred from one end system to another. In E2EE, the data is encrypted on the sender's device
                        and only decrypted on the recipient's device.
                    </p>
                    <p>
                        The key characteristic of end-to-end encryption is that <strong>no intermediary—not even the service provider—can
                            decrypt and read the messages</strong>. This is fundamentally different from encryption in transit, where data
                        is decrypted at intermediate servers.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>How Does It Work?</h2>
                    <p>
                        E2EE typically relies on public-key cryptography. Here's a simplified explanation:
                    </p>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li><strong>Key Generation:</strong> Each user has a pair of keys—a public key and a private key.</li>
                        <li><strong>Encryption:</strong> When you send a message, it's encrypted using the recipient's public key.</li>
                        <li><strong>Transmission:</strong> The encrypted message travels through servers and networks.</li>
                        <li><strong>Decryption:</strong> Only the recipient's private key can decrypt the message.</li>
                    </ol>
                    <p>
                        Because the private key never leaves the user's device, no one else—including the service provider—can
                        decrypt the message.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Why Does It Matter?</h2>
                    <p>
                        End-to-end encryption is crucial for several reasons:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Privacy:</strong> Your conversations remain private, even from the platform you're using.</li>
                        <li><strong>Security:</strong> If the service is hacked, your data remains encrypted and unreadable.</li>
                        <li><strong>Trust:</strong> You don't have to trust the service provider to protect your data.</li>
                        <li><strong>Compliance:</strong> Helps meet regulatory requirements for data protection.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Real-World Examples</h2>
                    <p>
                        Many popular services use end-to-end encryption:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Signal:</strong> Considered the gold standard for secure messaging.</li>
                        <li><strong>WhatsApp:</strong> Uses Signal Protocol for all messages.</li>
                        <li><strong>iMessage:</strong> Apple's messaging service with E2EE by default.</li>
                        <li><strong>PageLock:</strong> Client-side encryption for URL sharing.</li>
                    </ul>
                </section>

                <section>
                    <h2>Common Misconceptions</h2>
                    <p>
                        <strong>Myth:</strong> "If a service uses HTTPS, it's end-to-end encrypted."<br />
                        <strong>Reality:</strong> HTTPS only encrypts data in transit. The server still sees your unencrypted data.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Myth:</strong> "End-to-end encryption makes you completely anonymous."<br />
                        <strong>Reality:</strong> E2EE protects message <em>content</em>, not metadata like who you're talking to or when.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default EndToEndEncryption;

import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const PrivacyVsSecurity: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Privacy vs Security: Understanding the Difference</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>January 1, 2024</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Two Different Concepts</h2>
                    <p>
                        Privacy and security are often used interchangeably, but they represent distinct concepts that address
                        different aspects of data protection:
                    </p>
                    <div style={{ background: 'rgba(0,0,0,0.05)', padding: '1.5rem', borderRadius: '8px', margin: '1.5rem 0' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Security</strong> is about protecting data from unauthorized access and threats.
                        </p>
                        <p style={{ marginBottom: 0 }}>
                            <strong>Privacy</strong> is about controlling who has access to your data and how it's used.
                        </p>
                    </div>
                    <p>
                        Think of it this way: A bank vault is <em>secure</em>, but the bank still has access to your money.
                        That's security without complete privacy.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Examples of Security</h2>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Encryption:</strong> Scrambling data so only authorized parties can read it</li>
                        <li><strong>Firewalls:</strong> Blocking unauthorized network access</li>
                        <li><strong>Antivirus software:</strong> Detecting and removing malware</li>
                        <li><strong>Two-factor authentication:</strong> Requiring multiple forms of verification</li>
                    </ul>
                    <p>
                        Security measures protect your data from <em>attackers</em>, but they don't necessarily protect your
                        data from the <em>service provider</em>.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Examples of Privacy</h2>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Data minimization:</strong> Only collecting necessary information</li>
                        <li><strong>Anonymous browsing:</strong> Using tools like Tor to hide your identity</li>
                        <li><strong>End-to-end encryption:</strong> Ensuring even the service provider can't read your data</li>
                        <li><strong>Privacy policies:</strong> Clear terms about how your data is used</li>
                    </ul>
                    <p>
                        Privacy measures control <em>who</em> can access your data and <em>how</em> it can be used,
                        including by the organizations you trust with it.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>You Can Have One Without the Other</h2>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Secure but Not Private</h3>
                    <p>
                        Many cloud services are highly secure—they use encryption, have strong authentication, and protect
                        against hackers. However, the company itself has full access to your data. They can read your emails,
                        view your files, and analyze your behavior for advertising.
                    </p>
                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Private but Not Secure</h3>
                    <p>
                        Imagine writing your secrets in a diary and hiding it under your mattress. It's private (only you know
                        what's in it), but it's not secure (anyone who finds it can read it). Similarly, an unencrypted journal
                        app on your phone might be private in theory, but if your phone is stolen, it's not secure.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Why Both Matter</h2>
                    <p>
                        <strong>For true data protection, you need both security and privacy.</strong>
                    </p>
                    <p>
                        Security without privacy means your data is protected from outsiders but not from the organizations
                        holding it. Privacy without security means you control access in theory, but the data itself is
                        vulnerable to theft.
                    </p>
                    <p>
                        Tools like PageLock provide both: Military-grade encryption (security) combined with client-side
                        processing (privacy). Your data is protected from attackers <em>and</em> from us.
                    </p>
                </section>

                <section>
                    <h2>Practical Takeaways</h2>
                    <p>
                        When evaluating a service, ask yourself:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Is my data encrypted? (Security)</li>
                        <li>Can the company read my data? (Privacy)</li>
                        <li>What do they do with my data? (Privacy)</li>
                        <li>Is their infrastructure protected from breaches? (Security)</li>
                    </ul>
                    <p>
                        The best services respect both your security <em>and</em> your privacy.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default PrivacyVsSecurity;

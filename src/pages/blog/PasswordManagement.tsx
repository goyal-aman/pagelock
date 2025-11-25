import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const PasswordManagement: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Password Management Best Practices</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>January 10, 2024</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>The Password Problem</h2>
                    <p>
                        The average person has over 100 online accounts, each requiring a password. Remembering unique, strong passwords
                        for all of them is nearly impossible—which is why most people don't. They reuse passwords, use weak passwords,
                        or write them down insecurely.
                    </p>
                    <p>
                        This creates a massive security risk. If one account is compromised, all accounts using the same password
                        are vulnerable. This is called <strong>credential stuffing</strong>.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What Makes a Strong Password?</h2>
                    <p>
                        A strong password has the following characteristics:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Length:</strong> At least 12 characters, ideally 16 or more.</li>
                        <li><strong>Complexity:</strong> Mix of uppercase, lowercase, numbers, and symbols.</li>
                        <li><strong>Unpredictability:</strong> Not based on dictionary words or personal information.</li>
                        <li><strong>Uniqueness:</strong> Never reused across different accounts.</li>
                    </ul>
                    <div style={{ background: 'rgba(0,0,0,0.05)', padding: '1.5rem', borderRadius: '8px', margin: '1.5rem 0' }}>
                        <h3 style={{ marginTop: 0 }}>Example of Strong Passwords</h3>
                        <ul style={{ fontFamily: 'monospace', marginBottom: 0 }}>
                            <li>Tr0ub4dor&3 ❌ (dictionary-based, predictable pattern)</li>
                            <li>correct horse battery staple ✅ (passphrase, easy to remember)</li>
                            <li>Xk9#mL2@pQ7!vN ✅ (random, very strong)</li>
                        </ul>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Use a Password Manager</h2>
                    <p>
                        The single best thing you can do for your online security is to use a password manager. These tools:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Generate strong, random passwords for each account</li>
                        <li>Store them encrypted with a master password</li>
                        <li>Auto-fill credentials on websites and apps</li>
                        <li>Sync across all your devices</li>
                    </ul>
                    <p>
                        Popular options include <strong>1Password</strong>, <strong>Bitwarden</strong>, <strong>LastPass</strong>,
                        and <strong>Dashlane</strong>. Many browsers also have built-in password managers, though dedicated apps
                        often offer more features.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Enable Two-Factor Authentication (2FA)</h2>
                    <p>
                        Even the strongest password can be compromised. Two-factor authentication (also called multi-factor authentication)
                        adds an extra layer of security by requiring a second form of verification.
                    </p>
                    <p>
                        The most common types of 2FA are:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>SMS codes:</strong> Better than nothing, but vulnerable to SIM-swapping attacks.</li>
                        <li><strong>Authenticator apps:</strong> Like Google Authenticator or Authy—more secure than SMS.</li>
                        <li><strong>Hardware keys:</strong> Such as YubiKey—the most secure option.</li>
                    </ul>
                </section>

                <section>
                    <h2>What to Avoid</h2>
                    <p>
                        <strong>Don't:</strong> Use the same password for multiple accounts.<br />
                        <strong>Don't:</strong> Use easily guessable passwords like "password123" or "qwerty".<br />
                        <strong>Don't:</strong> Share your passwords with anyone.<br />
                        <strong>Don't:</strong> Write passwords on sticky notes or unencrypted files.<br />
                        <strong>Don't:</strong> Use public Wi-Fi without a VPN when entering passwords.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default PasswordManagement;

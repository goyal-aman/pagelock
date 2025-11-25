import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const DataBreaches: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Data Breaches: What They Are and How to Protect Yourself</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>December 15, 2023</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What is a Data Breach?</h2>
                    <p>
                        A data breach occurs when sensitive, confidential, or protected information is accessed, stolen, or
                        used by an unauthorized party. This can include personal information like passwords, credit card numbers,
                        social security numbers, medical records, or intellectual property.
                    </p>
                    <p>
                        Data breaches can happen to anyone—from major corporations to small businesses to individual users.
                        The consequences can range from identity theft and financial fraud to reputation damage and legal liability.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>How Do Data Breaches Happen?</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>
                            <h3>Hacking Attacks</h3>
                            <p>
                                Cybercriminals exploit vulnerabilities in systems to gain unauthorized access. Common methods include:
                            </p>
                            <ul style={{ lineHeight: '1.8' }}>
                                <li>SQL injection attacks on databases</li>
                                <li>Exploiting unpatched software vulnerabilities</li>
                                <li>Credential stuffing (using leaked passwords)</li>
                            </ul>
                        </div>

                        <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>
                            <h3>Insider Threats</h3>
                            <p>
                                Sometimes breaches come from within. Employees, contractors, or partners with legitimate access
                                may intentionally or accidentally expose data.
                            </p>
                        </div>

                        <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>
                            <h3>Phishing & Social Engineering</h3>
                            <p>
                                Attackers trick employees into revealing passwords or installing malware through deceptive emails,
                                phone calls, or messages.
                            </p>
                        </div>

                        <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>
                            <h3>Lost or Stolen Devices</h3>
                            <p>
                                Unencrypted laptops, hard drives, or USB sticks containing sensitive data can fall into the wrong hands.
                            </p>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Famous Data Breaches</h2>
                    <p>
                        Some notable breaches that affected millions:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Yahoo (2013-2014):</strong> 3 billion accounts compromised</li>
                        <li><strong>Equifax (2017):</strong> 147 million people's personal and financial data stolen</li>
                        <li><strong>Facebook (2019):</strong> 540 million user records exposed on unprotected servers</li>
                        <li><strong>LinkedIn (2021):</strong> Data from 700 million users scraped and sold</li>
                        <li><strong>LastPass (2022):</strong> Password vault data accessed by attackers</li>
                    </ul>
                    <p>
                        These breaches demonstrate that even tech giants with massive security budgets aren't immune.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>How to Check if You've Been Affected</h2>
                    <p>
                        Use <strong>Have I Been Pwned</strong> (haveibeenpwned.com) to check if your email or phone number
                        appears in known data breaches. This free service aggregates breach data and lets you know if your
                        information has been compromised.
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        You can also sign up for breach alerts to be notified when your information appears in future breaches.
                    </p>
                </section>

                <section>
                    <h2>How to Protect Yourself</h2>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>1. Use Unique Passwords</h3>
                    <p>
                        Never reuse passwords across sites. If one site is breached, attackers will try those credentials everywhere else.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Enable Two-Factor Authentication (2FA)</h3>
                    <p>
                        Even if your password is leaked, 2FA provides a second barrier against unauthorized access.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Monitor Your Accounts</h3>
                    <p>
                        Regularly check bank statements, credit reports, and account activity for suspicious transactions.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Be Skeptical of Emails</h3>
                    <p>
                        After a breach, attackers may use stolen data to craft convincing phishing emails. Be extra cautious
                        with any requests for personal information.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>5. Freeze Your Credit</h3>
                    <p>
                        If your social security number or financial data is compromised, consider a credit freeze to prevent
                        someone from opening accounts in your name.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default DataBreaches;

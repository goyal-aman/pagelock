import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const CybersecurityMyths: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Common Cybersecurity Myths Debunked</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>January 5, 2024</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Introduction</h2>
                    <p>
                        Cybersecurity is surrounded by misconceptions that can leave people vulnerable to attacks.
                        Let's separate fact from fiction and debunk some of the most common myths.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Myth #1: "I'm not important enough to be targeted"</h2>
                    <p>
                        <strong>Reality:</strong> Most cyberattacks are automated and indiscriminate. Hackers use bots to scan millions
                        of devices looking for vulnerabilities. You don't need to be a CEO or celebrity to be a target—anyone with
                        an internet connection is at risk.
                    </p>
                    <p>
                        Cybercriminals are interested in:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Your credit card information</li>
                        <li>Your personal data for identity theft</li>
                        <li>Your device to add to a botnet</li>
                        <li>Your accounts for phishing scams</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Myth #2: "Antivirus software makes me completely safe"</h2>
                    <p>
                        <strong>Reality:</strong> Antivirus is just one layer of defense. While it's important, it can't protect you from:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Social engineering:</strong> If you willingly give away your password, no antivirus can help.</li>
                        <li><strong>Zero-day exploits:</strong> New vulnerabilities that haven't been documented yet.</li>
                        <li><strong>Phishing emails:</strong> Clicking a malicious link is a human error, not a virus.</li>
                    </ul>
                    <p>
                        Think of antivirus as a seatbelt—essential, but not a substitute for safe driving.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Myth #3: "Public Wi-Fi is safe if the website uses HTTPS"</h2>
                    <p>
                        <strong>Reality:</strong> HTTPS encrypts your connection to the website, but it doesn't protect you from all threats
                        on public Wi-Fi. Attackers on the same network can:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>See which websites you visit (even if they can't see the content)</li>
                        <li>Perform man-in-the-middle attacks</li>
                        <li>Set up fake Wi-Fi hotspots to intercept your data</li>
                    </ul>
                    <p>
                        Best practice: Use a VPN on public Wi-Fi to encrypt all your traffic.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Myth #4: "Macs don't get viruses"</h2>
                    <p>
                        <strong>Reality:</strong> While macOS has better security defaults than Windows historically had, Macs are
                        absolutely vulnerable to malware. As Macs have become more popular, they've become more attractive targets
                        for cybercriminals.
                    </p>
                    <p>
                        No operating system is immune to security threats. Good security practices matter regardless of your OS.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Myth #5: "Strong passwords are enough"</h2>
                    <p>
                        <strong>Reality:</strong> Passwords can be leaked in data breaches through no fault of your own. Even the
                        strongest password is useless if the service storing it gets hacked and doesn't properly protect it.
                    </p>
                    <p>
                        This is why <strong>two-factor authentication (2FA)</strong> is crucial. Even if your password is compromised,
                        2FA requires a second form of verification that the attacker likely doesn't have.
                    </p>
                </section>

                <section>
                    <h2>The Bottom Line</h2>
                    <p>
                        Cybersecurity isn't about being paranoid—it's about being informed and taking reasonable precautions.
                        Understanding these myths is the first step toward better security hygiene.
                    </p>
                    <p>
                        Remember: Security is a process, not a product.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default CybersecurityMyths;

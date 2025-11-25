import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const PhishingAttacks: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Phishing Attacks: How to Spot and Avoid Them</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>December 10, 2023</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What is Phishing?</h2>
                    <p>
                        Phishing is a type of social engineering attack where cybercriminals impersonate legitimate organizations
                        or individuals to trick you into revealing sensitive information like passwords, credit card numbers, or
                        personal data.
                    </p>
                    <p>
                        The name comes from "fishing"—attackers cast out bait (fake emails, messages, or websites) hoping someone
                        will bite. Unlike technical hacks, phishing exploits human psychology rather than software vulnerabilities.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Types of Phishing Attacks</h2>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Email Phishing</h3>
                    <p>
                        The most common type. Attackers send emails that appear to be from banks, payment services, tech companies,
                        or even colleagues. They often create urgency ("Your account will be suspended!") to pressure you into acting
                        without thinking.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Spear Phishing</h3>
                    <p>
                        Targeted attacks directed at specific individuals or organizations. Attackers research their victims to
                        make the emails more convincing, often referencing real projects, colleagues, or personal details.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Smishing (SMS Phishing)</h3>
                    <p>
                        Phishing via text message. Common examples: "Your package couldn't be delivered," "Verify your bank account,"
                        or "You've won a prize!"
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Vishing (Voice Phishing)</h3>
                    <p>
                        Phone-based attacks where scammers impersonate tech support, the IRS, or your bank to extract information
                        or convince you to transfer money.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Whaling</h3>
                    <p>
                        Phishing attacks targeting high-profile individuals like CEOs or executives. These are highly sophisticated
                        and often involve extensive research.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Red Flags: How to Spot Phishing</h2>
                    <div style={{ background: 'rgba(0,0,0,0.05)', padding: '1.5rem', borderRadius: '8px', margin: '1.5rem 0' }}>
                        <h3 style={{ marginTop: 0 }}>Warning Signs</h3>
                        <ul style={{ marginBottom: 0, lineHeight: '1.8' }}>
                            <li><strong>Sense of urgency:</strong> "Act now or lose access!"</li>
                            <li><strong>Suspicious sender:</strong> Email from "paypa1.com" instead of "paypal.com"</li>
                            <li><strong>Generic greetings:</strong> "Dear Customer" instead of your name</li>
                            <li><strong>Spelling and grammar errors:</strong> Legitimate companies proofread their emails</li>
                            <li><strong>Unexpected attachments:</strong> Especially .exe, .zip, or .scr files</li>
                            <li><strong>Requests for sensitive info:</strong> Real companies won't ask for passwords via email</li>
                            <li><strong>Too good to be true:</strong> "You've won $10,000!" (when you didn't enter a contest)</li>
                            <li><strong>Mismatched URLs:</strong> Hovering over links shows they go to sketchy domains</li>
                        </ul>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Real-World Example</h2>
                    <div style={{ background: 'var(--secondary-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <p style={{ marginTop: 0, fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <strong>From:</strong> security@apple-support.com<br />
                            <strong>Subject:</strong> Urgent: Unusual Activity Detected<br /><br />
                            Dear Apple User,<br /><br />
                            We detected suspicious login attempts on your account. Click here to verify your identity immediately
                            or your account will be locked within 24 hours.<br /><br />
                            [Verify Account] ← Link goes to app1e-verify.com<br /><br />
                            Apple Security Team
                        </p>
                    </div>
                    <p style={{ marginTop: '1rem' }}>
                        <strong>Red flags:</strong> Generic greeting, urgency, suspicious domain (app1e vs apple), unsolicited
                        security email asking you to click a link.
                    </p>
                </section>

                <section>
                    <h2>How to Protect Yourself</h2>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li><strong>Think before you click:</strong> Hover over links to see where they really go</li>
                        <li><strong>Verify independently:</strong> If an email claims to be from your bank, call the bank directly (don't use numbers in the email)</li>
                        <li><strong>Check the sender:</strong> Look closely at email addresses for subtle misspellings</li>
                        <li><strong>Don't provide info via email:</strong> Legitimate companies won't ask for passwords or SSNs this way</li>
                        <li><strong>Use 2FA:</strong> Even if you're tricked, 2FA can prevent account compromise</li>
                        <li><strong>Keep software updated:</strong> Security patches help protect against malicious links</li>
                        <li><strong>Report phishing:</strong> Forward suspicious emails to your IT department or the company being impersonated</li>
                        <li><strong>Use a password manager:</strong> It won't auto-fill passwords on fake sites</li>
                    </ol>
                    <p style={{ marginTop: '1.5rem' }}>
                        Remember: When in doubt, don't click. It's better to be overly cautious than to fall victim to a scam.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default PhishingAttacks;

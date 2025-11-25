import React from 'react';
import BlogLayout from '../components/BlogLayout';

const About: React.FC = () => {
    return (
        <BlogLayout>
            <h1>About PageLock</h1>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Our Mission</h2>
                <p>
                    PageLock was created with a simple but powerful mission: <strong>to give you complete control over your sensitive data</strong>.
                    We believe that privacy is not a luxury—it's a fundamental right. In an era where data breaches and privacy violations
                    are commonplace, we offer a solution that puts the power back in your hands.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>How PageLock Works</h2>
                <p>
                    PageLock uses military-grade <strong>AES-256 encryption</strong> to protect your URLs. But here's what makes us different:
                    everything happens <em>in your browser</em>. Your data never touches our servers. We can't see it, we can't log it,
                    and we can't decrypt it—even if we wanted to.
                </p>
                <p>
                    When you create a locked link, your browser encrypts the URL using a password you provide. The encrypted data is
                    embedded directly into the URL you share. When someone opens that link, their browser attempts to decrypt it using
                    the password. If the password is correct, they see the original URL. If not, the decryption fails mathematically.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Zero-Knowledge Architecture</h2>
                <p>
                    PageLock is built on a <strong>zero-knowledge</strong> principle. This means:
                </p>
                <ul style={{ lineHeight: '1.8' }}>
                    <li>We don't store your links in a database</li>
                    <li>We don't log your passwords</li>
                    <li>We don't track what you encrypt or decrypt</li>
                    <li>We don't require accounts or personal information</li>
                </ul>
                <p>
                    If our servers were compromised tomorrow, there would be nothing to steal. Your secrets are yours alone.
                </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
                <h2>Open and Transparent</h2>
                <p>
                    We believe in transparency. PageLock is built using open web standards like the Web Crypto API.
                    Our code is straightforward and auditable. We use well-established cryptographic algorithms that have been
                    vetted by the global security community.
                </p>
            </section>

            <section>
                <h2>Who We Are</h2>
                <p>
                    PageLock is developed and maintained by <a href="https://github.com/goyal-aman" target="_blank" rel="noopener noreferrer">Aman Goyal</a>,
                    a passionate advocate for privacy and open-source software. This project is our contribution to a more private and
                    secure internet.
                </p>
                <p>
                    If you have questions, suggestions, or just want to say hello, feel free to reach out via GitHub.
                </p>
            </section>
        </BlogLayout>
    );
};

export default About;

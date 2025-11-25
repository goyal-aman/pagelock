import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

const blogPosts = [
    {
        slug: 'ransomware-complete-guide',
        title: 'Ransomware: The Complete Guide to Understanding and Prevention',
        description: 'An in-depth analysis of ransomware attacks, how they work, notable incidents, and comprehensive prevention strategies.',
        date: '2023-11-25'
    },
    {
        slug: 'digital-privacy-guide-2024',
        title: 'Digital Privacy in 2024: A Complete Guide to Online Tracking and Protection',
        description: 'Deep dive into browser fingerprinting, tracking cookies, data brokers, and a multi-level privacy protection strategy.',
        date: '2023-11-20'
    },
    {
        slug: 'zero-day-vulnerabilities-explained',
        title: 'Zero-Day Vulnerabilities and Exploits: The Hidden Cyber Warfare',
        description: 'Understanding zero-day exploits, the vulnerability market, famous attacks, and defense strategies.',
        date: '2023-11-15'
    },
    {
        slug: 'secure-messaging-deep-dive',
        title: 'Secure Messaging: A Deep Dive into Private Communication',
        description: 'Comprehensive guide to end-to-end encryption, Signal Protocol, comparing messaging apps, and best practices.',
        date: '2023-11-10'
    },
    {
        slug: 'client-side-encryption-benefits',
        title: 'Client-Side Encryption: Why It\'s the Future of Data Privacy',
        description: 'In-depth technical exploration of client-side encryption, zero-knowledge architecture, and real-world applications.',
        date: '2023-12-28'
    },

    {
        slug: 'end-to-end-encryption-explained',
        title: 'End-to-End Encryption Explained',
        description: 'Understanding what end-to-end encryption is and why it matters for your privacy.',
        date: '2024-01-15'
    },
    {
        slug: 'password-management-best-practices',
        title: 'Password Management Best Practices',
        description: 'How to create, manage, and protect strong passwords in the digital age.',
        date: '2024-01-10'
    },
    {
        slug: 'cybersecurity-myths-debunked',
        title: 'Common Cybersecurity Myths Debunked',
        description: 'Separating fact from fiction in the world of cybersecurity.',
        date: '2024-01-05'
    },
    {
        slug: 'privacy-vs-security',
        title: 'Privacy vs Security: Understanding the Difference',
        description: 'These terms are often used interchangeably, but they mean very different things.',
        date: '2024-01-01'
    },
    {
        slug: 'vpns-explained',
        title: 'Understanding VPNs: Do You Really Need One?',
        description: 'What VPNs actually do, common misconceptions, and how to choose a provider.',
        date: '2023-12-20'
    },
    {
        slug: 'data-breaches-protection',
        title: 'Data Breaches: What They Are and How to Protect Yourself',
        description: 'Understanding data breaches and practical steps to safeguard your information.',
        date: '2023-12-15'
    },
    {
        slug: 'phishing-attacks-guide',
        title: 'Phishing Attacks: How to Spot and Avoid Them',
        description: 'Learn to recognize and protect yourself from phishing and social engineering.',
        date: '2023-12-10'
    },
    {
        slug: 'https-ssl-tls-explained',
        title: 'HTTPS and SSL/TLS: The Padlock Explained',
        description: 'What the padlock icon means and why HTTPS is essential for web security.',
        date: '2023-12-05'
    }
];

const Blog: React.FC = () => {
    return (
        <BlogLayout>
            <h1>Cybersecurity & Privacy Blog</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', opacity: 0.8 }}>
                Insights, guides, and educational content about encryption, privacy, and staying safe online.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {blogPosts.map(post => (
                    <article key={post.slug} style={{
                        border: '2px solid var(--border-color)',
                        padding: '1.5rem',
                        borderRadius: '4px',
                        background: 'var(--secondary-bg)',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '8px 8px 0 var(--border-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                        <time style={{
                            fontSize: '0.85rem',
                            opacity: 0.6,
                            display: 'block',
                            marginBottom: '0.5rem'
                        }}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                        <h2 style={{
                            marginTop: 0,
                            marginBottom: '0.5rem',
                            borderBottom: 'none',
                            paddingBottom: 0
                        }}>
                            <Link to={`/blog/${post.slug}`} style={{
                                textDecoration: 'none',
                                color: 'var(--text-color)'
                            }}>
                                {post.title}
                            </Link>
                        </h2>
                        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                            {post.description}
                        </p>
                        <Link to={`/blog/${post.slug}`} style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'var(--text-color)',
                            color: 'var(--bg-color)',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            transition: 'background 0.2s'
                        }}>
                            Read More →
                        </Link>
                    </article>
                ))}
            </div>
        </BlogLayout>
    );
};

export default Blog;

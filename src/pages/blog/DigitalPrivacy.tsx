import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const DigitalPrivacy: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Digital Privacy in 2024: A Complete Guide to Online Tracking and Protection</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>November 20, 2023</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>The Invisible Data Trail You Leave Online</h2>
                    <p>
                        Every time you browse the web, use an app, or interact with digital services, you leave behind a trail of data.
                        This isn't paranoia—it's the fundamental business model of the modern internet. Your attention, behaviors, and
                        personal information are the product being sold to advertisers, data brokers, and anyone willing to pay.
                    </p>
                    <p>
                        The average person has their data collected by over 500 companies daily, most of which they've never heard of.
                        This guide explains exactly how you're being tracked and what you can do about it.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>How You're Being Tracked: The Complete Picture</h2>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>1. Browser Fingerprinting</h3>
                    <p>
                        Even without cookies, your browser reveals a unique "fingerprint" that can track you across websites. This includes:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Browser type and version:</strong> Chrome 120.0, Firefox 121.0, etc.</li>
                        <li><strong>Operating system:</strong> Windows 11, macOS Sonoma, etc.</li>
                        <li><strong>Screen resolution and color depth:</strong> 1920x1080, 24-bit color</li>
                        <li><strong>Installed fonts:</strong> The list of fonts on your system is surprisingly unique</li>
                        <li><strong>Timezone and language:</strong> Narrows down your location</li>
                        <li><strong>Plugins and extensions:</strong> Ad blockers, password managers, etc.</li>
                        <li><strong>WebGL and Canvas fingerprints:</strong> How your GPU renders graphics</li>
                        <li><strong>Audio context fingerprinting:</strong> How your device processes audio</li>
                    </ul>
                    <p>
                        When combined, these data points create a fingerprint so unique that it can identify you with 99.9% accuracy—no
                        cookies required. Visit amiunique.org to see your own fingerprint.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Tracking Cookies and Similar Technologies</h3>
                    <p>
                        <strong>First-Party Cookies:</strong> Set by the website you're visiting. Generally less concerning—they remember
                        your login, shopping cart, preferences.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        <strong>Third-Party Cookies:</strong> Set by advertisers and analytics companies. They track you across hundreds
                        of websites. When you visit Amazon, then later see Amazon ads for the exact product you viewed—that's third-party
                        cookies.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        <strong>Supercookies:</strong> Hidden in DNS caches, browser caches, or even your device's unique identifiers.
                        Extremely hard to delete.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        <strong>ETags and Cache-Based Tracking:</strong> Abuse of normal browser features to recreate tracking even after
                        you clear cookies.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Mobile App Tracking</h3>
                    <p>
                        Mobile apps are worse than websites. They can access:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Advertising ID:</strong> Both iOS (IDFA) and Android (AAID) assign you a unique identifier for ads</li>
                        <li><strong>Location data:</strong> GPS, Wi-Fi networks, Bluetooth beacons—even when the app is closed</li>
                        <li><strong>Contacts and calendar:</strong> Who you know and when you're busy</li>
                        <li><strong>Photos metadata:</strong> Where and when photos were taken</li>
                        <li><strong>Device sensors:</strong> Accelerometer, gyroscope—can infer what you're doing</li>
                        <li><strong>Installed apps list:</strong> What other apps you use reveals demographics</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Social Media Tracking Pixels</h3>
                    <p>
                        Facebook Pixel, LinkedIn Insight Tag, Twitter conversion tracking—these invisible tracking pixels are embedded
                        on millions of websites. When you visit any site with these pixels:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>The social media company knows you were there</li>
                        <li>They track what you do on the site (products viewed, time spent, etc.)</li>
                        <li>This data is linked to your social media profile</li>
                        <li>Advertisers use this for hyper-targeted ads</li>
                    </ul>
                    <p>
                        Even if you're logged out or don't have an account, they can still track you via browser fingerprinting and
                        "shadow profiles."
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>5. ISP-Level Tracking</h3>
                    <p>
                        Your Internet Service Provider (ISP) sees <em>everything</em> you do online unless you use a VPN or Tor:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Every website you visit (domain names)</li>
                        <li>When you visit and how long you stay</li>
                        <li>How much data you transfer</li>
                        <li>DNS queries (what you're searching for)</li>
                    </ul>
                    <p>
                        In the US, ISPs are legally allowed to sell this data to advertisers. HTTPS prevents them from seeing <em>what</em>
                        you do on websites, but they still see <em>which</em> websites you visit.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>The Data Broker Industry: The Shadow Market for Your Information</h2>
                    <p>
                        Data brokers are companies you've never heard of that know everything about you. They aggregate data from:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Public records (property ownership, court records, voter registration)</li>
                        <li>Purchase history from retailers</li>
                        <li>Social media activity</li>
                        <li>Credit card companies</li>
                        <li>Mobile location data</li>
                        <li>Survey responses and loyalty programs</li>
                    </ul>
                    <p>
                        Companies like Acxiom, Experian, and Oracle have profiles on hundreds of millions of people with hundreds of
                        data points each. They sell this to:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Advertisers for targeted marketing</li>
                        <li>Insurance companies for risk assessment</li>
                        <li>Employers for background checks</li>
                        <li>Law enforcement (often without warrants)</li>
                        <li>Anyone willing to pay</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Privacy Regulations: Your Rights</h2>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>GDPR (European Union)</h3>
                    <p>
                        The General Data Protection Regulation gives EU residents strong rights:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Right to access:</strong> See what data companies have about you</li>
                        <li><strong>Right to erasure:</strong> Request deletion of your data</li>
                        <li><strong>Right to portability:</strong> Download your data in a usable format</li>
                        <li><strong>Consent requirements:</strong> Companies must get clear consent before tracking</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>CCPA/CPRA (California)</h3>
                    <p>
                        California residents have similar rights to GDPR, plus:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Right to opt-out:</strong> Tell companies not to sell your information</li>
                        <li><strong>Right to know:</strong> What categories of data are collected and why</li>
                        <li><strong>Non-discrimination:</strong> Companies can't charge you more for exercising privacy rights</li>
                    </ul>

                    <p style={{ marginTop: '1.5rem' }}>
                        Other US states (Virginia, Colorado, Connecticut, Utah) have enacted similar laws, with more coming.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Comprehensive Privacy Protection Strategy</h2>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Level 1: Basic Privacy (For Everyone)</h3>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li><strong>Switch to a privacy-focused browser:</strong> Firefox or Brave instead of Chrome</li>
                        <li><strong>Use browser extensions:</strong>
                            <ul style={{ marginTop: '0.5rem' }}>
                                <li>uBlock Origin (ad and tracker blocker)</li>
                                <li>Privacy Badger (learns to block trackers)</li>
                                <li>HTTPS Everywhere (forces encrypted connections)</li>
                            </ul>
                        </li>
                        <li><strong>Change search engines:</strong> DuckDuckGo or Startpage instead of Google</li>
                        <li><strong>Review app permissions:</strong> Does your flashlight app really need your location?</li>
                        <li><strong>Use strong, unique passwords:</strong> With a password manager</li>
                        <li><strong>Enable 2FA everywhere:</strong> Especially email and financial accounts</li>
                    </ol>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Level 2: Intermediate Privacy (For Those Concerned)</h3>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li><strong>Use a VPN:</strong> Especially on public Wi-Fi, choose reputable providers</li>
                        <li><strong>Switch to privacy-focused services:</strong>
                            <ul style={{ marginTop: '0.5rem' }}>
                                <li>Email: ProtonMail, Tutanota instead of Gmail</li>
                                <li>Messaging: Signal instead of WhatsApp/iMessage</li>
                                <li>Cloud storage: Tresorit, Sync.com instead of Google Drive</li>
                            </ul>
                        </li>
                        <li><strong>Use encrypted DNS:</strong> DNS-over-HTTPS or DNS-over-TLS</li>
                        <li><strong>Compartmentalize browsing:</strong> Use containers or separate browsers for different activities</li>
                        <li><strong>Regular privacy audits:</strong> Check what data Google, Facebook, etc. have about you and delete it</li>
                        <li><strong>Opt-out of data brokers:</strong> Use services like DeleteMe or manually opt-out</li>
                    </ol>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Level 3: Advanced Privacy (For High-Risk Users)</h3>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li><strong>Use Tor Browser:</strong> For truly anonymous browsing (slower but much more private)</li>
                        <li><strong>Use Tails OS:</strong> A whole operating system designed for privacy that leaves no trace</li>
                        <li><strong>GrapheneOS or CalyxOS:</strong> Privacy-focused Android alternatives</li>
                        <li><strong>Hardware security keys:</strong> For unphishable authentication</li>
                        <li><strong>Self-host services:</strong> Email, cloud storage, etc. on your own server</li>
                        <li><strong>Use cash and cryptocurrency:</strong> For transactions you want private</li>
                    </ol>
                </section>

                <section>
                    <h2>Practical Tips for Daily Life</h2>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Clear cookies regularly:</strong> Or use private/incognito mode for sensitive browsing</li>
                        <li><strong>Review app permissions monthly:</strong> Revoke what you don't need</li>
                        <li><strong>Turn off advertising IDs:</strong> iOS: Settings → Privacy → Tracking → Request Apps Not to Track; Android: Settings → Privacy → Ads → Delete advertising ID</li>
                        <li><strong>Use disposable email addresses:</strong> Services like SimpleLogin for signups</li>
                        <li><strong>Be selective with loyalty cards:</strong> They track all your purchases</li>
                        <li><strong>Read privacy policies:</strong> At least skim them before agreeing</li>
                        <li><strong>Assume everything is being tracked:</strong> Act accordingly</li>
                    </ul>

                    <p style={{ marginTop: '1.5rem' }}>
                        <strong>Remember:</strong> Perfect privacy doesn't exist, but you can make tracking significantly harder and
                        more expensive. Every step you take raises the cost of surveillance, and companies will track the low-hanging
                        fruit first. The goal isn't invisibility—it's making yourself a harder target than 95% of people.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default DigitalPrivacy;

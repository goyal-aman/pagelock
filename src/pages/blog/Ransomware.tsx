import React from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '../../components/BlogLayout';

const Ransomware: React.FC = () => {
    return (
        <BlogLayout>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Blog
            </Link>

            <article>
                <h1>Ransomware: The Complete Guide to Understanding and Prevention</h1>
                <time style={{ display: 'block', opacity: 0.6, marginBottom: '2rem' }}>November 25, 2023</time>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>What is Ransomware?</h2>
                    <p>
                        Ransomware is a type of malicious software (malware) that encrypts your files or locks you out of your device,
                        then demands payment—typically in cryptocurrency—to restore access. It's digital extortion, and it's one of
                        the most lucrative forms of cybercrime today, generating billions of dollars annually for criminals.
                    </p>
                    <p>
                        Unlike traditional malware that aims to steal data quietly, ransomware is deliberately visible. Victims are
                        immediately aware of the attack through ransom notes displayed on their screens, often with countdown timers
                        creating pressure to pay quickly.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>How Ransomware Works: The Attack Chain</h2>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Stage 1: Initial Access</h3>
                    <p>
                        Ransomware typically enters systems through:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>Phishing emails:</strong> Malicious attachments or links that appear legitimate</li>
                        <li><strong>Exploit kits:</strong> Automated tools that scan for and exploit software vulnerabilities</li>
                        <li><strong>Remote Desktop Protocol (RDP) attacks:</strong> Brute-forcing weak passwords on exposed RDP ports</li>
                        <li><strong>Supply chain attacks:</strong> Compromising software updates or trusted vendors</li>
                        <li><strong>Drive-by downloads:</strong> Infected websites that automatically download malware</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Stage 2: Establishing Persistence</h3>
                    <p>
                        Once inside, ransomware establishes persistence to survive reboots and evade detection. This involves:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Creating registry entries to auto-start on boot</li>
                        <li>Injecting code into legitimate system processes</li>
                        <li>Disabling antivirus and security monitoring tools</li>
                        <li>Deleting Volume Shadow Copies (Windows backup files)</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Stage 3: Lateral Movement</h3>
                    <p>
                        Modern ransomware doesn't just encrypt one computer. It spreads laterally across networks:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Scanning for other devices on the network</li>
                        <li>Stealing credentials to access other systems</li>
                        <li>Exploiting network shares and mapped drives</li>
                        <li>Moving to backup servers to maximize damage</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Stage 4: Data Encryption</h3>
                    <p>
                        The ransomware encrypts files using strong encryption (typically AES-256 or RSA-2048). The encryption key
                        is then encrypted with the attacker's public key and sent to their command-and-control server. Without
                        the attacker's private key, decryption is mathematically impossible.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Stage 5: Ransom Demand</h3>
                    <p>
                        A ransom note appears, typically demanding payment in Bitcoin or other cryptocurrencies. The note includes:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Payment instructions and wallet addresses</li>
                        <li>Deadlines with escalating amounts</li>
                        <li>Threats to delete files or publish data if not paid</li>
                        <li>Sometimes a "customer service" chat for negotiations</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Types of Ransomware</h2>

                    <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                        <h3>Crypto Ransomware (Encryptors)</h3>
                        <p>
                            Encrypts files and demands payment for the decryption key. This is the most common and devastating type.
                            Examples: WannaCry, CryptoLocker, Ryuk, REvil.
                        </p>
                    </div>

                    <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                        <h3>Locker Ransomware</h3>
                        <p>
                            Locks you out of your operating system entirely, preventing access to any files without necessarily
                            encrypting them. Less common today as it's easier to bypass than encryption.
                        </p>
                    </div>

                    <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                        <h3>Double Extortion Ransomware</h3>
                        <p>
                            Not only encrypts data but also exfiltrates it first. Attackers threaten to publish sensitive data
                            publicly if the ransom isn't paid, even if you have backups. This has become the dominant model.
                        </p>
                    </div>

                    <div style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>
                        <h3>Ransomware-as-a-Service (RaaS)</h3>
                        <p>
                            Criminal organizations provide ransomware tools to affiliates in exchange for a percentage of ransom
                            payments. This business model has made ransomware accessible to less technical criminals, dramatically
                            increasing attack frequency.
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Notable Ransomware Attacks</h2>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>WannaCry (2017)</h3>
                    <p>
                        Exploited an NSA-designed Windows vulnerability (EternalBlue) to spread. Infected over 300,000 computers
                        in 150 countries within days, including UK's National Health Service, causing massive disruption. Despite
                        the scale, attackers only collected about $140,000 because they botched the payment system.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Colonial Pipeline (2021)</h3>
                    <p>
                        DarkSide ransomware hit the largest fuel pipeline in the US, causing widespread gas shortages on the East Coast.
                        Colonial paid a $4.4 million ransom (later partially recovered by FBI). The attack highlighted critical
                        infrastructure vulnerability.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Kaseya (2021)</h3>
                    <p>
                        REvil compromised Kaseya's remote management software, affecting up to 1,500 businesses downstream through a
                        supply chain attack. Demanded $70 million in Bitcoin. Demonstrated how attacking software vendors can
                        amplify impact.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Should You Pay the Ransom?</h2>
                    <div style={{ background: 'rgba(255, 71, 87, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--accent-color)' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--accent-color)' }}>Law Enforcement and Security Experts Recommend: Don't Pay</h3>
                        <p><strong>Why?</strong></p>
                        <ul style={{ marginBottom: 0, lineHeight: '1.8' }}>
                            <li>No guarantee you'll get your data back (30% never receive decryption keys)</li>
                            <li>Paying funds criminal enterprises and encourages more attacks</li>
                            <li>You become a known payer, making you a future target</li>
                            <li>May violate sanctions laws if attackers are in certain countries</li>
                            <li>Decryption tools are often buggy and may corrupt data further</li>
                        </ul>
                    </div>
                    <p style={{ marginTop: '1.5rem' }}>
                        However, the decision is complex. Some businesses, especially healthcare or critical services, may determine
                        that paying is necessary to restore operations quickly. This is why prevention is crucial—you never want
                        to face this decision.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Comprehensive Prevention Strategy</h2>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>1. Robust Backup System</h3>
                    <p>
                        Follow the <strong>3-2-1 backup rule</strong>:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong>3</strong> copies of your data (original + 2 backups)</li>
                        <li><strong>2</strong> different storage media types (e.g., external drive + cloud)</li>
                        <li><strong>1</strong> copy off-site or offline (air-gapped from network)</li>
                    </ul>
                    <p>
                        Critically, ensure backups are <strong>immutable</strong> (cannot be encrypted or deleted) and test
                        restoration regularly.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Email Security</h3>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Train employees to recognize phishing attempts</li>
                        <li>Implement email filtering and anti-phishing tools</li>
                        <li>Disable macros in Office documents by default</li>
                        <li>Use email authentication (SPF, DKIM, DMARC)</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Network Segmentation</h3>
                    <p>
                        Divide your network into segments so ransomware can't spread freely. Separate:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Production systems from backups</li>
                        <li>User workstations from servers</li>
                        <li>IoT devices from main network</li>
                        <li>Guest Wi-Fi from internal systems</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Access Controls</h3>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Implement principle of least privilege (users only get access they need)</li>
                        <li>Require multi-factor authentication for all accounts</li>
                        <li>Disable RDP access from internet, use VPN instead</li>
                        <li>Regularly audit and revoke unnecessary permissions</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>5. Patch Management</h3>
                    <p>
                        Keep all software updated, especially:
                    </p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Operating systems (Windows, Linux, macOS)</li>
                        <li>Applications (browsers, Office, PDF readers)</li>
                        <li>Network devices (routers, firewalls)</li>
                        <li>Remote access tools</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>6. Endpoint Protection</h3>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>Deploy modern antivirus/anti-malware with behavioral detection</li>
                        <li>Enable ransomware-specific protection features</li>
                        <li>Use application whitelisting to block unauthorized programs</li>
                        <li>Implement Endpoint Detection and Response (EDR) for large organizations</li>
                    </ul>
                </section>

                <section>
                    <h2>If You're Infected: Immediate Response</h2>
                    <ol style={{ lineHeight: '1.8' }}>
                        <li><strong>Isolate immediately:</strong> Disconnect infected devices from network, Wi-Fi, and Bluetooth</li>
                        <li><strong>Don't turn off the device:</strong> This may trigger additional damage</li>
                        <li><strong>Document everything:</strong> Screenshot ransom note, note date/time, identify patient zero</li>
                        <li><strong>Report to authorities:</strong> Contact FBI's IC3 or local law enforcement</li>
                        <li><strong>Notify stakeholders:</strong> Customers, partners, regulators as required</li>
                        <li><strong>Engage cyber security experts:</strong> Don't try to handle it alone</li>
                        <li><strong>Check for decryptors:</strong> Visit NoMoreRansom.org for free decryption tools</li>
                        <li><strong>Restore from backups:</strong> If you have clean, offline backups</li>
                    </ol>

                    <p style={{ marginTop: '1.5rem' }}>
                        Ransomware is a serious and growing threat, but it's largely preventable with proper security hygiene.
                        The key is preparation—by the time encryption starts, it's too late.
                    </p>
                </section>
            </article>
        </BlogLayout>
    );
};

export default Ransomware;

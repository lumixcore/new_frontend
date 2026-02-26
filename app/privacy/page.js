import styles from "./tos.module.css"

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Lumixcore.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — Lumixcore',
    description: 'Privacy Policy for Lumixcore.',
    url: '/privacy',
    images: [{ url: '/images/back.png' }],
    type: 'website',
  },
};

export default function TOS() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <h1>Privacy Policy</h1>
        <p>Last updated: 14th december 2025</p>
        <p>LumixCore respects your privacy. This Privacy Policy explains what data we collect, how we use it, 
          and your rights as a user. By using our services, you agree to this Privacy Policy.</p>
        <hr></hr>

        <h2>1. Data We Collect</h2>
        <p>We collect the data below:</p>
        <ul>
          <li><strong>Account information:</strong> Email address and username when you register.</li>
          <li><strong>Login and activity logs:</strong> IP addresses, login timestamps, and usage activity for security and service operation.</li>
          <li><strong>Payment information:</strong> Only cryptocurrency transaction addresses for payment verification.</li>
          <li><strong>Anti-Abuse Monitoring:</strong> Temporary monitoring of server activity, including console logs, 
          installed packages, CPU, RAM, disk, and network usage, and detection of suspicious file names (e.g., ddos.py, flood.py). 
          This data is not stored and is used only to enforce the Terms of Service and <a href="/tos#fair-use-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8' }}>Fair Use Policy</a></li>
          <li>We <strong>do not</strong> collect cookies or tracking data.</li>
        </ul>


        <h2>2. How We Use Your Data</h2>
        <p>Heres how we use the data we collect:</p>
        <ul>
          <li>Verify your account and email.</li>
          <li>Maintain and operate our services.</li>
          <li>Prevent abuse and enforce the <strong>Fair Use Policy</strong>, including temporary monitoring via anti-abuse scripts.</li>
          <li>Respond to inquiries, bug reports, or issues.</li>
          <li>We do not sell, trade, or share your data with third parties for marketing purposes.</li>
        </ul>


        <h2>3. Data Retention and Deletion</h2>
        <p>You can delete your account at any time. When your account is deleted, all associated data is permanently removed 
          from our systems. Logs may be retained temporarily for security, fraud prevention, or service operation, but we 
          do not keep them longer than necessary.</p>
        <p>Data collected temporarily by anti-abuse scripts is not stored and is discarded immediately after checks are performed.</p>


        <h2>4. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request deletion of your account and personal data.</li>
          <li>Contact us at any time to ask how your data is being used.</li>
        </ul>


        <h2>5. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on the website, and your continued use 
          of our services constitutes acceptance of the updated policy.</p>

        <h2>6. Contact Information</h2>
        <p>For any questions please contact us at hi@lumixcore.com</p>
      </section>
    </main>
  )
}

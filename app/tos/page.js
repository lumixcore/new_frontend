import styles from "./tos.module.css"

export default function TOS() {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <h1>Terms of Service</h1>
        <p>Last updated: 14th december 2025</p>
        <hr></hr>

        <h2>1. Introduction</h2>
        <p>LumixCore is an independent project operated by an individual. It is not a registered company. By accessing or using any LumixCore 
            services, website, panel, Discord server, or related resources, you acknowledge that you have read, understood, and agree 
            to these Terms of Service & <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8' }}>Privacy Policy</a>. 
            If you do not agree with any part of these terms, please do not use the services.</p>


        <h2>2. Eligibility & Accounts</h2>
        <p>By creating an account or using the services, you confirm that:</p>
        <ul>
          <li>You will provide accurate and truthful information where required</li>
          <li>You are responsible for all activity that occurs under your account</li>
          <li>You will keep your login credentials secure</li>
          <li>You must be at least 13 years old.</li>
        </ul>
        

        <h2>3. Services provided</h2>
        <p>You can view available services on our website at lumixcore.com. Services may include free and paid plans, resource 
          allocations, and management features. Features and limits may vary depending on the selected plan. All services are provided 
          on an “as-is” and “as-available” basis. While we aim to maintain reliable and stable service, we do not guarantee 
          uninterrupted availability, performance, or uptime. LumixCore reserves the right to modify, limit, suspend, or 
          discontinue any service or feature at any time, with or without notice.</p>
        

        <h2>4. Your Responsibilities</h2>
        <p>You are responsible for managing your own data, configurations, and content while using the service.
          Users must not attempt to bypass service limitations, abuse system resources, or interfere 
          with the operation of the service or other users. Sharing or reselling accounts is not allowed. 
          You must also comply with our Privacy Policy and Fair Use Policy. If you discover any bugs, 
          vulnerabilities, or loopholes within the project, you must report them to us at hi@lumixcore.com. 
          Exploiting or taking advantage of such issues is strictly prohibited.</p>


        <h2 id="fair-use-policy">5. Fair Use Policy (FUP)</h2>
        <p>
          Our services are provided with shared system resources. Users are expected to use allocated resources
          in a fair, reasonable, and responsible manner.
        </p>
        <ul>
          <li>Users must not use disk-filling scripts or any activity that causes service instability.</li>
          <li>Users are responsible for optimizing their applications, scripts, bots, and content.
              Poorly optimized software (such as Discord bots, Telegram bots, APIs, or scripts) that causes
              excessive resource usage or instability is not allowed.</li>
          <li>Users are expected to use resources in a way appropriate for their plan size and intended purpose.
              Short resource spikes are allowed (such as during server startup, restarts, backups, or normal
              network activity). Continuous high usage (averaging roughly 70% or more of allocated resources)
              or using the service as a dedicated server is not allowed.</li>
          <li>Cryptocurrency mining or similar resource-intensive activities are strictly prohibited.</li>
          <li>Custom scripts, applications, or workloads intentionally designed to consume excessive resources are not allowed.</li>
          <li>Users must comply with all applicable third-party terms of service.</li>
          <li>Hosting, transmitting, storing, or sharing illegal content using our services is strictly prohibited.</li>
          <li>Network abuse, including DDoS attacks, port scanning, brute-force attempts, or traffic flooding, is not allowed.</li>
          <li>Using the service to harm, disrupt, or interfere with other users or external systems is prohibited.</li>
          <li>Running malware, exploit tools, vulnerability scanners, or unauthorized security testing against any system is prohibited.</li>
          <li>Hosting VPN or proxy is not allowed.</li>
        </ul>
        <p>
          We reserve the right to take action, including limiting resources, suspending, or terminating services,
          if this Fair Use Policy is violated.
        </p>


        <h2>6. Payments & Refund Policy</h2>
        <p>We currently accept payments in cryptocurrency, including USDT via the TRON (TRC20) network.
          All payments are final. No refunds will be provided for any reason and users are responsible 
          for sending payments to the correct address.</p>

        
        <h2>7. Suspension & Termination</h2>
        <p>We reserve the right to suspend or terminate accounts at any time, with or without notice. Suspension or 
          termination may result in loss of access to services and user data. LumixCore is not responsible 
          for any data loss or service disruption resulting from such actions.</p>
        

        <h2>8. Data, Backups & Loss</h2>
        <p>Users are responsible for maintaining their own data, configurations, and content. We do not guarantee backups 
          or recovery of any data. We are not responsible for any loss or corruption of data, including but not limited to 
          system failures, server crashes, misconfigurations, or user errors.</p>


        <h2>9. Service Availability & Disclaimer (As-Is, Best Effort)</h2>
        <p>We aim to provide stable and reliable services; however, all services are provided on an “as-is” and “as-available” basis.
          We do not guarantee uninterrupted service and may occasionally experience downtime, maintenance, updates, or interruptions.
          Scheduled maintenance will be communicated when possible, but users acknowledge that temporary interruptions may occur without notice.
          We are not liable for any damages or inconveniences resulting from service interruptions or performance issues.</p>


        <h2>10. Changes to the Project</h2>
        <p>LumixCore is an independent project. Features, plans, resource allocations, pricing, and services 
          may be added, modified, limited, or removed at any time without prior notice. Users acknowledge and 
          accept that the project may change as it grows, and that no guarantees are made regarding future features or service continuity.
          Changes may be announced via our website or Discord, but notice is not guaranteed.</p>


        <h2>11. Contact Information</h2>
        <p>For any questions please contact us at hi@lumixcore.com</p>
      </section>
    </main>
  )
}

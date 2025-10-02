import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Payzap",
  description:
    "Privacy Policy for Payzap, a white-label wallet service operated with Akhtar Fuiou Technologies (Private) Limited as the licensed EMI.",
  robots: "index, follow",
};

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Privacy Policy</h1>
        <div className={styles.kicker}>
          <span className={styles.badge}>Effective: October 2, 2025</span>
          <span className={styles.badge}>Version: 1.0</span>
        </div>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            ← Back to Home
          </Link>
          <Link href="/terms" className={styles.navLink}>
            Terms of Service
          </Link>
        </div>

        <p className={styles.muted}>
          This Privacy Policy explains how{" "}
          <strong>Payzap Fintech Solutions Pvt Ltd</strong> (&quot;
          <strong>Payzap</strong>&quot;, &quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;) collects, uses, shares, and protects information when
          you use the Payzap mobile application and related services (the &quot;
          <strong>Services</strong>&quot;). We operate the Services as a
          white-label wallet in partnership with{" "}
          <strong>Akhtar Fuiou Technologies (Private) Limited</strong> (&quot;
          <strong>AFT</strong>&quot;), an authorized Electronic Money
          Institution (EMI) and license holder. Customer accounts are
          established with AFT and customer data is stored by AFT as the
          licensed EMI. This policy also explains your choices and rights.
        </p>

        <div className={styles.toc}>
          <a href="#summary">Quick summary</a>
          <a href="#roles">Who is responsible for your data</a>
          <a href="#what-we-collect">Information we collect</a>
          <a href="#how-we-use">How we use information</a>
          <a href="#permissions">Device permissions</a>
          <a href="#sharing">How we share information</a>
          <a href="#security">Security</a>
          <a href="#retention">Data retention</a>
          <a href="#rights">Your rights</a>
          <a href="#children">Children&apos;s privacy</a>
          <a href="#intl">International transfers</a>
          <a href="#cookies">Cookies & analytics</a>
          <a href="#changes">Changes to this policy</a>
          <a href="#contact">Contact</a>
        </div>

        <h2 id="summary">1) Quick summary</h2>
        <ul>
          <li>
            We ask for <strong>camera</strong> and <strong>location</strong>{" "}
            access <em>only during onboarding</em> to scan your payment card and
            verify approximate location for fraud prevention and compliance.
          </li>
          <li>
            We use <strong>end‑to‑end encryption</strong> for sensitive data in
            transit and at rest.
          </li>
          <li>
            <strong>AFT</strong>, as the authorized EMI and license holder,{" "}
            <strong>
              creates and maintains your account and stores customer data
            </strong>
            .
          </li>
          <li>
            <strong>Payzap</strong> provides the app technology and acts as a{" "}
            <strong>service provider/processor</strong> to AFT for the Services.
          </li>
        </ul>

        <h2 id="roles">2) Who is responsible for your data</h2>
        <p>
          Because your account is issued by AFT (the licensed EMI), AFT is the{" "}
          <strong>data controller</strong> for personal data related to account
          issuance, KYC/AML, wallet balances, and transactions. Payzap acts as
          AFT&apos;s <strong>service provider / data processor</strong> by
          developing and operating the app interface. We process personal data
          on AFT&apos;s documented instructions and under our contract with AFT.
          For privacy requests regarding your account data, please contact AFT
          (see <a href="#contact">Contact</a>), or reach us and we will
          coordinate with AFT.
        </p>

        <h2 id="what-we-collect">3) Information we collect</h2>
        <h3>A. You provide</h3>
        <ul>
          <li>
            Identity & onboarding details: name, email, phone number, government
            ID info (as required by AFT), and cardholder details to link a card.
          </li>
          <li>Support communications and feedback.</li>
        </ul>
        <h3>B. Collected automatically when you use the app</h3>
        <ul>
          <li>
            Device & usage: device model, OS version, app version, crash logs,
            performance metrics.
          </li>
          <li>
            Approximate location (if enabled): coarse geolocation for fraud
            checks and compliance.
          </li>
        </ul>
        <h3>C. Collected via permissions (onboarding only)</h3>
        <ul>
          <li>
            <strong>Camera</strong>: to scan your payment card and/or ID
            document for onboarding. Images are processed to extract required
            data and then securely discarded unless AFT must retain them to
            satisfy legal obligations.
          </li>
          <li>
            <strong>Location</strong>: approximate device location to validate
            jurisdiction, prevent fraud, and meet risk/compliance checks. We do
            not track your continuous location; access occurs only during
            onboarding or when required to complete a regulated action.
          </li>
        </ul>

        <h2 id="how-we-use">4) How we use information</h2>
        <ul>
          <li>
            To register and verify you, link a card, and set up your wallet with
            AFT.
          </li>
          <li>
            To operate, maintain, and improve the app (including troubleshooting
            and analytics).
          </li>
          <li>
            To detect, prevent, and investigate fraud, abuse, and security
            incidents.
          </li>
          <li>
            To comply with law and respond to lawful requests (e.g., KYC/AML
            performed by AFT).
          </li>
          <li>
            With your consent, where required (e.g., granting camera or location
            access).
          </li>
        </ul>

        <h2 id="permissions">
          5) Device permissions and app store disclosures
        </h2>
        <ul>
          <li>
            <strong>Camera</strong> — purpose: scan card/ID for onboarding;
            frequency: one‑time or when re‑verification is required; data:
            images processed on device or via secure services; retention:
            discarded unless legally required by AFT.
          </li>
          <li>
            <strong>Location</strong> — purpose: verify jurisdiction and reduce
            fraud; frequency: onboarding only (or during specific regulated
            actions); precision: coarse; retention: not stored by Payzap beyond
            session; AFT may retain derived risk flags per regulation.
          </li>
        </ul>
        <p>
          Permission prompts will appear in‑app before any access. You can
          revoke permissions at any time in your device settings; certain
          features may stop working.
        </p>

        <h2 id="sharing">6) How we share information</h2>
        <ul>
          <li>
            <strong>With AFT</strong>: to create and service your account as the
            EMI license holder and data controller.
          </li>
          <li>
            <strong>Service providers</strong>: vetted vendors that host
            infrastructure, provide analytics, crash reporting, fraud detection,
            or customer support—bound by confidentiality and security
            obligations.
          </li>
          <li>
            <strong>Compliance and legal</strong>: to regulators, law
            enforcement, or other parties when required by law or to protect
            rights, safety, and security.
          </li>
          <li>
            <strong>Business transfers</strong>: if we undergo a merger,
            acquisition, or asset sale, your information may transfer subject to
            this Policy.
          </li>
          <li>
            <strong>We do not sell personal information</strong>.
          </li>
        </ul>

        <h2 id="security">7) Security</h2>
        <p>
          We apply technical and organizational measures appropriate to the
          risk, including <strong>end‑to‑end encryption</strong> of sensitive
          data in transit and at rest, key management, access controls, network
          segmentation, and continuous monitoring. No system is perfectly
          secure; we maintain incident response procedures and will notify AFT
          and/or you as required by law.
        </p>

        <h2 id="retention">8) Data retention</h2>
        <p>
          Payzap retains only the data it needs to operate the app interface and
          support AFT in servicing your account. Customer account and
          transaction records are retained by AFT in accordance with regulatory
          retention periods (e.g., KYC/AML). Where we process data on AFT&apos;s
          behalf, we retain it for the duration of our contract or as instructed
          by AFT and then securely delete or anonymize it.
        </p>

        <h2 id="rights">9) Your privacy rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, restrict, or object to processing, to data portability, and to
          withdraw consent where processing is based on consent. Because AFT
          controls account data, requests for those rights should be directed to
          AFT. You can also contact Payzap and we will coordinate with AFT to
          support your request.
        </p>
        <h3>Legal bases (EEA/UK users)</h3>
        <p>
          Where the GDPR/UK GDPR applies, our processing occurs under these
          legal bases: performance of a contract (onboarding and servicing via
          AFT), compliance with legal obligations (financial regulations),
          legitimate interests (fraud prevention, app security, service
          improvement), and consent (camera/location permissions where
          required).
        </p>
        <h3>California (CCPA/CPRA)</h3>
        <p>
          We do not &quot;sell&quot; or &quot;share&quot; personal information
          for cross‑context behavioral advertising as defined by California law.
          California residents can exercise their rights by contacting us or
          AFT.
        </p>

        <h2 id="children">10) Children&apos;s privacy</h2>
        <p>
          The Services are not directed to children under the age required to
          open a financial account in your jurisdiction. If you believe a child
          has provided personal data, contact us so we can work with AFT to
          address it.
        </p>

        <h2 id="intl">11) International data transfers</h2>
        <p>
          Your information may be processed in countries other than your own.
          Where required, we and AFT implement appropriate safeguards for
          cross‑border transfers (for example, standard contractual clauses).
        </p>

        <h2 id="cookies">12) Cookies & analytics (website)</h2>
        <p>
          Our website may use strictly necessary cookies and, with your consent,
          analytics cookies to understand usage and improve the site. You can
          manage cookies through our cookie banner and your browser settings.
        </p>

        <h2 id="changes">13) Changes to this policy</h2>
        <p>
          We may update this Policy from time to time. We will post the updated
          version and revise the <em>Effective</em> date above. Material changes
          will be communicated through the app or website.
        </p>

        <h2 id="contact">14) Contact</h2>
        <p>
          <strong>Payzap Fintech Solutions Pvt Ltd</strong>
          <br />
          Email: <a href="mailto:hello@payzap.com.pk">hello@payzap.com.pk</a>
          <br />
          Address: Lahore, Pakistan
        </p>
      </div>
    </div>
  );
}

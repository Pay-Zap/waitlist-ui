import type { Metadata } from "next";
import Link from "next/link";
import styles from "../privacy/privacy.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Payzap",
  description: "Terms of Service for Payzap digital payment services.",
  robots: "index, follow",
};

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Terms of Service</h1>
        <div className={styles.kicker}>
          <span className={styles.badge}>Effective: October 2, 2025</span>
          <span className={styles.badge}>Version: 1.0</span>
        </div>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            ← Back to Home
          </Link>
          <Link href="/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
        </div>

        <p className={styles.muted}>
          Terms of Service content will be added here. This page serves as a
          placeholder for your terms of service documentation.
        </p>

        <h2>1) Service Description</h2>
        <p>
          Payzap provides digital payment services in partnership with Akhtar
          Fuiou Technologies (Private) Limited (AFT) as the authorized
          Electronic Money Institution (EMI).
        </p>

        <h2>2) Contact Information</h2>
        <p>
          <strong>Payzap Fintech Solutions Pvt Ltd</strong>
          <br />
          Email: <a href="mailto:hello@payzap.com.pk">hello@payzap.com.pk</a>
          <br />
          Address: Lahore, Pakistan
        </p>

        <div className={styles.footer}>
          This is a placeholder Terms of Service page. Please consult with legal
          counsel to create comprehensive terms appropriate for your services
          and jurisdiction.
        </div>
      </div>
    </div>
  );
}

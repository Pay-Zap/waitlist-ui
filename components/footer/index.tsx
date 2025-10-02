import Link from "next/link";
import Typography from "@components/typography";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <Typography classes="text-grey-400 text-sm font-light">
            © 2025 Payzap Fintech Solutions Pvt Ltd. All rights reserved.
          </Typography>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-grey-400 text-sm font-light transition-colors duration-200 hover:text-brand-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-grey-400 text-sm font-light transition-colors duration-200 hover:text-brand-300"
            >
              Terms
            </Link>
            <Link
              href="mailto:support@payzap.com.pk"
              className="text-grey-400 text-sm font-light transition-colors duration-200 hover:text-brand-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

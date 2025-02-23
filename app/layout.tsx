import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Payzap - Go Cashless | Secure Digital Payments",
  description:
    "Payzap helps Pakistanis go cashless by enabling secure and seamless digital transactions. Send, receive, and manage money with ease – all in one app.",
  keywords: [
    "Payzap",
    "digital payments",
    "fintech",
    "Pakistan",
    "cashless transactions",
    "online banking",
    "mobile payments",
    "secure transactions",
    "send money",
    "receive money",
  ],
  authors: [{ name: "Payzap Team", url: "https://github.com/Pay-Zap" }],

  metadataBase: new URL("https://www.payzap.com.pk"),
  openGraph: {
    title: "Payzap - Go Cashless in Pakistan",
    description:
      "Payzap enables seamless and secure digital transactions for Pakistanis. Make online payments, send & receive money with ease.",
    url: "https://www.payzap.com.pk",
    siteName: "Payzap",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Payzap - Go Cashless",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

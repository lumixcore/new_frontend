import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://lumixcore.com'),
  title: {
    default: 'Lumixcore',
    template: '%s — Lumixcore',
  },
  description: 'Simple, fast hosting for apps, bots, and projects. Deploy without the hassle.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Lumixcore',
    type: 'website',
    url: '/',
    title: 'Lumixcore',
    description: 'Simple, fast hosting for apps, bots, and projects. Deploy without the hassle.',
    images: [{ url: '/images/back.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2804720115610064"
     crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Copperplate+Gothic:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

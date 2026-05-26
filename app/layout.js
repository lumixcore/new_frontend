import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from 'lenis/react';
import InitialLoader from '../components/InitialLoader'; // <-- ADD
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
  keywords: ['hosting', 'apps', 'bots', 'deploy', 'cloud', 'server', 'lumixcore'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Lumixcore',
    type: 'website',
    url: '/',
    title: 'Lumixcore',
    description: 'Simple, fast hosting for apps, bots, and projects. Deploy without the hassle.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumixcore',
    description: 'Simple, fast hosting for apps, bots, and projects. Deploy without the hassle.',
    site: '@lumixcore',
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

export function generateViewport() {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
  };
}

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://lumixcore.com/#organization',
        'name': 'Lumixcore',
        'url': 'https://lumixcore.com',
        'logo': 'https://lumixcore.com/favicon.ico',
        'sameAs': [],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lumixcore.com/#website',
        'url': 'https://lumixcore.com',
        'name': 'Lumixcore',
        'publisher': { '@id': 'https://lumixcore.com/#organization' },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://lumixcore.com/" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2804720115610064" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Copperplate+Gothic:wght@400&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <InitialLoader /> {/* <-- ADD */}
        <ReactLenis root options={{ lerp: 0.3, duration: 1.4, smoothTouch: true }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
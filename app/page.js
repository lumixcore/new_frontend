import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Lumixcore: Simple, fast hosting',
  description: 'A platform built to make hosting simpler than ever. Deploy your apps, bots, and projects without the hassle.',
  keywords: ['hosting', 'deploy', 'cloud', 'bots', 'apps', 'lumixcore'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lumixcore: Simple, fast hosting',
    description: 'Deploy your apps, bots, and projects without the hassle.',
    url: '/',
    images: [{ url: '/images/back.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumixcore: Simple, fast hosting',
    description: 'Deploy your apps, bots, and projects without the hassle.',
    images: ['/images/back.png'],
  },
};

export default function Home() {
  return <HomePageClient />;
}

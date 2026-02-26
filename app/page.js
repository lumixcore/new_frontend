import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Lumixcore — Simple, fast hosting',
  description: 'A platform built to make hosting simpler than ever. Deploy your apps, bots, and projects without the hassle.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lumixcore — Simple, fast hosting',
    description: 'Deploy your apps, bots, and projects without the hassle.',
    url: '/',
    images: [{ url: '/images/back.png' }],
    type: 'website',
  },
};

export default function Home() {
  return <HomePageClient />;
}

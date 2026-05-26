export const metadata = {
  title: 'Web Hosting - Lumixcore',
  description: 'Reliable web hosting for websites and apps. Easy deploy, NVMe storage, DDoS protection, and straight-forward pricing.',
  keywords: ['web hosting', 'hosting', 'website hosting', 'nvme hosting', 'lumixcore'],
  alternates: { canonical: '/webhosting' },
  openGraph: {
    title: 'Web Hosting - Lumixcore',
    description: 'Reliable web hosting for websites and apps. Easy deploy, NVMe storage, DDoS protection, and straight-forward pricing.',
    url: '/webhosting',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function WebhostingLayout({ children }) {
  return children;
}

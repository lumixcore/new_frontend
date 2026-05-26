export const metadata = {
  title: 'Cloud Containers - Lumixcore',
  description: 'Simple, fast cloud containers for apps, bots, and game servers. Try free plans starting at $0.65/month.',
  keywords: ['cloud containers', 'hosting', 'deploy', 'bots', 'apps', 'game servers', 'lumixcore'],
  alternates: { canonical: '/containers' },
  openGraph: {
    title: 'Cloud Containers - Lumixcore',
    description: 'Simple, fast cloud containers for apps, bots, and game servers. Try free plans starting at $0.65/month.',
    url: '/containers',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function ContainersLayout({ children }) {
  return children;
}

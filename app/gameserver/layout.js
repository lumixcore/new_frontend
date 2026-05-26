export const metadata = {
  title: 'Game Hosting - Lumixcore',
  description: 'Host game servers using lightweight cloud containers. Fast setup, panel control, and affordable plans.',
  keywords: ['game hosting', 'game servers', 'cloud containers', 'lumixcore'],
  alternates: { canonical: '/gameserver' },
  openGraph: {
    title: 'Game Hosting - Lumixcore',
    description: 'Host game servers using lightweight cloud containers. Fast setup, panel control, and affordable plans.',
    url: '/gameserver',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function GameServerLayout({ children }) {
  return children;
}

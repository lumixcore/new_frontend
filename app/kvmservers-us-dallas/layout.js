export const metadata = {
  title: 'US KVM Rootservers - Lumixcore',
  description: 'KVM rootservers hosted in Dallas, US. Powerful CPU, full root access, and affordable plans starting at $4.5.',
  keywords: ['kvm rootserver', 'dedicated server', 'us', 'dallas', 'lumixcore'],
  alternates: { canonical: '/kvmservers-us' },
  openGraph: {
    title: 'US KVM Rootservers - Lumixcore',
    description: 'KVM rootservers hosted in Dallas, US. Powerful CPU, full root access, and affordable plans starting at $4.5.',
    url: '/kvmservers-us',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function KVMUSLayout({ children }) {
  return children;
}

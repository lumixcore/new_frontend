export const metadata = {
  title: 'US KVM Rootservers - Lumixcore',
  description: 'KVM rootservers hosted in Utah, US. Powerful CPU, full root access, and affordable plans starting at $4.5.',
  keywords: ['kvm rootserver', 'dedicated server', 'us', 'utah', 'lumixcore'],
  alternates: { canonical: '/kvmservers-us-utah' },
  openGraph: {
    title: 'Utah KVM Rootservers - Lumixcore',
    description: 'KVM rootservers hosted in Utah, US. Powerful CPU, full root access, and affordable plans starting at $6.5.',
    url: '/kvmservers-us-utah',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function KVMUSLayout({ children }) {
  return children;
}

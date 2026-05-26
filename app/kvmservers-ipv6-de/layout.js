export const metadata = {
  title: 'DE IPv6 KVM Rootservers - Lumixcore',
  description: 'IPv6-first KVM rootservers in Frankfurt. Affordable plans with /64 IPv6, NVMe storage, and full root access.',
  keywords: ['ipv6 kvm rootserver', 'germany', 'frankfurt', 'ipv6', 'lumixcore'],
  alternates: { canonical: '/kvmservers-ipv6-de' },
  openGraph: {
    title: 'DE IPv6 KVM Rootservers - Lumixcore',
    description: 'IPv6-first KVM rootservers in Frankfurt. Affordable plans with /64 IPv6, NVMe storage, and full root access.',
    url: '/kvmservers-ipv6-de',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function KVMIPv6DELayout({ children }) {
  return children;
}

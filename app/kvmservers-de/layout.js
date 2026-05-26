export const metadata = {
  title: 'DE KVM Rootservers - Lumixcore',
  description: 'KVM rootservers hosted in Frankfurt, Germany. Powerful CPU, full root access, and competitive pricing starting at $4.30.',
  keywords: ['kvm rootserver', 'dedicated server', 'germany', 'frankfurt', 'lumixcore'],
  alternates: { canonical: '/kvmservers-de' },
  openGraph: {
    title: 'DE KVM Rootservers - Lumixcore',
    description: 'KVM rootservers hosted in Frankfurt, Germany. Powerful CPU, full root access, and competitive pricing starting at $4.30.',
    url: '/kvmservers-de',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function KVMDELayout({ children }) {
  return children;
}

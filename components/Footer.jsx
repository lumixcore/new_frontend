'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 overflow-hidden border-t border-white/10 bg-[#00051b]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(1000px 400px at 20% 0%, rgba(99,102,241,0.20) 0%, rgba(0,0,0,0) 60%), radial-gradient(900px 350px at 80% 0%, rgba(168,85,247,0.14) 0%, rgba(0,0,0,0) 60%)',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Lumixcore" 
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="text-white font-semibold text-lg">Lumixcore</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-400 max-w-md">
              Build fast, deploy faster. Lumixcore makes hosting simpler without the hassle.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:hi@lumixcore.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://github.com/lumixcore" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.75 5.64.75 12c0 5.08 3.2 9.38 7.64 10.9.56.1.77-.25.77-.55v-2.02c-3.11.69-3.77-1.52-3.77-1.52-.51-1.34-1.24-1.69-1.24-1.69-1.01-.71.08-.7.08-.7 1.12.08 1.71 1.19 1.71 1.19.99 1.74 2.6 1.24 3.23.95.1-.74.39-1.24.7-1.52-2.48-.29-5.09-1.28-5.09-5.71 0-1.26.44-2.29 1.17-3.1-.12-.29-.51-1.45.11-3.03 0 0 .96-.32 3.14 1.18.91-.26 1.89-.39 2.86-.4.97.01 1.95.14 2.86.4 2.18-1.5 3.14-1.18 3.14-1.18.62 1.58.23 2.74.11 3.03.73.81 1.17 1.84 1.17 3.1 0 4.44-2.62 5.42-5.11 5.71.4.36.76 1.06.76 2.14v3.18c0 .3.2.66.78.55 4.43-1.52 7.63-5.82 7.63-10.9C23.25 5.64 18.27.5 12 .5Z"/>
                </svg>
              </a>
              <a href="https://discord.gg/2h8hBx8A52" aria-label="Discord" className="text-gray-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.487 0-.164-.393-.409-.874-.617-1.249a.077.077 0 0 0-.078-.037c-1.695.29-3.335.803-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056c1.993 1.474 3.923 2.37 5.819 2.963a.078.078 0 0 0 .084-.028c.447-.61.844-1.256 1.215-1.923a.076.076 0 0 0-.041-.106c-.652-.248-1.274-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.095.252-.194.371-.291a.074.074 0 0 1 .077-.01c3.927 1.84 8.18 1.84 12.061 0a.074.074 0 0 1 .078.01c.12.097.246.196.372.291a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.892.076.076 0 0 0-.04.106c.372.667.768 1.313 1.215 1.923a.077.077 0 0 0 .084.028c1.905-.593 3.836-1.489 5.83-2.963a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.673-3.548-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.184 0-2.156-1.104-2.156-2.464 0-1.36.955-2.464 2.156-2.464 1.21 0 2.175 1.113 2.156 2.464 0 1.36-.955 2.464-2.156 2.464Zm7.975 0c-1.184 0-2.156-1.104-2.156-2.464 0-1.36.955-2.464 2.156-2.464 1.21 0 2.175 1.113 2.156 2.464 0 1.36-.946 2.464-2.156 2.464Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="text-sm font-semibold text-white">Information</h4>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <Link
                    href="/#features-section"
                    onClick={(e) => {
                      const el = document.getElementById('features-section');
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                  <Link
                    href="/#faq-section"
                    onClick={(e) => {
                      const el = document.getElementById('faq-section');
                      if (el) {
                        e.preventDefault();
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                  <a href="https://stats.uptimerobot.com/9FsmJ19IdG" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                  <Link
                    href="/#pricing-section"
                    onClick={(e) => {
                      const pricingSection = document.getElementById('pricing-section');
                      if (pricingSection) {
                        e.preventDefault();
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">Rules</h4>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/tos#refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
                  <a href="/tos#fair-use-policy" className="text-gray-400 hover:text-white transition-colors">Fair Use Policy</a>
                  <a href="/tos" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">Support</h4>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a href="mailto:hi@lumixcore.com" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                  <a href="https://github.com/lumixcore" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-gray-500">Lumixcore, All rights reserved.</p>
          <div className="h-px w-full md:w-80 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-70"
        style={{
          background:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0) 10px, rgba(255,255,255,0) 18px)',
          maskImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%)',
        }}
      ></div>
    </footer>
  );
};

export default Footer;

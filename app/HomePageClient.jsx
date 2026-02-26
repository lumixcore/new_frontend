'use client';

import ClickSpark from '../components/ClickSpark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandSparkles, faBolt, faShield, faPalette, faServer, faRocket, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { LogoMarquee3D } from '../components/LogoMarquee3D';
import PricingCard from '../components/PricingCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';
import { FAQ } from '../components/FAQ';

export default function HomePageClient() {

  const [isVisible, setIsVisible] = useState(false);
  const pricingRef = useRef(null);
  const pricingCarouselRef = useRef(null);

  // Scroll animations for different sections
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);
  const [marqueeRef, marqueeVisible] = useScrollAnimation(0.3);
  const [differentRef, differentVisible] = useScrollAnimation(0.2);
  const [faqRef, faqVisible] = useScrollAnimation(0.2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentPricingEl = pricingRef.current;
    if (currentPricingEl) observer.observe(currentPricingEl);

    return () => {
      if (currentPricingEl) observer.unobserve(currentPricingEl);
    };
  }, []);

  const scrollPricingCarousel = (direction) => {
    const el = pricingCarouselRef.current;
    if (!el) return;

    const firstCard = el.querySelector('.snap-start');
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24; // 24px gap
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <ClickSpark sparkColor='#b1afb7' sparkSize={10} sparkRadius={17} sparkCount={6} duration={400}>
      <Navbar />

      <div className="relative min-h-screen bg-[#000313] overflow-hidden flex flex-col items-center justify-center">
        {/* Half Purple Circle Shade in Center-Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
        {/* Graph Texture Box with Sparse Random Dots */}
        <div className="absolute top-0 z-0 w-full h-120" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.25) 1.5px, transparent 1.5px),
            radial-gradient(circle at 65% 15%, rgba(255,255,255,0.15) 1px, transparent 1px),
            radial-gradient(circle at 40% 45%, rgba(255,255,255,0.2) 1.2px, transparent 1.2px),
            radial-gradient(circle at 85% 35%, rgba(255,255,255,0.18) 1px, transparent 1px),
            radial-gradient(circle at 25% 65%, rgba(255,255,255,0.22) 1.3px, transparent 1.3px),
            radial-gradient(circle at 75% 55%, rgba(255,255,255,0.16) 1px, transparent 1px),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.2) 1.2px, transparent 1.2px),
            radial-gradient(circle at 10% 90%, rgba(255,255,255,0.14) 1px, transparent 1px),
            radial-gradient(circle at 90% 70%, rgba(255,255,255,0.19) 1.1px, transparent 1.1px),
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '300px 300px, 280px 280px, 320px 320px, 290px 290px, 310px 310px, 285px 285px, 305px 305px, 295px 295px, 315px 315px, 30px 30px, 30px 30px',
          maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          animation: 'smoothFloat 20s ease-in-out infinite'
        }}></div>
        <style jsx>{`
          @keyframes smoothFloat {
            0%, 100% {background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;}
            50% {background-position: 0 150px, 0 140px, 0 160px, 0 145px, 0 155px, 0 142px, 0 152px, 0 147px, 0 157px, 0 0, 0 0;}
          }
          @keyframes floatDots {
            from {background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;}
            to {background-position: 0 200px, 0 180px, 0 220px, 0 190px, 0 210px, 0 195px, 0 185px, 0 205px, 0 0;}
          }
        `}</style>

        {/* Hero Section */}
        <div ref={heroRef} className="flex flex-col items-center justify-center mt-20 sm:mt-0 min-h-screen">
          <div className={`flex flex-col items-center justify-center text-center px-8 z-10 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-cyan-500 text-sm p-2 rounded-full bg-linear-to-t from-transparent to-purple-500/20 relative font-semibold mb-2"
              style={{
                background: 'linear-gradient(#150C59, #00000000) padding-box, linear-gradient(to bottom, rgb(168 85 247 / 0.5), transparent) border-box',
                border: '1px solid transparent',
              }}>
              Simple, fast, non of the hassle.
            </span>
            <h1 className={`text-5xl md:text-8xl lg:text-9xl text-white mb-6 max-w-4xl tracking-wider transition-all duration-1000 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ fontFamily: 'Copperplate Gothic, serif', fontWeight: '400' }}>
              Lumixcore
            </h1>
            <p className={`text-lg text-gray-400 mb-8 max-w-3xl text-left sm:text-center transition-all duration-1000 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{marginTop: '-10px'}}>
              A platform build to make hosting <span className="text-cyan-500">simpler</span> than ever. Lumixcore allows you to host your projects in a simpler way, fast, and without the drama.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 w-full sm:min-w-[200px] justify-center transition-all duration-1000 delay-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button className="px-8 py-3 bg-linear-to-b from-purple-500 to-purple-900 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-800/50 flex items-center justify-center group" onClick={() => window.location.href = 'https://panel.lumixcore.com/auth/register'}>
                Let&apos;s start
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <button className="px-8 py-3 text-white bg-gray-900 rounded-full hover:opacity-90 transition-opacity shadow-lg border border-gray-700 hover:border-gray-600 flex items-center justify-center group" onClick={() => {
                const pricingSection = document.getElementById('pricing-section');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Pricing
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Stats Section */}
          <div ref={statsRef} className={`mt-20 sm:mt-30 flex flex-wrap justify-center items-center gap-5 mr-5 ml-5 mb-5 flex-col sm:flex-row transition-all duration-1000 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="text-left p-4 min-w-[350px] border-gray-900 border rounded-lg transition-all duration-700 delay-200 hover:scale-105 hover:border-purple-500/30">
              <div className="text-sm text-gray-400">Used by</div>
              <div className="text-6xl text-white">600+</div>
              <div className="text-lg text-gray-300">Developers</div>
              <div className="text-sm text-gray-500">Building with lumixcore</div>
            </div>
            <div className="text-left p-4 min-w-[350px] border-gray-900 border rounded-lg transition-all duration-700 delay-400 hover:scale-105 hover:border-purple-500/30">
              <div className="text-sm text-gray-400">Available in</div>
              <div className="text-6xl text-white">2</div>
              <div className="text-lg text-gray-300">Locations</div>
              <div className="text-sm text-gray-500">Always closer to you</div>
            </div>
          </div>
        </div>

        {/* 3D Logo Marquee Section */}
        <div ref={marqueeRef} className={`w-full mt-20 relative transition-all duration-1200 ${
          marqueeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className={`text-center mb-5 transition-all duration-1000 ${
            differentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold"
              style={{
                background: 'linear-gradient(#00051b, #00000000) padding-box, linear-gradient(to bottom, rgb(168 85 247 / 0.5), transparent) border-box',
                border: '1px solid transparent',
              }}>
              Your Project, Your Stack
            </span>
          </div>
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
            marqueeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-5xl text-white mb-3" style={{fontFamily: 'Manrope, sans-serif'}}>Whatever stack you choose.</h2>
            <p className="text-gray-400 text-[15px]">Absolutely any stack for your poject.</p>
          </div>
          <div className={`transition-all duration-1000 delay-500 ${
            marqueeVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <LogoMarquee3D />
          </div>
        </div>

        <div id="features-section" ref={differentRef} className={`relative w-full mt-30 transition-all duration-1000 ${
          differentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className={`text-center mb-10 transition-all duration-1000 ${
              differentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold"
                style={{
                  background: 'linear-gradient(#00051b, #00000000) padding-box, linear-gradient(to bottom, rgb(168 85 247 / 0.5), transparent) border-box',
                  border: '1px solid transparent',
                }}>
                What&apos;s Different?
              </span>
              <h2 className="text-3xl md:text-5xl text-white mb-1 mt-5" style={{fontFamily: 'Manrope, sans-serif'}}>A cleaner way to host.</h2>
              <p className="text-gray-400 text-[15px] max-w-2xl mx-auto">See what makes us different from other hosting providers.</p>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-200 ${
              differentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* First Row - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 rounded-2xl border border-white/10 bg-[#00051b]/40 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <FontAwesomeIcon icon={faServer} className="text-white/90" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Simple Hosting, No Matter the Project</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Whether your project is simple or complex, hosting shouldn't feel complicated. With our cloud containers, you don't have to manage a full operating system or deal with VPS setup. Just create a server, upload your code, and run it. That's it.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#00051b]/40 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <FontAwesomeIcon icon={faDollarSign} className="text-white/90" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Ultra affordable</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Start hosting from just $0.65/month, powerful cloud containers at a price you won't find elsewhere.</p>
                </div>
              </div>

              {/* Second Row - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/10 bg-[#00051b]/40 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <FontAwesomeIcon icon={faRocket} className="text-white/90" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Powerful hardware</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Free plans run on Intel Xeon 6150 CPUs, while paid plans upgrade you to faster 3.1 GHz 2nd Gen Gold Cascade Lake processors for enhanced performance.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#00051b]/40 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <FontAwesomeIcon icon={faPalette} className="text-white/90" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Better Panel</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">We use a heavily modified panel built on top of Pterodactyl ensuring easy managemnt and very straightforward without the complications.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#00051b]/40 backdrop-blur p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <FontAwesomeIcon icon={faShield} className="text-white/90" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Free to Start</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Try the platform with free plans, explore the system, and upgrade only when you’re ready or if you need more power.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="relative w-full mt-20 transition-all duration-1000 overflow-hidden rounded-t-[40px]" ref={pricingRef} id="pricing-section">
          {/* Top-Left Corner Glow */}
          <div 
            className="absolute top-0 left-0 pointer-events-none transition-opacity duration-1000 z-10"
            style={{
              width: 'clamp(400px, 20vw, 800px)',
              height: 'clamp(200px, 10vw, 400px)',
              background: 'radial-gradient(circle at 0% 0%, rgba(0, 40, 255, 1) 0%, rgba(0, 40, 255, 0.7) 30%, rgba(0, 40, 255, 0.3) 60%, transparent 85%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              opacity: isVisible ? 1 : 0
            }}></div>
          
          {/* Top-Right Corner Glow */}
          <div 
            className="absolute top-0 right-0 pointer-events-none transition-opacity duration-1000 z-10"
            style={{
              width: 'clamp(400px, 20vw, 800px)',
              height: 'clamp(200px, 10vw, 400px)',
              background: 'radial-gradient(circle at 100% 0%, rgba(0, 40, 255, 1) 0%, rgba(0, 40, 255, 0.7) 30%, rgba(0, 40, 255, 0.3) 60%, transparent 85%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              opacity: isVisible ? 1 : 0
            }}></div>

          {/* Top Center Glow (Horizontal Flood) */}
          <div 
            className="absolute inset-x-0 top-0 pointer-events-none transition-opacity duration-1000 z-10"
            style={{
              height: 'clamp(150px, 8vw, 300px)',
              background: 'radial-gradient(ellipse 160% 100% at 50% 0%, rgba(0, 40, 255, 0.8) 0%, rgba(0, 40, 255, 0.5) 40%, transparent 80%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              opacity: isVisible ? 1 : 0
            }}></div>

          {/* Grid + stars overlay */}
          <div className="absolute inset-x-0 top-0 z-0 h-120 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 18% 28%, rgba(255,255,255,0.25) 1.2px, transparent 1.2px),
                radial-gradient(circle at 62% 18%, rgba(255,255,255,0.18) 1px, transparent 1px),
                radial-gradient(circle at 44% 62%, rgba(255,255,255,0.2) 1.1px, transparent 1.1px),
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '260px 260px, 340px 340px, 420px 420px, 64px 64px, 64px 64px',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 82%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 82%)',
              opacity: 0.95
            }}></div>

          <div className="relative z-10 text-center mb-12 mt-5">
            <span className={`text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
              style={{
                background: 'linear-gradient(#00051b, #00000000) padding-box, linear-gradient(to bottom, rgb(168 85 247 / 0.5), transparent) border-box',
                border: '1px solid transparent',
              }}>
              <FontAwesomeIcon icon={faWandSparkles} className="text-cyan-500 mr-1" />
              Cloud Container Pricing
            </span>
            <h2 className={`text-3xl md:text-5xl text-white mb-4 mt-5 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{fontFamily: 'Manrope, sans-serif'}}>Choose Your Container</h2>
            <p className={`text-gray-400 text-[15px] transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>Select the perfect cloud container for your project needs.</p>
          </div>
          <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div
              ref={pricingCarouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Free"
                  price="0"
                  // originalPrice="$0"
                  features={[
                    "1GB RAM (fair use)",
                    "100% CPU (fair use)",
                    "1GB NVMe (fair use)",
                    "0 server backup",
                    "0 databases",
                    "2 ports",
                    "No subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Micro"
                  price="0.65"
                  // originalPrice="$0.50"
                  features={[
                    "512MB RAM",
                    "50% CPU",
                    "2GB NVMe Storage",
                    "0 Backups",
                    "0 Databases",
                    "1 Port",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Small"
                  price="1.45"
                  // originalPrice="$1.00"
                  features={[
                    "1GB RAM",
                    "75% CPU",
                    "5GB NVMe Storage",
                    "1 Backup",
                    "0 Database",
                    "1 Port",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Medium"
                  price="2.85"
                  // originalPrice="$2.00"
                  features={[
                    "2GB RAM",
                    "100% CPU",
                    "10GB NVMe Storage",
                    "1 Backup",
                    "1 Database",
                    "2 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="Large"
                  price="3.85"
                  // originalPrice="$3.00"
                  features={[
                    "3GB RAM",
                    "150% CPU",
                    "16GB NVMe Storage",
                    "1 Backup",
                    "2 Databases",
                    "3 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="XL"
                  price="4.85"
                  // originalPrice="$5.00"
                  features={[
                    "4GB RAM",
                    "200% CPU",
                    "24GB NVMe Storage",
                    "2 Backups",
                    "2 Databases",
                    "3 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
              <div className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <PricingCard 
                  planName="2XL"
                  price="5.95"
                  // originalPrice="$7.00"
                  features={[
                    "6GB RAM",
                    "200% CPU",
                    "36GB Storage",
                    "3 Backups",
                    "3 Databases",
                    "4 Ports",
                    "Free subdomain"
                  ]}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                aria-label="Previous plans"
                onClick={() => scrollPricingCarousel(-1)}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-[#00051b]/60 backdrop-blur hover:bg-[#00051b]/80 transition"
              >
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next plans"
                onClick={() => scrollPricingCarousel(1)}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-[#00051b]/60 backdrop-blur hover:bg-[#00051b]/80 transition"
              >
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative w-full mt-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold"
                style={{
                  background: 'linear-gradient(#00051b, #00000000) padding-box, linear-gradient(to bottom, rgb(168 85 247 / 0.5), transparent) border-box',
                  border: '1px solid transparent',
                }}>
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-5xl text-white mb-1 mt-5" style={{fontFamily: 'Manrope, sans-serif'}}>Got Questions?</h2>
              <p className="text-gray-400 text-[15px] max-w-2xl mx-auto">Find answers to common questions about Lumixcore.</p>
            </div>

            <div>
              <FAQ items={[
                {
                  question: "What makes Lumixcore different from other hosting providers?",
                  answer: "We focus on simplicity and speed. We've stripped away the complexity to give you a clean, minimal interface that gets your projects deployed without the usual hassle."
                },
                {
                  question: "Can I deploy any type of application?",
                  answer: "Yes! You can host any stack or framework. Whether you're using Node.js, Python, PHP, Go, Rust, or any other language, our cloud containers can handle it."
                },
                {
                  question: "How does the fair-use policy work?",
                  answer: "Our fair-use policy ensures optimal performance for all users. This policy is strongly enforced, we use smart bots to detect abuse and automatically suspend the servers."
                },
                {
                  question: "What are cloud containers?",
                  answer: "Cloud containers are basically isolated little boxes on a server where your code runs. With our panel it's super simple. You create a container, upload your code, and hit run. That's literally it."
                },
                {
                  question: "What locations are available?",
                  answer: "We currently operate in 2 locations, the US and Germany. We are planning to expand more in the future."
                },
                {
                  question: "What are your payment methods?",
                  answer: "Currently we accept payments via crypto. If you want to use another payment method, please contact us."
                }
              ]} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </ClickSpark>
  );
}

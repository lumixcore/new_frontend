// import Image from 'next/image';
'use client';

import CardNav from '../components/CardNav'
import ClickSpark from '../components/ClickSpark';
import ColorBends from '../components/ColorBends';
import FadeSlideshow from '../components/FadeSlideshow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPython, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faFire, faServer } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const items = [
    {
      label: "Information",
      // bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "ToS", ariaLabel: "Terms of Service", href: "/tos" },
        { label: "FuP", ariaLabel: "Fair Use Policy" , href: "/tos#fair-use-policy"},
        { label: "Privacy Policy", ariaLabel: "Privacy Policy", href: "/privacy"}
      ]
    },
    {
      label: "Links", 
      // bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Panel", ariaLabel: "Open Panel", href: "https://panel.lumixcore.com"},
        { label: "Join Discord", ariaLabel: "Discord Server link" , href: "https://discord.gg/2h8hBx8A52"}
      ]
    },
    {
      label: "Contact",
      // bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:hi@lumixcore.com"},
        // { label: "Twitter", ariaLabel: "Twitter" },
        // { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
  const images = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
  ];

  return (
    <ClickSpark sparkColor='#b1afb7' sparkSize={10} sparkRadius={17} sparkCount={6} duration={400}>

    <div className="min-h-screen bg-[#000d1a] text-[#A1A1AA]" style={{fontFamily: '"Inter", sans-serif'}}>
      {/* NAVBAR */}
      <CardNav
        logo="/images/logo.png"
        logoAlt="Company Logo"
        items={items}
        blurAmount = 'lg'
        menuColor="#b1afb7"
        buttonTextColor="#C7C5CD"
        ease="power3.out"
      />

      {/* PAGE CONTENT */}
      <div>
        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 gap-6 text-center">

          <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 mt-[90px] lg:mb-10 mb-0">
            <h1 className="font-extrabold text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
                bg-linear-to-r from-[#98ffff] to-[#b66dff]
                bg-clip-text text-transparent"
                style={{lineHeight: '1.5'}}>
              Simplest way to host
            </h1>

            <p className="text-[#A1A1AA] text-[18px] font-normal leading-relaxed max-w-4xl text-left sm:text-center" style={{fontFamily: '"Inter", sans-serif', fontWeight: 400}}>
              LumixCore, a project built to make hosting simpler than ever for everyone. Upload your codebase, click run, and your project stays online forever.
            </p>

            <div className="flex flex-wrap justify-center gap-4 w-full">
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")}
                className="px-6 py-3 rounded-full w-full sm:w-auto sm:min-w-[280px] flex items-center justify-center gap-3 bg-blue-500/30 backdrop-blur-sm border border-cyan-500/20 text-white font-semibold shadow-lg hover:bg-blue-500/50 hover:border-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faRocket} className="text-lg sm:text-xl md:text-2xl max-w-6" /> Open Panel
              </button>
              <button
                onClick={() => window.open("https://github.com/lumixcore", "_blank", "noopener,noreferrer")}
                className="px-6 py-3 rounded-full w-full sm:w-auto sm:min-w-[280px] flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold shadow-lg hover:bg-white/20 hover:border-white/30 cursor-pointer transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl md:text-2xl max-w-6" /> Github
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:mt-0 w-full">
            <FadeSlideshow 
              images={images} 
              className="lg:w-[1000px]" 
            />
          </div>

          {/* Stats Section */}
          <div className="w-full max-w-4xl mx-auto py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00c0b0] mb-2">400+</div>
                <div className="text-[#A1A1AA] text-sm md:text-base" style={{fontFamily: '"Inter", sans-serif'}}>users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00c0b0] mb-2">100+</div>
                <div className="text-[#A1A1AA] text-sm md:text-base" style={{fontFamily: '"Inter", sans-serif'}}>projects hosted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00c0b0] mb-2">99.7%</div>
                <div className="text-[#A1A1AA] text-sm md:text-base" style={{fontFamily: '"Inter", sans-serif'}}>maintained uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#00c0b0] mb-2">2</div>
                <div className="text-[#A1A1AA] text-sm md:text-base" style={{fontFamily: '"Inter", sans-serif'}}>locations</div>
              </div>
            </div>
          </div>

          {/* Technology Slideshow */}
          <div className="relative w-full sm:max-w-4xl mx-auto py-2 overflow-hidden">
            
            {/* Scrolling content */}
            <div className="flex animate-scroll items-center">
              <div className="flex gap-8 sm:gap-12 px-4 sm:px-8 items-center">
                {[
                  { name: 'Python', icon: faPython, color: 'text-blue-400' },
                  { name: 'NodeJS', icon: faNodeJs, color: 'text-green-400' },
                  { name: 'Dart', icon: faFire, color: 'text-blue-300' },
                  { name: 'Bun', icon: faFire, color: 'text-orange-400' },
                  { name: 'Discord Bots', icon: faDiscord, color: 'text-purple-400' },
                  { name: 'Nginx', icon: faServer, color: 'text-green-300' }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-4 min-w-fit">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                      <FontAwesomeIcon 
                        icon={tech.icon} 
                        className={`text-lg sm:text-2xl ${tech.color}`}
                      />
                    </div>
                    <span className="text-[#A1A1AA] text-sm sm:text-lg font-semibold whitespace-nowrap" style={{fontFamily: '"Inter", sans-serif'}}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-8 sm:gap-12 px-4 sm:px-8 items-center">
                {[
                  { name: 'Python', icon: faPython, color: 'text-blue-400' },
                  { name: 'NodeJS', icon: faNodeJs, color: 'text-green-400' },
                  { name: 'Dart', icon: faFire, color: 'text-blue-300' },
                  { name: 'Bun', icon: faFire, color: 'text-orange-400' },
                  { name: 'Discord Bots', icon: faDiscord, color: 'text-purple-400' },
                  { name: 'Nginx', icon: faServer, color: 'text-green-300' }
                ].map((tech, index) => (
                  <div key={`duplicate-${index}`} className="flex items-center gap-2 sm:gap-4 min-w-fit">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                      <FontAwesomeIcon 
                        icon={tech.icon} 
                        className={`text-lg sm:text-2xl ${tech.color}`}
                      />
                    </div>
                    <span className="text-[#A1A1AA] text-sm sm:text-lg font-semibold whitespace-nowrap" style={{fontFamily: '"Inter", sans-serif'}}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Locations Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Locations</h2>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
              Servers are hosted in high-performance datacenters for the best experience and uptime, ensuring they are always closer to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:border-blue-500/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇺🇸</span>
                <h3 className="text-xl font-bold text-white">Dallas, United States</h3>
              </div>
              <div className="space-y-2 text-[#A1A1AA]">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>3.1 GHz, Gold, 2nd Gen</span>
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:border-blue-500/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇩🇪</span>
                <h3 className="text-xl font-bold text-white">Frankfurt, Germany</h3>
              </div>
              <div className="space-y-2 text-[#A1A1AA]">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Xeon Gold 6150</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Pricing Section */}
    <div id="pricing" className="relative py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1422] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Extremely fair pricing with no hidden fees. Scale your projects with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <p className="text-[#A1A1AA] text-sm mb-6">Perfect for testing and small projects</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-[#A1A1AA]">/month</span>
              </div>
              <ul className="space-y-3 text-left text-sm text-[#A1A1AA] mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1GB RAM (fair use)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  100% CPU (fair use)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  3MB/s bandwidth
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No server backup
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No databases
                </li>
              </ul>
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")} className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Micro Plan */}
          <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-500/50 rounded-xl p-8 transform transition-all shadow-lg shadow-blue-500/20">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Micro</h3>
              <p className="text-[#A1A1AA] text-sm mb-6">Perfect for beginners</p>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through text-lg">$0.50</span>
                  <span className="text-4xl font-bold text-white">$0.40</span>
                  <span className="text-[#A1A1AA]">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-left text-sm text-[#A1A1AA] mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  512MB RAM
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  40% CPU
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1GB NVMe Storage
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No backups
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No databases
                </li>
              </ul>
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")} className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-medium cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Small Plan */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Small</h3>
              <p className="text-[#A1A1AA] text-sm mb-6">Great for small projects</p>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through text-lg">$1.00</span>
                  <span className="text-4xl font-bold text-white">$0.80</span>
                  <span className="text-[#A1A1AA]">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-left text-sm text-[#A1A1AA] mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1GB RAM
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  75% CPU
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  2GB NVMe Storage
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1 Backup
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No databases
                </li>
              </ul>
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")} className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Medium Plan */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              BEST VALUE
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Medium</h3>
              <p className="text-[#A1A1AA] text-sm mb-6">Perfect for growing applications</p>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through text-lg">$2.00</span>
                  <span className="text-4xl font-bold text-white">$1.40</span>
                  <span className="text-[#A1A1AA]">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-left text-sm text-[#A1A1AA] mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1.5GB RAM
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  100% CPU
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  4GB NVMe Storage
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1 Backup
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1 Database
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  2 Ports
                </li>
              </ul>
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")} className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* Large Plan */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Large</h3>
              <p className="text-[#A1A1AA] text-sm mb-6">For growing applications</p>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through text-lg">$3.00</span>
                  <span className="text-4xl font-bold text-white">$2.00</span>
                  <span className="text-[#A1A1AA]">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-left text-sm text-[#A1A1AA] mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  2GB RAM
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  125% CPU
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  8GB NVMe Storage
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1 Backup
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  2 Databases
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  3 Ports
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          {/* XL Plan */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">XL</h3>
              <p className="text-[#A1A1AA] text-sm mb-6">High performance</p>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through text-lg">$5.00</span>
                  <span className="text-4xl font-bold text-white">$3.00</span>
                  <span className="text-[#A1A1AA]">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-left text-sm text-[#A1A1AA] mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  4GB RAM
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  175% CPU
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  16GB NVMe Storage
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  2 Backups
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  2 Databases
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  3 Ports
                </li>
              </ul>
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")} className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* 2XL Plan - Full Width */}
        <div className="mt-8">
          <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">2XL</h3>
                <p className="text-[#A1A1AA] text-sm">Maximum power for demanding applications</p>
              </div>
              <div className="md:w-1/3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through text-lg">$7.00</span>
                  <span className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">$5.00</span>
                  <span className="text-[#A1A1AA]">/month</span>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="grid grid-cols-2 gap-4 text-sm text-[#A1A1AA]">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    6GB RAM
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    200% CPU
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    32GB Storage
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    3 Backups
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    3 Databases
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    4 Ports
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")} className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all cursor-pointer">
                Get Started with 2XL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    </ClickSpark>
  );
}

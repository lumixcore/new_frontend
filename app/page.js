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

    <div className="min-h-screen bg-[#000d1a] text-[#E1DEE7]">
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

        {/* <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'url(/images/back.png)',
            // backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            willChange: 'transform'
          }}
        /> */}

        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ColorBends
            colors={["#6A2CB8", "#C33A50", "#00907E"]}
            rotation={0}
            speed={0.3}
            scale={0.8}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.6}
            noise={0.1}
            transparent
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0.5%,#080A0C_100%)]"/>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex flex-col xl:flex-row items-center justify-center p-6 gap-6 text-center">       
          <div className="flex-1 flex flex-col items-start justify-center text-left gap-6 mt-[90px] max-w-4xl mb-6 sm:mb-6 xl:mb-0">
            <h1 className="font-extrabold text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
               bg-linear-to-r from-[#98ffff] to-[#b66dff]
               bg-clip-text text-transparent">
              Simplest way to host code.
            </h1>

            <p className="text-[#d4d2e0] text-base sm:text-lg leading-relaxed max-w-3xl">
              LumixCore, a Jexactyl based hosting project built for developers. Upload your codebase, click run, and your application stays online forever. With fast performance, stable infrastructure, and an easy-to-use panel designed for everyone.
            </p>

            <div className="flex flex-wrap justify-start gap-4 w-full">
              <button onClick={() => window.open("https://panel.lumixcore.com", "_blank", "noopener,noreferrer")}
                className="px-6 py-3 rounded-full w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-3 bg-green-500/30 backdrop-blur-sm border border-green-500 text-white font-semibold shadow-lg hover:bg-green-500/50 hover:border-green-400 cursor-pointer transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faRocket} className="text-lg sm:text-xl md:text-2xl max-w-6" /> Open Panel
              </button>
              <button
                onClick={() => window.open("https://github.com/lumixcore", "_blank", "noopener,noreferrer")}
                className="px-6 py-3 rounded-full w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm border border-gray-500 text-white font-semibold shadow-lg hover:bg-black/50 hover:border-gray-400 cursor-pointer transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl md:text-2xl max-w-6" /> Github
              </button>
              <button
                onClick={() => window.open("https://discord.gg/2h8hBx8A52", "_blank", "noopener,noreferrer")}
                className="px-6 py-3 rounded-full w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center gap-3 bg-blue-500/30 backdrop-blur-sm border border-blue-500 text-white font-semibold shadow-lg hover:bg-blue-500/50 hover:border-blue-400 cursor-pointer transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faDiscord} className="text-lg sm:text-xl md:text-2xl max-w-6" /> Join Discord
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:mt-0 w-full">
            <FadeSlideshow 
              images={images} 
              className="lg:w-[900px] xl:w-full lg:h-[900px] xl:h-auto" 
            />
          </div>

        </div>

      </div>
    </div>
    </ClickSpark>
  );
}

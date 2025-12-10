// import Image from 'next/image';
'use client';

import CardNav from '../components/CardNav'
import ClickSpark from '../components/ClickSpark';
import ColorBends from '../components/ColorBends';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  const items = [
    {
      label: "Information",
      // bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "ToS", ariaLabel: "Terms of Service" },
        { label: "FuP", ariaLabel: "Fair Use Policy" },
        { label: "Privacy Policy", ariaLabel: "Privacy Policy" }
      ]
    },
    {
      label: "Links", 
      // bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Free Panel", ariaLabel: "Free Panel" },
        { label: "Paid Panel", ariaLabel: "Paid Panel" },
        { label: "Join Discord", ariaLabel: "Discord Server link" , href: "https://discord.gg/yourserver"}
      ]
    },
    {
      label: "Contact",
      // bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        // { label: "Twitter", ariaLabel: "Twitter" },
        // { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <ClickSpark sparkColor='#b1afb7' sparkSize={10} sparkRadius={17} sparkCount={6} duration={400}>

    <div className="min-h-screen bg-[#0f151a] text-[#E1DEE7]">
      {/* NAVBAR */}
      <CardNav
        logo="/images/logo.png"
        logoAlt="Company Logo"
        items={items}
        blurAmount = 'lg'
        menuColor="#b1afb7"
        // buttonBgColor="#171B23"
        buttonTextColor="#C7C5CD"
        ease="power3.out"
      />

      {/* PAGE CONTENT */}
      <div>

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
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 gap-6 text-center"> 
          <h1
            className="
              font-extrabold
              text-3xl      /* mobile */
              sm:text-5xl   /* small screens */
              md:text-6xl   /* tablets */
              lg:text-6xl   /* laptops */
              xl:text-6xl   /* big desktops */

              text-left     /* default left on mobile */
              sm:text-center /* center on larger screens */
              whitespace-nowrap
              tracking-wide">
            Code, Upload, Online.
          </h1>

          <p className="
              text-[#d4d2e0]
              max-w-3xl
              mt-4
              text-base
              sm:text-lg
              text-left     /* default left on mobile */
              sm:text-center /* center on larger screens */
              leading-relaxed">

            LumixCore, a Jexactyl based hosting platform built for developers. Upload your codebase, click run, 
            and your application stays online 24/7. Enjoy fast performance, stable infrastructure, 
            and an easy-to-use panel designed for both beginners and advanced users.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="px-6 py-3 rounded-full transition-all duration-300 ease-in-out
              bg-black/30
              w-full sm:w-auto sm:min-w-[180px]
              flex items-center justify-center gap-3
              backdrop-blur-sm
              overflow-hidden
              border border-solid border-gray-500
              text-white font-semibold shadow-lg
              hover:bg-black/50 hover:border-gray-400
              cursor-pointer ">
              <FontAwesomeIcon icon={faRocket} className="text-lg sm:text-xl md:text-2xl max-w-6" /> Open Panel
            </button>

            <button
              onClick={() => window.open("https://discord.gg/2h8hBx8A52", "_blank", "noopener,noreferrer")}
              className="px-6 py-3 rounded-full transition-all duration-300 ease-in-out
              bg-black/30
              w-full sm:w-auto sm:min-w-[180px]
              flex items-center justify-center gap-3
              backdrop-blur-sm
              overflow-hidden
              border border-solid border-gray-500
              text-white font-semibold shadow-lg
              hover:bg-black/50 hover:border-gray-400
              cursor-pointer ">
              <FontAwesomeIcon icon={faDiscord} className="text-lg sm:text-xl md:text-2xl max-w-6" /> Join Discord
            </button>
          </div>


        </div>
      </div>


    </div>
    </ClickSpark>
  );
}

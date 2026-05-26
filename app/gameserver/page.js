'use client';
import '../../styles/fonts.css';
import { useEffect } from 'react';

import AOS from "@/custom/aos";
import "@/custom/aos.css";
import CurvedDivider from '../../components/CurvedDivider';
import ClickSpark from '../../components/ClickSpark';

import Navbar from '../../components/Navbar';
import TopShade from '../../components/TopShade';
import Footer from '../../components/Footer';

import { FaMapMarkerAlt, FaShieldAlt, FaMicrochip } from "react-icons/fa";

export default function GameServer() {

  useEffect(() => {
    AOS.init();
  }, []);

  const pricingLink = '/containers#pricing-section';

  return (
    <ClickSpark sparkColor='#b095ffff' sparkSize={10} sparkRadius={17} sparkCount={6} duration={400}>
      <Navbar />
      <div className="bg-[#000313] overflow-hidden">
        <TopShade color="rgba(20, 35, 100, 0.9)" blur="30px" height={400} />

        {/* Hero Section */}
        <div className="flex flex-col max-w-6xl mx-auto mt-40 mb-5 p-5 w-full">
          <div className={`flex flex-col items-center text-center z-10`}>
            <h1 className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl tracking-wider" style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }} data-aos="fade-up" data-aos-duration="700">
              Game hosting powered by cloud containers
            </h1>
            <p className={`text-lg text-gray-400 mb-1 max-w-3xl text-left md:text-center`} style={{marginTop: '-10px'}} data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
              Run your game server inside the same lightweight cloud containers we use for our standard hosting. No OS hassle, full panel control, and the same flexible container plans that support games, bots, and apps.
            </p>
            <a
              className="text-cyan-400 no-underline hover:opacity-90 text-sm font-medium cursor-pointer mb-8"
              data-aos="fade" data-aos-duration="1000" data-aos-delay="900"
              style={{ textDecoration: 'none' }}
              onClick={() => {
                const target = document.getElementById('what-are-cloud-containers');
                if (!target) return;
                const offset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }}
            >
              What are cloud containers?
            </a>
          </div>
        </div>


        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center items-center gap-5 mt-12 mr-5 ml-5 mb-5 flex-col sm:flex-row">
            <div className="flex flex-col items-center text-center p-4 max-w-sm " data-aos="fade-up" data-aos-duration="700" data-aos-delay="600" data-aos-offset="5">
              <div className="mb-6 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-cyan-500 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Server locations</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our game servers can be hosted in 2 different locations, in Dallas, US and Frankfurt, Germany.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 max-w-sm " data-aos="fade-up" data-aos-duration="700" data-aos-delay="800" data-aos-offset="5">
              <div className="mb-6 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-cyan-500 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Ultra affordable</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our game servers are extremely affordable. Making it ideal for users who want to host multiple projects at a low cost.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 max-w-sm " data-aos="fade-up" data-aos-duration="700" data-aos-delay="1000" data-aos-offset="5">
              <div className="mb-6 rounded-full flex items-center justify-center">
                <FaMicrochip className="text-cyan-500 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Docker Virtualization</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We use Docker's lightweight virtualization. Each game server runs in its own isolated environment. No VM bloat, just pure efficiency.
              </p>
            </div>
        </div>

        {/* Colored, slightly thicker */}
        <CurvedDivider 
          lines={5} 
          lineGap={70} 
          color="#6263B5" 
          opacity={0.2} 
          strokeWidth={2} 
          curveDepth={50}
        />

        {/* Payment Methods */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="40" className="relative mx-auto px-6 mt-2 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-500 text-xs uppercase tracking-widest">Accepted payment methods</span>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                <span className="text-gray-300 text-xs">Card</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                <svg className="w-4 h-4 text-[#009cde]" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/></svg>
                <span className="text-gray-300 text-xs">PayPal</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                <svg className="w-4 h-4 text-[#f7931a]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>
                <span className="text-gray-300 text-xs">Crypto</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
            <p className="text-white text-lg font-semibold mb-4">Our cloud containers can host absolutely anything, including <span className="text-cyan-400">games.</span></p>
            <p className="text-sm text-gray-400 mb-6">If you want to host a game server, please see our cloud containers pricing page. <span className="text-cyan-500">Make sure you choose the correct plan based on your game server's resource demands (CPU, RAM, storage).</span></p>
            <a href={pricingLink} className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0c1d31] text-white border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-200 font-semibold">
              View Cloud Containers Pricing
            </a>
          </div>
        </div>

        {/* What are cloud containers? */}
        <section id="what-are-cloud-containers" className="mt-30 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="max-w-2xl mb-10">
              <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent to-purple-500/20 relative font-semibold mb-2"
                style={{
                  background: 'linear-gradient(rgb(13, 31, 108, 0.4), rgba(0, 0, 0, 0)) padding-box, linear-gradient(rgba(168, 85, 247, 0.5), transparent) border-box',
                  border: '1px solid transparent',
                }} data-aos="fade-up" data-aos-duration="700">
                What is this?
              </span>
              <h2 className="text-3xl text-white mb-1 mt-5" style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }}>
                What are cloud containers?
              </h2>
              <p className="text-sm text-gray-400">
                Think of them as lightweight, isolated boxes for your apps. 
                You don't get root access, but you get <span className="text-cyan-400">full control</span> through our panel to configure, deploy, and manage everything. It's like having a mini server for each project. You can host anything from a simple website to a complex bot or even a game server.
              </p>
            </div>

            {/* Panel Features — modern chip grid */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
                Included in every container
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {[
                  { icon: '⌨️', label: 'Console Output' },
                  { icon: '📁', label: 'File Explorer' },
                  { icon: '🌐', label: 'Network Config' },
                  { icon: '⚙️', label: 'Startup Editor' },
                  { icon: '💾', label: 'Backups' },
                  { icon: '👥', label: 'Sub-users' },
                  { icon: '🗄️', label: 'Databases' },
                  { icon: '📈', label: 'Resource Metrics' },
                ].map((feat, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200 group"
                  >
                    <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{feat.icon}</span>
                    <span className="text-sm text-gray-300 font-medium">{feat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps — equal height cards with background numbers */}
            <div>
              <div className="flex flex-col mb-5">
                <h3 className="text-xl md:text-2xl text-white font-medium" style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }}>
                  Deploy a Discord bot in 4 steps
                </h3>
                <span className="text-sm text-gray-500 font-mono">
                  Example workflow
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
                {[
                  {
                    num: '01',
                    title: 'Create container',
                    desc: 'Choose Dallas or Frankfurt, pick your resources, and spin up a new container in one click.',
                    color: 'from-cyan-500/20 to-blue-500/20',
                    text: 'text-cyan-400',
                  },
                  {
                    num: '02',
                    title: 'Upload files',
                    desc: 'Open the Files tab, drag & drop your bot code, or connect a Git repository to sync automatically.',
                    color: 'from-purple-500/20 to-pink-500/20',
                    text: 'text-purple-400',
                  },
                  {
                    num: '03',
                    title: 'Configure',
                    desc: 'Set Python 3.14 or any version as your runtime, select main.py as the startup file, and add discord.py to packages.',
                    color: 'from-amber-500/20 to-orange-500/20',
                    text: 'text-amber-400',
                  },
                  {
                    num: '04',
                    title: 'Hit start',
                    desc: 'Press the start button. Your container boots in under 3 seconds and your bot goes online instantly.',
                    color: 'from-emerald-500/20 to-green-500/20',
                    text: 'text-emerald-400',
                  },
                ].map((step, i, arr) => (
                  <div key={i} className="relative group">
                    <div className="relative h-full p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden">
                      
                      {/* Giant watermark number */}
                      <span 
                        className="absolute top-2 right-3 text-5xl md:text-6xl font-bold text-white/[0.03] select-none pointer-events-none"
                        style={{ fontFamily: 'Nohemi, sans-serif' }}
                      >
                        {step.num}
                      </span>

                      {/* Colored step indicator */}
                      <div className={`relative z-10 w-12 h-12 mb-5 rounded-xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center`}>
                        <span className={`text-lg font-bold ${step.text}`}>{step.num}</span>
                      </div>

                      <h4 className="relative z-10 text-white font-semibold text-lg mb-2">
                        {step.title}
                      </h4>
                      <p className="relative z-10 text-sm text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing statement */}
            <div className="mt-10 p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-r from-cyan-500/5 via-white/[0.02] to-purple-500/5 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-base md:text-lg text-gray-300">
                  That's it. <span className="text-white font-semibold">No OS hassle.</span> Just configure and run.
                </p>
              </div>
              <button 
                onClick={() => window.location.href = 'https://panel.lumixcore.com/auth/register'}
                className="shrink-0 px-6 py-2.5 text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors font-medium"
              >
                Try it free →
              </button>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </ClickSpark>
  );
}

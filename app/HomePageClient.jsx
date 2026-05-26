'use client';
import '../styles/fonts.css';
import {useEffect} from 'react';

import AOS from "@/custom/aos";
import "@/custom/aos.css";
import ClickSpark from '../components/ClickSpark';

import Navbar from '../components/Navbar';
import { ProductsGrid } from '../components/ProductsGrid';
import { LogoMarquee3D } from '../components/LogoMarquee3D';
import { FAQ } from '../components/FAQ';
import Footer from '../components/Footer';

import { TbServerBolt } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import { LuLayoutDashboard, LuCpu, LuRocket } from "react-icons/lu";

export default function HomePageClient() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ClickSpark sparkColor='#b095ffff' sparkSize={10} sparkRadius={17} sparkCount={6} duration={400}>
      <Navbar />
      <div className="min-h-screen bg-[#000313] overflow-hidden flex flex-col items-center justify-center">

        {/* Half Purple Circle Shade in Center-Top */}
        <div className="hidden xl:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
        <div className="hidden lg:block xl:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1100px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
        <div className="hidden md:block lg:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[950px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
        <div className="hidden sm:block md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[950px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
        <div className="hidden min-[450px]:block min-[639px]:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[750px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
        <div className="block min-[449px]:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[550px] bg-linear-to-b from-purple-600 to-transparent rounded-full blur-3xl"></div>
        
        {/* Graph Texture Box with Sparse Random Dots */}
        <div className="absolute top-0 z-0 w-full h-120" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.35) 1px, transparent 1px),
            radial-gradient(circle at 65% 15%, rgba(255,255,255,0.25) 1px, transparent 1px),
            radial-gradient(circle at 40% 45%, rgba(255,255,255,0.3) 1px, transparent 1px),
            radial-gradient(circle at 85% 35%, rgba(255,255,255,0.28) 1px, transparent 1px),
            radial-gradient(circle at 25% 65%, rgba(255,255,255,0.32) 1px, transparent 1px),
            radial-gradient(circle at 75% 55%, rgba(255,255,255,0.26) 1px, transparent 1px),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
            radial-gradient(circle at 10% 90%, rgba(255,255,255,0.24) 1px, transparent 1px),
            radial-gradient(circle at 90% 70%, rgba(255,255,255,0.29) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '300px 300px, 280px 280px, 320px 320px, 290px 290px, 310px 310px, 285px 285px, 305px 305px, 295px 295px, 315px 315px, 30px 30px, 30px 30px',
          maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          animation: 'smoothFloat 20s linear infinite'
        }}></div>
        <style jsx>{`
          @keyframes smoothFloat {
            0% {background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;}
            100% {background-position: 0 -300px, 0 -280px, 0 -320px, 0 -290px, 0 -310px, 0 -285px, 0 -305px, 0 -295px, 0 -315px, 0 0, 0 0;}
          }
          @keyframes floatDots {
            from {background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 0 0;}
            to {background-position: 0 -200px, 0 -180px, 0 -220px, 0 -190px, 0 -210px, 0 -195px, 0 -185px, 0 -205px, 0 0;}
          }
        `}</style>



        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center pt-25 sm:mt-0 min-h-screen">
          <div className={`flex flex-col items-center justify-center text-center px-8 z-10`}>
            <span className="text-cyan-500 text-sm p-2 rounded-full bg-linear-to-t from-transparent to-purple-500/20 relative font-semibold mb-2"
              style={{
                background: 'linear-gradient(rgb(13, 31, 108, 0.4), rgba(0, 0, 0, 0)) padding-box, linear-gradient(rgba(168, 85, 247, 0.5), transparent) border-box',
                border: '1px solid transparent',
              }} data-aos="fade-up" data-aos-duration="700">
              Simplest platform to host your projects.
            </span>
            <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 max-w-4xl tracking-wider`} 
              style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }} data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
              Lumixcore
            </h1>
            <p className={`text-lg text-gray-400 mb-8 max-w-3xl text-left sm:text-center`} style={{marginTop: '-10px'}} data-aos="fade-up" data-aos-duration="700" data-aos-delay="450">
              Deploy your projects the simple way with <span className='text-cyan-500'>cloud containers.</span> No OS, no overhead — just upload, configure, and go live for <span className='text-cyan-300'>free.</span> Paid plans start at <span className='text-cyan-300'>$0.65/mo.</span> Full <span className='text-cyan-500'>root VPS</span> and other cool stuff available if you need them, at a fair and affordable price.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 w-full sm:min-w-[200px] justify-center`} data-aos="fade-up" data-aos-duration="700" data-aos-delay="550">
              <button className="px-8 py-3 bg-linear-to-b from-purple-500 to-purple-900 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-800/50 flex items-center justify-center group" onClick={() => window.location.href = 'https://panel.lumixcore.com/auth/register'}>
                Let&apos;s start
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <button className="px-8 py-3 text-white bg-[#0b1828] rounded-full transition-all border border-cyan-500/20 hover:border-cyan-500/40 flex items-center justify-center group" onClick={() => {
                const productsSection = document.getElementById('products-section');
                const offset = 80; // Scroll 100px above the section
                const elementPosition = productsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }}>
                Our products
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Stats Section */}
          <div className={`mt-20 sm:mt-30 flex flex-wrap justify-center items-center gap-5 mr-5 ml-5 mb-5 flex-col sm:flex-row`} data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
            <div className="text-left p-4 min-w-[350px] border-gray-900 border rounded-lg transition-all">
              <div className="text-sm text-gray-400 mb-2">Used by</div>
              <div className="text-6xl text-white" style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }}>1500+</div>
              <div className="text-lg text-gray-300">Developers</div>
              <div className="text-sm text-gray-500">Building with lumixcore</div>
            </div>
            <div className="text-left p-4 min-w-[350px] border-gray-900 border rounded-lg transition-all">
              <div className="text-sm text-gray-400 mb-2">Available in</div>
              <div className="text-6xl text-white" style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }}>2</div>
              <div className="text-lg text-gray-300">Locations</div>
              <div className="text-sm text-gray-500">Dallas, US & Frankfurt, Germany</div>
            </div>
            <div className="text-left p-4 min-w-[350px] border-gray-900 border rounded-lg transition-all">
              <div className="text-sm text-gray-400 mb-2">Running</div>
              <div className="text-6xl text-white" style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }}>200+</div>
              <div className="text-lg text-gray-300">Cloud containers</div>
              <div className="text-sm text-gray-500">Hosting cool projects</div>
            </div>
          </div>
        </div>



        {/* features section */}
        <div id="features-section" className={`relative w-full mt-30`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className={`text-center mb-10`} data-aos="fade-up" data-aos-duration="700">
              <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold"
                style={{
                  background: 'linear-gradient(#0d1f6c4a, #0000) padding-box, linear-gradient(to bottom, rgba(168, 85, 247, 0.5), transparent) border-box',
                  border: '1px solid transparent',
                }}>
                What&apos;s Different?
              </span>
              <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" className="text-3xl md:text-5xl text-white mb-1 mt-5" style={{fontFamily: 'Nohemi, sans-serif', fontWeight: '300'}}>A cleaner way to host.</h2>
              <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="400" className="text-gray-400 text-[15px] max-w-2xl mx-auto">See what makes us different from other hosting providers.</p>
            </div>
            <div className={`space-y-6`}>
              {/* First Row - 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div data-aos="fade-up" data-aos-duration="700" className="md:col-span-2 rounded-2xl bg-gradient-to-b from-[#111b45] via-[#0c133099] to-[#000920] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-blue-400/10 flex items-center justify-center">
                      <TbServerBolt className={`text-blue-400 text-2xl`}/>
                    </div>
                    <h3 className="text-white font-semibold text-lg">Simple Hosting, No Matter the Project</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Whether your project is simple or complex, hosting shouldn't feel complicated. With our cloud containers, you don't have to manage a full operating system or deal with VPS setup. Just create a server, upload your code, and run it. That's it.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" className="rounded-2xl bg-gradient-to-br from-[#111b45] via-[#0c133099] to-[#000920] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <FiDollarSign className={`text-blue-400 text-2xl`}/>
                    </div>
                    <h3 className="text-white font-semibold text-lg">Ultra Affordable</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Start hosting from just $0.65/month. Powerful cloud containers and other products at prices that are hard to beat.</p>
                </div>
              </div>
              {/* Second Row - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div data-aos="fade-up" data-aos-duration="700" className="rounded-2xl bg-gradient-to-br from-[#111b45] via-[#0c133099] to-[#000920] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <LuCpu className={`text-blue-400 text-2xl`}/>
                    </div>
                    <h3 className="text-white font-semibold text-lg">Powerful Hardware</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Dallas is powered by Intel Xeon Gold 6248R, while Frankfurt runs on Intel Xeon E5-2697 v2. Both deliver the top-tier performance your projects deserve.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" className="rounded-2xl bg-gradient-to-br from-[#111b45] via-[#0c133099] to-[#000920] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <LuLayoutDashboard className={`text-blue-400 text-2xl`}/>
                    </div>
                    <h3 className="text-white font-semibold text-lg">Better Panel</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">A heavily customized panel powered by React, Go, and PHP. Designed for simplicity, clean UI, easy management, zero learning curve.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="400" className="rounded-2xl bg-gradient-to-br from-[#111b45] via-[#0c133099] to-[#000920] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <LuRocket className={`text-blue-400 text-2xl`}/>
                    </div>
                    <h3 className="text-white font-semibold text-lg">Free to Start</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-6">Try the platform with free plans, explore the system, and upgrade only when you’re ready or if you need more power.</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Products Section */}
        <div className="relative w-full mt-20 overflow-hidden rounded-t-[40px]" id="products-section">          
          {/* Top-Left Corner Glow */}
          <div data-aos="fade-up" data-aos-duration="1000"
            className="absolute top-0 left-0 pointer-events-none transition-opacity duration-1000 z-10"
            style={{
              width: 'clamp(400px, 20vw, 800px)',
              height: 'clamp(200px, 10vw, 400px)',
              background: 'radial-gradient(circle at 0% 0%, rgba(0, 40, 255, 1) 0%, rgba(0, 40, 255, 0.7) 30%, rgba(0, 40, 255, 0.3) 60%, transparent 85%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            }}>
          </div>
          {/* Top-Right Corner Glow */}
          <div data-aos="fade-up" data-aos-duration="1000"
            className="absolute top-0 right-0 pointer-events-none transition-opacity duration-1000 z-10"
            style={{
              width: 'clamp(400px, 20vw, 800px)',
              height: 'clamp(200px, 10vw, 400px)',
              background: 'radial-gradient(circle at 100% 0%, rgba(0, 40, 255, 1) 0%, rgba(0, 40, 255, 0.7) 30%, rgba(0, 40, 255, 0.3) 60%, transparent 85%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            }}>
          </div>
          {/* Top Center Glow (Horizontal Flood) */}
          <div data-aos="fade-up" data-aos-duration="1000"
            className="absolute inset-x-0 top-0 pointer-events-none transition-opacity duration-1000 z-10"
            style={{
              height: 'clamp(150px, 8vw, 300px)',
              background: 'radial-gradient(ellipse 160% 100% at 50% 0%, rgba(0, 40, 255, 0.8) 0%, rgba(0, 40, 255, 0.5) 40%, transparent 80%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
            }}>
          </div>
          {/* Grid + stars overlay */}
          <div data-aos="fade-up" data-aos-duration="1000" className="absolute inset-x-0 top-0 z-0 h-120 pointer-events-none"
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
            }}>
          </div>
          {/* content */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="relative z-10 text-center mb-12 mt-5">
            <span className={`text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold`}
              style={{
                background: 'linear-gradient(#0d1f6c3b, #0000) padding-box, linear-gradient(to bottom, rgba(168, 85, 247, 0.5), transparent) border-box',
                border: '1px solid transparent',
              }}>
              All you need in one place
            </span>
            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className={`text-3xl md:text-5xl text-white mb-4 mt-5`} style={{fontFamily: 'Nohemi, sans-serif', fontWeight: '300'}}>Our products</h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className={`text-gray-400 text-[15px]`}>Browse our products and choose your hosting solution for your project.</p>
          </div>
          <ProductsGrid />

          {/* Payment Methods */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="30" className="relative mx-auto px-6 mt-1 pb-4">
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
        </div>



        {/* Locations Section */}
        <div className="relative w-full mt-20" id='locations-section'>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-gradient-to-t from-transparent relative font-semibold mb-4 inline-block"
                style={{
                background: 'linear-gradient(#0d1f6c4a, #0000) padding-box, linear-gradient(to bottom, rgba(168, 85, 247, 0.5), transparent) border-box',
                border: '1px solid transparent',
                }}
                data-aos="fade-up" data-aos-duration="1000" data-aos-offset="30">
                Performance where you need it
              </span>
              <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="30" className="text-3xl md:text-5xl text-white mb-3" style={{fontFamily: 'Nohemi, sans-serif', fontWeight: '300'}}>Our locations</h2>
              <p  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-offset="30" className="text-gray-400 text-[15px] mx-auto">Tier III datacenter in both locations, running on high quality hardware for the best experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="30" className="purple-glow-card">
                <div className="flex flex-col items-start gap-2 mb-2">
                  <h3 className="text-white font-semibold text-xl">Dallas, US</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">Powerful datacenter powered by 3.1GHz 2nd Gen Cascade CPUs, solid security, and a strong network. Absolutely <span className="text-cyan-200">zero downtime</span> this year and very low ping to major online services and platforms.</p>
                <p className="text-[#695f97] text-[13px] leading-relaxed">
                  3.1 Ghz Intel Xeon 2nd Gen Cascade CPUs・DDoS protection・Tier III・N+1 power Redundancy・N+2 Cooling・99.99% avg. uptime・NVMe raid
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="30" className="purple-glow-card">
                <div className="flex flex-col items-start gap-2 mb-2">
                  <h3 className="text-white font-semibold text-xl">Frankfurt, DE</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">Powerful European datacenter. One of the world's largest internet exchange points. Used by thousands of people worldwide. Ultra-low latency under 1ms to DE-CIX, stable infrastructure with 3.2 Tbit DDoS protection.</p>
                <p className="text-[#695f97] text-[13px] leading-relaxed">
                  2.7 Ghz Intel Xeon 6150 CPUs・3.2 Tbit DDoS protection・99.99% avg. uptime・NVMe Raid・Tier III・N+1 Power Redundancy・Advanced cooling
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* 3D Logo Marquee Section */}
        <div className={`w-full mt-20 relative`}>
          <div className={`text-center mb-5`} data-aos="fade-up" data-aos-duration="700">
            <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold"
              style={{
                background: 'linear-gradient(#0d1f6c4a, #0000) padding-box, linear-gradient(to bottom, rgba(168, 85, 247, 0.5), transparent) border-box',
                border: '1px solid transparent',
              }}>
              Your Project, Your Stack
            </span>
          </div>
          <div className={`text-center mb-12`}>
            <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200" className="text-3xl md:text-5xl text-white mb-3" style={{fontFamily: 'Nohemi, sans-serif', fontWeight: '300'}}>Whatever stack you choose.</h2>
            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="400" className="text-gray-400 text-[15px]">With our cloud containers, run absolutely anything, from game servers and Discord bots to any programming language you prefer.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
            <LogoMarquee3D />
          </div>
        </div>



        {/* FAQ Section */}
        <div className="relative w-full mt-20" id="faq-section">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span data-aos="fade-up" data-aos-duration="900" className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent relative font-semibold"
                style={{
                  background: 'linear-gradient(#0d1f6c4a, #0000) padding-box, linear-gradient(to bottom, rgba(168, 85, 247, 0.5), transparent) border-box',
                  border: '1px solid transparent',
                }}>
                Frequently Asked Questions
              </span>
              <h2 data-aos="fade-up" data-aos-duration="900" className="text-3xl md:text-5xl text-white mb-1 mt-5" style={{fontFamily: 'Manrope, sans-serif'}}>Got Questions?</h2>
              <p data-aos="fade-up" data-aos-duration="900" data-aos-delay="250" className="text-gray-400 text-[15px] max-w-2xl mx-auto">Find answers to common questions about Lumixcore.</p>
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
                  answer: "We currently operate in 2 locations, in Dallas, US and Frankfurt, Germany. We are planning to expand more in the future."
                },
                {
                  question: "What are your payment methods?",
                  answer: "Currently we accept payments via card, Paypal and crypto. If you want to use another payment method, please contact us."
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

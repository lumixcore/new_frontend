'use client';
import '../../styles/fonts.css';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import AOS from "@/custom/aos";
import "@/custom/aos.css";
import CurvedDivider from '../../components/CurvedDivider';
import ClickSpark from '../../components/ClickSpark';

import Navbar from '../../components/Navbar';
import PricingCard from '../../components/PricingCard';
import TopShade from '../../components/TopShade';
import Footer from '../../components/Footer';

import { FaMapMarkerAlt, FaShieldAlt, FaMicrochip } from "react-icons/fa";

export default function KvmrootServerPlansUS() {
  const router = useRouter();
  const [setIsVisible] = useState(false);
  const pricingRef = useRef(null);

  useEffect(() => {
    AOS.init();
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

  const kvmRootserverPlans = [
    {
      planName: "KVM Rootserver Base",
      price: "4.5",
      currency: "$",
      billingPeriod: "quarterly",
      features: [
        { resource: "CPU", value: "2 vCores" },
        { resource: "RAM", value: "4GB" },
        { resource: "Storage", value: "40GB NVMe" },
        { resource: "IPv4", value: "1 included" },
        { resource: "IPv6", value: "1x /64 included" },
        { resource: "Custom ISOs", value: "Not included" },
        { resource: "Snapshot", value: "1 included" }
      ]
    },
    {
      planName: "KVM Rootserver Medium",
      price: "8",
      currency: "$",
      features: [
        { resource: "CPU", value: "4 vCores" },
        { resource: "RAM", value: "10GB" },
        { resource: "Storage", value: "80GB NVMe" },
        { resource: "IPv4", value: "1 included" },
        { resource: "IPv6", value: "1x /64 included" },
        { resource: "Custom ISOs", value: "Self-serve" },
        { resource: "Snapshot", value: "1 included" }
      ]
    },
    {
      planName: "KVM Rootserver Large",
      price: "10",
      currency: "$",
      features: [
        { resource: "CPU", value: "4 vCores" },
        { resource: "RAM", value: "14GB" },
        { resource: "Storage", value: "100GB NVMe" },
        { resource: "IPv4", value: "1 included" },
        { resource: "IPv6", value: "1x /64 included" },
        { resource: "Custom ISOs", value: "Self-serve" },
        { resource: "Snapshot", value: "1 included" }
      ]
    },
    {
      planName: "KVM Rootserver XL",
      price: "18.20",
      currency: "$",
      features: [
        { resource: "CPU", value: "6 vCores" },
        { resource: "RAM", value: "24GB" },
        { resource: "Storage", value: "150GB NVMe" },
        { resource: "IPv4", value: "1 included" },
        { resource: "IPv6", value: "1x /64 included" },
        { resource: "Custom ISOs", value: "Self-serve" },
        { resource: "Snapshot", value: "2 included" }
      ]
    },
    {
      planName: "KVM Rootserver 2XL",
      price: "28",
      currency: "$",
      features: [
        { resource: "CPU", value: "8 vCores" },
        { resource: "RAM", value: "40GB" },
        { resource: "Storage", value: "200GB NVMe" },
        { resource: "IPv4", value: "1 included" },
        { resource: "IPv6", value: "1x /64 included" },
        { resource: "Custom ISOs", value: "Self-serve" },
        { resource: "Snapshot", value: "3 included" }
      ]
    },
    {
      planName: "KVM Rootserver Mega",
      price: "40",
      currency: "$",
      features: [
        { resource: "CPU", value: "10 vCores" },
        { resource: "RAM", value: "56GB" },
        { resource: "Storage", value: "300GB NVMe" },
        { resource: "IPv4", value: "1 included" },
        { resource: "IPv6", value: "1x /64 included" },
        { resource: "Custom ISOs", value: "Self-serve" },
        { resource: "Snapshot", value: "3 included" }
      ]
    }
  ];

  return (
    <ClickSpark sparkColor='#b095ffff' sparkSize={10} sparkRadius={17} sparkCount={6} duration={400}>
      <Navbar />
      <div className="bg-[#000313] overflow-hidden">
        <TopShade color="rgba(20, 35, 100, 0.9)" blur="30px" height={400} />

        {/* Hero Section */}
        <div className="flex flex-col max-w-6xl mx-auto mt-40 mb-5 p-5 w-full">
          <div className={`flex flex-col items-center text-center z-10`}>
            <h1 className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl tracking-wider" style={{ fontFamily: 'Nohemi, sans-serif', fontWeight: '300' }} data-aos="fade-up" data-aos-duration="700">
              US KVM Rootservers
            </h1>
            <p className={`text-lg text-gray-400 mb-8 max-w-3xl text-left md:text-center`} style={{marginTop: '-10px'}} data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
              Powered by <span className="text-cyan-500">3.1 GHz Intel Xeon 2nd Gen Cascade Lake processors</span> and hosted in Dallas, US data center. You get full root access, dedicated CPU cores, RAM, and SSD storage for true bare metal performance with virtualization flexibility. Plans start at only <span className="text-cyan-300">$4.5</span> per month.
            </p>
          </div>
          <div className={`grid grid-cols-1 min-[570px]:grid-cols-2 gap-4 w-full max-w-lg mx-auto`} data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            <button className="flex items-center justify-center group px-8 py-3 bg-linear-to-b from-purple-600 to-purple-900 text-white rounded-full hover:opacity-90 transition-all shadow-lg shadow-purple-800/50" onClick={() => {
              const productsSection = document.getElementById('pricing-section');
              const offset = 80;
              const elementPosition = productsSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }}>
              Go to pricing
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="px-8 py-3 text-white bg-[#0b1828] rounded-full transition-all border border-cyan-500/20 hover:border-cyan-500/40 flex items-center justify-center group" onClick={() => router.push('/kvmservers-de')}>
              See Frankfurt Plans
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>


        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center items-center gap-5 mt-12 mr-5 ml-5 mb-5 flex-col sm:flex-row">
            <div className="flex flex-col items-center text-center p-4 max-w-sm " data-aos="fade-up" data-aos-duration="700" data-aos-delay="600" data-aos-offset="5">
              <div className="mb-6 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-cyan-500 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">US location</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Host your KVM Rootservers in Dallas, US. Our infrastructure had zero downtime this year. While providing low latency to major online platforms.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 max-w-sm " data-aos="fade-up" data-aos-duration="700" data-aos-delay="800" data-aos-offset="5">
              <div className="mb-6 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-cyan-500 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Ultra affordable</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our KVM Rootservers are extremely affordable. You get full root access, dedicated resources, and bare metal performance without breaking the bank.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 max-w-sm " data-aos="fade-up" data-aos-duration="700" data-aos-delay="1000" data-aos-offset="5">
              <div className="mb-6 rounded-full flex items-center justify-center">
                <FaMicrochip className="text-cyan-500 text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">KVM Virtualization</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                KVM virtualization gives you fully isolated root servers with dedicated CPU, RAM, and storage on our US hardware. Full root access and bare metal performance.
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

        {/* Pricing Section */}
        <div className="w-full mt-30 overflow-hidden rounded-t-[40px]" id="pricing-section">
          <div className={`max-w-[85rem] mx-auto px-6`}>
            <div className="text-left mb-10 pt-2">
              <span className="text-cyan-500 text-sm p-2 px-5 rounded-full bg-linear-to-t from-transparent to-purple-500/20 relative font-semibold mb-2"
                style={{
                  background: 'linear-gradient(rgb(13, 31, 108, 0.4), rgba(0, 0, 0, 0)) padding-box, linear-gradient(rgba(168, 85, 247, 0.5), transparent) border-box',
                  border: '1px solid transparent',
                }} data-aos="fade-up" data-aos-duration="700">
                US Plans
              </span>
              <h2 className="text-3xl text-white mb-1 mt-5" style={{fontFamily: 'Nohemi, sans-serif', fontWeight: '300'}}>KVM Rootservers pricing</h2>
              <p className="text-sm text-gray-400 leading-6 max-w-2xl">See our KVM Rootserver pricing. All plans include 1x IPv4, 1x /64 IPv6, 10 Gbps DDoS protection, 3.1 GHz Intel Xeon 2nd Gen Cascade Lake CPU, NVMe drives, and the SolusVM 2 control panel. Delivered within 24 hours.</p>
            </div>
            <div className="grid grid-cols-1 min-[570px]:grid-cols-2 min-[830px]:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
              {kvmRootserverPlans.map((plan, index) => (
                <div key={index} className="w-full min-[570px]:max-w-sm mb-5">
                  <PricingCard
                    planName={plan.planName}
                    price={plan.price}
                    currency={plan.currency || "$"}
                    billingPeriod={plan.billingPeriod}
                    features={plan.features}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </ClickSpark>
  );
}

'use client';
import {useEffect} from 'react';

import { TbDeviceGamepad2, TbBrandNextcloud  } from "react-icons/tb";
import { FiServer } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { SiHackthebox } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    name: "Cloud Containers",
    description: "Easy-to-use isolated containers with zero OS overhead. Upload your code, configure, and hit deploy. Available in the US and Germany.",
    icon: SiHackthebox,
    price: "0",
    currency: "$",
    bestSelling: true,
    link: "/containers"
  },
  {
    name: "KVM Root Servers (Germany)",
    description: "Intel Xeon 6150 2.7 Ghz — KVM root servers in Frankfurt, Germany. The heart of Europe, lowest latency across the EU.",
    icon: FiServer,
    price: "4.30",
    currency: "$",
    bestSelling: false,
    link: "/kvmservers-de"
  },
  {
    name: "IPv6 KVM Root Servers (Germany)",
    description: "Affordable IPv6-only KVM root servers in Frankfurt. Reliable performance, full root access.",
    icon: FaNetworkWired,
    price: "3.30",
    currency: "$",
    bestSelling: false,
    link: "/kvmservers-ipv6-de"
  },
  {
    name: "KVM Root Servers (US)",
    description: "Intel Xeon 2nd Gen Cascade 3.1 GHz — Full root KVM servers in Dallas, US. Super stable, lowest ping in North America.",
    icon: FiServer,
    price: "4.50",
    currency: "$",
    bestSelling: false,
    link: "/kvmservers-us"
  },
  {
    name: "Game Hosting",
    description: "Host any games with our cloud containers in the US and Germany, ensuring super low ping for both sides.",
    icon: TbDeviceGamepad2,
    price: "0.65",
    currency: "$",
    bestSelling: false,
    link: "/gameserver"
  },
  {
    name: "Web Hosting",
    description: "Host static websites with our cloud containers in the US and Germany, ensuring fast load times for both sides.",
    icon: CgWebsite,
    price: "0.65",
    currency: "$",
    bestSelling: false,
    link: "/webhosting"
  }
];

const ProductCard = ({ product }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="700" className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
      product.bestSelling
        ? 'border-1 border-purple-500/20 bg-gradient-to-b from-[#0c133099] via-[#0c133099] to-[#071a50]'
        : 'bg-gradient-to-b from-[#0c133099] via-[#0c133099] to-[#071230] hover:border-white/15'
      }`}>
      {product.bestSelling && (
        <div className="absolute -top-3 left-6 px-3 py-0.5 bg-gradient-to-r from-purple-800 to-purple-900 text-white text-[11px] font-bold rounded-full tracking-wide shadow-lg shadow-purple-500/30">
          MOST POPULAR
        </div>
      )}

      {/* Icon */}
      <div className={`h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3`}>
        <product.icon className={`text-blue-400 text-2xl`} />
      </div>

      {/* Name */}
      <h3 className="text-white font-semibold text-[15px] leading-tight mb-3">{product.name}</h3>

      {/* Description */}
      <p className="text-gray-400 text-[14.4px] leading-relaxed mb-5 flex-1">{product.description}</p>

      {/* Starting from */}
      <p className="text-gray-500 text-xs mb-0.5">Starting from</p>
      <p className="text-cyan-300 text-xl font-semibold mb-4">
        {product.currency}{product.price}<span className="text-gray-400 text-sm font-normal">/mo</span>
      </p>

      {/* Button */}
      <a
        href={product.link}
        className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-between transition-colors duration-200 ${
          product.bestSelling
            ? 'bg-gradient-to-r from-purple-800/60 to-purple-900/60 text-white hover:from-purple-800/80 hover:to-purple-900/80 shadow-lg shadow-purple-500/20'
            : 'border border-purple-200/10 text-gray-300 hover:text-white hover:border-purple-200/15 hover:bg-purple-300/5'
        }`}
      >
        <span>See plans</span>
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export function ProductsGrid() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
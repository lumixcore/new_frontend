'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';

const PricingCard = ({ 
  planName, 
  price, 
  originalPrice, 
  features, 
  extraClasses = "" 
}) => {
  return (
    <div className={`border border-purple-800/10 rounded-[30px] p-6 relative overflow-hidden min-h-[500px] ${extraClasses}`}
      style={{
        background: 'radial-gradient(circle at top left, #1e0a3a 0%, transparent 40%), radial-gradient(circle at bottom right, #1e0a3a 0%, transparent 40%), #000'
      }}>
      <div className="absolute top-4 right-4 text-purple-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.75L17.25 7.75L17.25 13.25L12 16.25L6.75 13.25L6.75 7.75L12 4.75Z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.25L17.25 20.25L17.25 20.25L12 23.25L6.75 20.25L6.75 20.25L12 17.25Z"/>
        </svg>
      </div>
      <h3 className="text-xl text-white mb-2">{planName}</h3>
      <div className="text-5xl text-purple-400 font-bold mb-3">
        {originalPrice && <><s className="text-gray-500 text-3xl">{originalPrice}</s><br /></>} ${price}
        <span className="text-lg text-gray-400">/month</span>
      </div>
      <hr className="border-0 h-0.5 mb-6 bg-linear-to-r from-transparent via-purple-500/40 to-transparent" />
      <br />
      <ul className="text-gray-300 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FontAwesomeIcon icon={faDiamond} className="text-purple-400 mr-2 text-[8px]" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full px-4 py-3 bg-linear-to-r from-purple-900/50 to-purple-800/30 text-white rounded-full border border-purple-500/50 hover:border-purple-400 transition-all duration-300 flex items-center justify-center group"
        style={{
          boxShadow: 'inset 0 4px 12px rgba(255, 255, 255, 0.15)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => {
          e.target.style.boxShadow = 'inset 0 8px 24px rgba(255, 255, 255, 0.3)'
        }}
        onMouseLeave={e => {
          e.target.style.boxShadow = 'inset 0 4px 12px rgba(255, 255, 255, 0.15)'
        }}
        onClick={() => window.location.href = 'https://panel.lumixcore.com/store/paid-servers'}>
        Get plan
        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      <p className="text-center text-gray-500 text-sm mt-4">No extra hidden charge</p>
    </div>
  );
};

export default PricingCard;

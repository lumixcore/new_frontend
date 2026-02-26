'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSeedling, faCube, faLayerGroup, faGem, faCrown, faRocket } from '@fortawesome/free-solid-svg-icons';

const PricingCard = ({ 
  planName, 
  price, 
  originalPrice, 
  features, 
  extraClasses = "" 
}) => {
  const planIcon = (() => {
    switch ((planName || '').toLowerCase()) {
      case 'free':
        return faSeedling;
      case 'micro':
        return faBolt;
      case 'small':
        return faCube;
      case 'medium':
        return faLayerGroup;
      case 'large':
        return faGem;
      case 'xl':
        return faCrown;
      case '2xl':
        return faRocket;
      default:
        return faCube;
    }
  })();

  return (
    <div className={`rounded-[30px] p-6 relative overflow-hidden min-h-[450px] ${extraClasses}`}
      style={{
        background: 'radial-gradient(circle at top left, #1e0a3a 0%, transparent 40%), radial-gradient(circle at bottom right, #1e0a3a 0%, transparent 40%), #000'
      }}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl text-white">{planName}</h3>
        <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
          <FontAwesomeIcon icon={planIcon} className="text-purple-300 text-lg" />
        </div>
      </div>
      <div className="text-4xl text-purple-300 mb-3">
        {originalPrice && <><s className="text-gray-500 text-3xl">{originalPrice}</s><br /></>} ${price}
        <span className="text-lg text-gray-400">/month</span>
      </div>
      <hr className="border-0 h-0.5 bg-linear-to-r from-transparent via-purple-500/40 to-transparent" />
      <br />
      <ul className="text-gray-300 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-purple-300 mr-3 text-[10px]">•</span>
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
    </div>
  );
};

export default PricingCard;

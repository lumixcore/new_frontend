'use client';

const PricingCard = ({
  planName,
  price,
  features,
  currency = "$",
  extraClasses = "",
  billingPeriod = "monthly"
}) => {
  return (
    <div className={`rounded-[25px] p-7 min-h-[450px] bg-[#07111f] border border-purple-400/10 ${extraClasses}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg text-white font-semibold">{planName}</h3>
      </div>
      <div className="text-4xl text-purple-200">
        <span className="font-bold">{currency}{price}</span>
        <span className="text-lg text-gray-400">/mo</span>
      </div>
      <span className="text-gray-500 text-xs">No setup fees | Billed {billingPeriod}</span>
      {/* <hr className="border-0 h-0.5 bg-linear-to-r from-transparent via-purple-500/20 to-transparent" /> */}
      <br />
      <br />
      <div className="space-y-1 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between items-center pb-3 pt-2 border-b border-cyan-400/10">
            <span className="text-gray-400 text-sm">{feature.resource}</span>
            <span className="text-gray-200 text-sm font-semibold">{feature.value}</span>
          </div>
        ))}
      </div>
      <button className="w-full px-4 py-3 bg-[#0b1828] text-white rounded-full border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-center group"
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

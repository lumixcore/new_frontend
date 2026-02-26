'use client';

import { useState } from 'react';

export function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-[#00051b]/40 backdrop-blur transition-all duration-300 cursor-pointer">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 transition-colors duration-200 cursor-pointer"
      >
        <h3 className="text-white font-medium text-[18px] leading-relaxed">{question}</h3>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4">
          <p className="text-gray-400 text-[16px] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ items }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

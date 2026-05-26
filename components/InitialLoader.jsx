'use client';

import { useState, useEffect } from 'react';

export default function InitialLoader() {
  const [done, setDone] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const finish = () => {
      setDone(true);
      // Fully remove from DOM after fade-out completes
      setTimeout(() => setRemove(true), 800);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
      return () => window.removeEventListener('load', finish);
    }
  }, []);

  if (remove) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#000313] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        done ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer ripple ring */}
        <div className="absolute w-24 h-24 rounded-full border border-white/[0.08] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        
        {/* Inner ripple ring (delayed) */}
        <div
          className="absolute w-16 h-16 rounded-full border border-white/[0.12] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Core glowing dot */}
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-pulse" />
      </div>
    </div>
  );
}
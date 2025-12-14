'use client';

import { useEffect, useState, useMemo } from 'react';

export default function FadeSlideshow({
  images = [],
  interval = 2500,
  className = '',
}) {
  const [index, setIndex] = useState(0);
  // State to hold the aspect ratio style
  const [imageRatioStyle, setImageRatioStyle] = useState({}); 

  // Use a map to store and reuse calculated ratios to prevent layout shift on slide change
  const imageRatios = useMemo(() => new Map(), []);

  // Effect to handle slideshow timing
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);


  // Effect to handle dynamic aspect ratio calculation
  useEffect(() => {
    const currentSrc = images[index];
    if (!currentSrc) return;

    // Check if ratio is already calculated
    if (imageRatios.has(currentSrc)) {
      setImageRatioStyle(imageRatios.get(currentSrc));
      return;
    }

    // Load image to get its natural dimensions
    const img = new Image();
    img.onload = () => {
      const ratio = img.naturalHeight / img.naturalWidth * 100;
      
      // We use padding-top trick for aspect ratio in CSS
      const newStyle = { paddingTop: `${ratio}%` };

      // Store the ratio and update the state
      imageRatios.set(currentSrc, newStyle);
      setImageRatioStyle(newStyle);
    };
    img.src = currentSrc;
    
  }, [index, images, imageRatios]);


return (
  <div className={`relative w-full ${className}`}>
    <div className="w-full h-0 relative" style={imageRatioStyle}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`
            absolute inset-0 w-full h-full 
            object-contain
            transition-opacity duration-800 ease-in-out
            ${i === index ? 'opacity-100' : 'opacity-0'}
          `}
          draggable={false}
        />
      ))}

      {/* Aggressive outer black shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_70px_40px_rgba(0,0,0,0.9)]" />
    </div>
  </div>
);

}
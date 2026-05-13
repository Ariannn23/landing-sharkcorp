import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import aleta from '../assets/aleta2.png';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const finWrapperRef = useRef(null);
  const finRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const circleContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the whole loader
        gsap.to(containerRef.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: onComplete
        });
      }
    });

    // Animate Fin appearance
    tl.fromTo(finWrapperRef.current, 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    )
    // Animate Text
    .fromTo(textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    )
    // Circular Progress Bar loading
    .to(progressRef.current, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, "load")
    // Orbit the tiburon around the contour while loading
    .to(finWrapperRef.current, {
      rotation: 360,
      duration: 1.5,
      ease: "power2.inOut"
    }, "load")
    // Scale down before exit
    .to([circleContainerRef.current, textRef.current], {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    });

  }, [onComplete]);

  // Circumference of r=54 circle is approx 339.29
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-shark-navy flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center relative">
        {/* Circular Progress Container */}
        <div ref={circleContainerRef} className="relative w-40 h-40 flex items-center justify-center mb-8">
          
          <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_16px_rgba(37,99,235,0.8)]" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle 
              cx="60" 
              cy="60" 
              r={radius} 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.15)" 
              strokeWidth="6" 
            />
            {/* Progress Circle */}
            <circle 
              ref={progressRef}
              cx="60" 
              cy="60" 
              r={radius} 
              fill="none" 
              stroke="#2563eb" 
              strokeWidth="10" 
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
            />
          </svg>

          {/* Wrapper for Orbit */}
          <div ref={finWrapperRef} className="absolute inset-0 w-full h-full flex items-center justify-center">
            {/* The image is pushed exactly to the contour radius (72px) */}
            <div 
              ref={finRef} 
              className="absolute w-24 h-24 flex justify-center items-center"
              style={{ transform: 'translateY(-72px)' }}
            >
              <img 
                src={aleta} 
                alt="Loading..." 
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" 
              />
            </div>
          </div>
        </div>

        <h1 ref={textRef} className="text-4xl md:text-5xl font-extrabold text-white tracking-widest mb-2">
          SHARKCORP
        </h1>
        <p className="text-sm md:text-base text-blue-200 tracking-[0.4em] uppercase opacity-80 font-medium">
          Closed Corporation
        </p>
      </div>
    </div>
  );
}

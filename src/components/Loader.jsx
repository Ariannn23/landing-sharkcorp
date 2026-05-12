import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

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

    // Animate Icon
    tl.fromTo(iconRef.current, 
      { scale: 0, rotation: -180, opacity: 0 }, 
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    )
    // Animate Text
    .fromTo(textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    )
    // Progress Bar loading
    .to(progressRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut"
    })
    // Scale down before exit
    .to([iconRef.current, textRef.current], {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in"
    });

  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-shark-navy flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <div ref={iconRef} className="mb-6">
          <img src={logo} alt="SHARKCORP" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </div>
        <h1 ref={textRef} className="text-4xl md:text-5xl font-extrabold text-white tracking-widest mb-2">
          SHARKCORP
        </h1>
        <p className="text-sm md:text-base text-blue-200 tracking-[0.4em] uppercase mb-10 opacity-80 font-medium">
          Closed Corporation
        </p>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full bg-blue-500 w-0"></div>
        </div>
      </div>
    </div>
  );
}

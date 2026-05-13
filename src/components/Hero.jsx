import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float, Stars } from "@react-three/drei";
import { gsap } from "gsap";

function TechNetwork() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[3, 0, -2]}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#3084ff"
          wireframe
          opacity={0.4}
          transparent
        />
        <mesh>
          <icosahedronGeometry args={[1.9, 1]} />
          <meshBasicMaterial color="#000047" opacity={0.3} transparent />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function Hero() {
  const pillRef = useRef();
  const textRef = useRef();
  const subtextRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      pillRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
    )
      .fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.7",
      )
      .fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.5",
      );
  }, []);

  return (
    <div className="relative h-screen w-full bg-shark-navy flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <TechNetwork />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <div className="max-w-3xl">
          <div
            ref={pillRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-xl"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#3084ff] animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-100 uppercase tracking-widest">
              Llevando ideas al siguiente nivel
            </span>
          </div>

          <h1
            ref={textRef}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Innovación tecnológica para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-[#3084ff] to-blue-100">
              tu futuro digital
            </span>
          </h1>
          <div ref={btnRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="bg-[#3084ff] hover:bg-blue-400 hover:scale-105 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(48,132,255,0.4)] hover:shadow-[0_0_30px_rgba(48,132,255,0.6)] flex items-center justify-center gap-2 cursor-pointer text-center border border-blue-400/50"
            >
              Descubre Más
            </a>
            <a
              href="#contacto"
              className="bg-white/5 border border-white/30 backdrop-blur-sm hover:bg-white hover:text-shark-brand hover:scale-105 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer text-center"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* SVG Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none translate-y-1">
        <svg
          className="relative block w-full h-[60px] md:h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C 300 120 600 0 1200 60 L 1200 120 L 0 120 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}

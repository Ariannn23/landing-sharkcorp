import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Smartphone, Cloud, Shield, Database, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <Code2 size={40} />, title: "Desarrollo Web", desc: "Creamos aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías." },
  { icon: <Smartphone size={40} />, title: "Apps Móviles", desc: "Aplicaciones nativas e híbridas que ofrecen una experiencia de usuario excepcional en iOS y Android." },
  { icon: <Cloud size={40} />, title: "Cloud Computing", desc: "Arquitecturas en la nube seguras y eficientes para potenciar la infraestructura de tu negocio." },
  { icon: <Shield size={40} />, title: "Ciberseguridad", desc: "Protegemos tus activos digitales con las mejores prácticas y estándares de seguridad internacional." },
  { icon: <Database size={40} />, title: "Big Data & AI", desc: "Análisis de datos e inteligencia artificial para tomar decisiones estratégicas e inteligentes." },
  { icon: <Cpu size={40} />, title: "IoT Solutions", desc: "Conectamos dispositivos y sistemas para automatizar y optimizar tus procesos operativos." }
];

function FluidWaves() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-5 mix-blend-multiply">
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite]">
        <path fill="none" stroke="#000047" strokeWidth="2" d="M495,148 C650,111 818,220 869,380 C921,541 834,716 678,784 C522,852 322,789 228,634 C134,478 206,269 362,201 Z" />
        <path fill="none" stroke="#000047" strokeWidth="2" d="M495,248 C615,219 746,303 786,428 C826,553 758,689 638,742 C518,795 362,746 289,625 C216,504 272,341 392,288 Z" />
        <path fill="none" stroke="#000047" strokeWidth="2" d="M495,348 C580,327 674,387 703,476 C732,565 683,662 598,700 C513,738 402,703 350,617 C298,531 338,414 423,375 Z" />
        <path fill="none" stroke="#3084ff" strokeWidth="1" strokeDasharray="5,5" d="M495,198 C632,165 782,261 827,404 C873,547 796,702 658,763 C520,823 342,767 258,629 C175,491 239,305 377,244 Z" />
      </svg>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.08
        }
      );
    });
  }, []);

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      <FluidWaves />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#000047] mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu empresa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="relative bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:-translate-y-2 cursor-pointer group overflow-hidden z-10"
            >
              {/* Efecto de Llenado Oscuro Lento y Suave */}
              <div className="absolute inset-0 bg-[#000047] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-[800ms] ease-out -z-10 rounded-3xl"></div>

              {/* Contenido (cambia de color en hover) */}
              <div className="relative z-10">
                <div className="text-[#3084ff] mb-6 inline-block bg-[#3084ff]/10 p-4 rounded-2xl group-hover:bg-white/10 group-hover:text-white transition-all duration-[800ms] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(48,132,255,0.5)]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#000047] mb-3 group-hover:text-white transition-colors duration-[800ms]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors duration-[800ms]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

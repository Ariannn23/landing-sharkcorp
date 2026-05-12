import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { text: "SHARKCORP revolucionó nuestra infraestructura cloud. Su equipo es excepcional y muy dedicado.", name: "Laura Gómez", role: "CEO, TechNova" },
  { text: "La calidad de su código open source nos ahorró meses de desarrollo. Totalmente recomendados.", name: "Carlos Ruiz", role: "CTO, DataFlow" },
  { text: "Una interfaz limpia, moderna y ultra rápida. Entendieron nuestra visión a la perfección.", name: "Ana Martínez", role: "Product Manager" },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Animated background bubbles */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-[#3084ff] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-[pulse_6s_infinite]"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#000047] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-[pulse_8s_infinite]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#000047] mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Colaboramos con empresas innovadoras para construir el futuro del software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={containerRef}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative group cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3084ff]/5 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <Quote size={40} className="text-[#3084ff]/20 mb-6 group-hover:text-[#3084ff]/40 transition-colors duration-300" />
              <p className="text-gray-700 text-lg mb-8 font-medium leading-relaxed z-10 relative">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#000047] to-[#3084ff] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#000047]">{t.name}</h4>
                  <p className="text-sm text-[#3084ff] font-bold tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

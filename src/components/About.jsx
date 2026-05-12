import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Zap, Shield, Target } from 'lucide-react';
import startupImage from '../assets/startup.png';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(imageRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(textRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");
  }, []);

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative" ref={imageRef}>
            <div className="aspect-square bg-[#000047] rounded-3xl relative overflow-hidden flex items-center justify-center group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000047]/80 to-transparent z-10 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img src={startupImage} alt="SharkCorp Startup Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0" />
            </div>
            {/* Decoration */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-blue-200 rounded-3xl"></div>
          </div>
          
          <div className="w-full lg:w-1/2" ref={textRef}>
            <h2 className="text-4xl font-extrabold text-shark-navy mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En <strong className="text-shark-navy">SHARKCORP</strong> somos una startup visionaria que nació con el propósito de revolucionar el desarrollo de software. Creemos en la simplicidad, la eficiencia y el diseño de vanguardia.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              Nuestro equipo está compuesto por talentos apasionados que combinan habilidades técnicas excepcionales con una profunda comprensión de las necesidades del negocio moderno. Construimos no solo código, sino experiencias digitales que marcan la diferencia.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                { text: 'Innovación Constante', icon: <Zap className="text-yellow-500" size={24} /> },
                { text: 'Calidad de Código', icon: <CheckCircle2 className="text-green-500" size={24} /> },
                { text: 'Diseño Centrado en el Usuario', icon: <Target className="text-red-500" size={24} /> },
                { text: 'Desarrollo Ágil', icon: <Shield className="text-blue-500" size={24} /> }
              ].map((item, i) => (
                <li key={i} className="flex items-center text-shark-navy font-bold text-lg p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group cursor-default">
                  <div className="bg-white p-2 rounded-xl shadow-sm mr-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <span className="tracking-wide uppercase text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

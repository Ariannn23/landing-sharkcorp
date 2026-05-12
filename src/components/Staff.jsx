import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User } from 'lucide-react';
import sharkStaff from '../assets/shark_staff.png';

gsap.registerPlugin(ScrollTrigger);

const staff = [
  { firstName: "Arian", lastName: "Bautista Quezada", roleTitle: "Chief Financial Officer", roleAbbr: "(CFO)" },
  { firstName: "Sebastian", lastName: "Mercado Rojas", roleTitle: "Chief Technology Officer", roleAbbr: "(CTO)" },
  { firstName: "Deyvi", lastName: "Vera Medina", roleTitle: "Chief Commercial Officer", roleAbbr: "(CCO)" }
];

export default function Staff() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          y: 50, 
          z: -500,
          scale: 0.5,
          rotationX: 45, 
          opacity: 0, 
          transformPerspective: 1000,
          transformOrigin: "center center"
        },
        {
          y: 0,
          z: 0,
          scale: 1,
          rotationX: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: index * 0.1
        }
      );
    });
  }, []);

  return (
    <section id="staff" className="py-24 bg-shark-gray" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-shark-navy mb-4">Nuestro Equipo</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">Conoce a las mentes brillantes detrás de nuestras soluciones innovadoras.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {staff.map((person, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="relative bg-white rounded-3xl p-8 hover:-translate-y-4 transition-all duration-500 flex flex-col items-center group overflow-hidden border border-gray-100 hover:border-[#000047]/50 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,71,0.2)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000047]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-40 h-40 rounded-full bg-shark-gray flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl border-4 border-gray-100 group-hover:border-[#000047]/40 z-10 overflow-hidden">
                <img src={sharkStaff} alt="Staff Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="relative z-10 text-xl leading-snug text-center font-black text-shark-navy tracking-tight group-hover:text-shark-brand transition-colors duration-300">
                {person.firstName} <br />
                {person.lastName}
              </h3>
              <div className="relative z-10 mt-5 inline-block w-full">
                <p className="bg-[#000047]/5 text-[#000047] border border-[#000047]/20 font-bold uppercase tracking-widest text-[0.7rem] px-4 py-2.5 rounded-2xl group-hover:bg-[#000047] group-hover:text-white transition-all duration-300 shadow-sm text-center leading-relaxed flex flex-col items-center justify-center gap-1">
                  <span>{person.roleTitle}</span>
                  <span className="text-[0.8rem] opacity-90">{person.roleAbbr}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

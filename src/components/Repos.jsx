import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Terminal } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Grupo BQ Contable",
    desc: "Landing page corporativa para la presentación de servicios contables y financieros.",
    tag: "Landing Page",
    link: "https://grupobq-contable.vercel.app/",
  },
  {
    name: "PsyBook",
    desc: "Sistema especializado en la gestión de consultas y expedientes psicológicos.",
    tag: "HealthTech",
    link: "https://psybook-frontend.vercel.app/",
  },
  {
    name: "Saving Pig",
    desc: "Aplicación interactiva para el control de finanzas personales y metas de ahorro.",
    tag: "Web App",
    link: "https://saving-pig.vercel.app/login",
  },
  {
    name: "Crumble Pastelería",
    desc: "E-commerce optimizado para la venta y gestión de productos de repostería.",
    tag: "E-commerce",
    link: "https://crumble-pasteleria.vercel.app/",
  },
];

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    setDimensions();
    window.addEventListener("resize", setDimensions);

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ</>{}[]".split("");
    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / fontSize) + 1;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 71, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#3084ff";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] >= 0) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setDimensions);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30"></canvas>
  );
}

export default function Repos() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      id="proyectos"
      className="relative py-24 bg-[#000047] text-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Matrix Rain Background */}
      <MatrixRain />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Nuestros Proyectos</h2>
            <p className="text-lg text-blue-200 max-w-2xl">
              Impulsamos el éxito de nuestros clientes a través de soluciones
              digitales de alto impacto.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 flex items-center gap-2 text-white hover:text-blue-300 font-semibold transition-colors"
          >
            Ver Portafolio <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardsRef.current[idx] = el)}
              className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-400 hover:bg-white/10 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Terminal
                      className="text-blue-400 group-hover:text-blue-300 transition-colors"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/20">
                  {project.tag}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Visitar Proyecto <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


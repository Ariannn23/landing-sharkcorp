import { Code2, MessageCircle, Briefcase, Camera, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo4.png';

export default function Footer() {
  return (
    <footer className="bg-shark-dark text-gray-300 py-16 border-t border-shark-light/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <a href="#" className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
              <img src={logo} alt="SHARKCORP" className="w-12 h-12 md:w-14 md:h-14 object-contain" /> 
              <span className="tracking-tighter">SHARKCORP</span>
            </a>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Lideramos la transformación digital mediante el desarrollo de software de vanguardia. Innovación, seguridad y escalabilidad en cada línea de código.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg">
                <Code2 size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg">
                <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-lg">
                <Camera size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Servicios
              </a></li>
              <li><a href="#proyectos" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Proyectos
              </a></li>
              <li><a href="#nosotros" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Nosotros
              </a></li>
              <li><a href="#staff" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Equipo
              </a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Trujillo, La Libertad, Perú</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+51 987 654 321</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>info@sharkcorp.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Action Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Boletín</h4>
            <p className="text-sm text-gray-400 mb-4">Suscríbete para recibir noticias y actualizaciones tecnológicas.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SHARKCORP. Elevating Digital Standards.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Términos Legales</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


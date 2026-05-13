import { Code2, MessageCircle, Briefcase, Camera } from 'lucide-react';
import logo from '../assets/logo4.png';

export default function Footer() {
  return (
    <footer className="bg-shark-dark text-gray-300 py-12 border-t border-shark-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
              <img src={logo} alt="SHARKCORP" className="w-12 h-12 md:w-14 md:h-14 object-contain" /> SHARKCORP
            </a>
            <p className="max-w-md text-sm text-gray-400 leading-relaxed">
              Transformamos el ecosistema digital construyendo soluciones escalables, seguras y de alto rendimiento. Somos tu socio tecnológico ideal para la innovación.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</a></li>
              <li><a href="#repos" className="hover:text-blue-400 transition-colors">Open Source</a></li>
              <li><a href="#staff" className="hover:text-blue-400 transition-colors">Equipo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"><Code2 size={20} /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"><Briefcase size={20} /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"><MessageCircle size={20} /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"><Camera size={20} /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SHARKCORP. Todos los derechos reservados.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos Legales</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

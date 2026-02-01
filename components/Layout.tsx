import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';
import { PHONE_NUMBERS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stay', path: '/facilities' },
    { name: 'Wander', path: '/destinations' },
    { name: 'Life', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/tariff' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Responsive Header - Fixed Overflows */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-1 md:py-4' : 'py-3 md:py-8'
      }`}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className={`flex justify-between items-center px-4 md:px-10 py-2 md:py-4 rounded-full border transition-all duration-500 ${
            isScrolled 
              ? 'bg-white border-stone-200 shadow-xl' 
              : 'bg-white/10 backdrop-blur-md border-white/20'
          }`}>
            <Link to="/" className="shrink-0">
              <img src="https://beehivewayanad.com/images/logo.png" alt="BeeHive" className="h-5 md:h-10 object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] xl:text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${
                    location.pathname === link.path 
                      ? 'text-amber-500' 
                      : isScrolled ? 'text-[#0F4C45] hover:text-amber-500' : 'text-white hover:text-amber-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 md:space-x-6">
              <Link 
                to="/booking" 
                className={`hidden sm:flex px-5 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase transition-all shadow-lg ${
                  isScrolled ? 'bg-[#0F4C45] text-white hover:bg-amber-500' : 'bg-amber-400 text-white hover:bg-white hover:text-[#0F4C45]'
                }`}
              >
                BOOK NOW
              </Link>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-[#0F4C45]' : 'text-white'}`}
                aria-label="Toggle Menu"
              >
                <Menu size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu with better spacing */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0F4C45] text-white flex flex-col p-6 md:p-12 animate-in slide-in-from-top duration-500 overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <img src="https://beehivewayanad.com/images/logo.png" alt="BeeHive" className="h-6 brightness-0 invert" />
            <button onClick={() => setIsMenuOpen(false)} className="bg-white/10 p-3 rounded-full"><X size={24} /></button>
          </div>
          <nav className="flex flex-col space-y-4 mb-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl md:text-4xl font-black uppercase tracking-tighter transition-colors ${location.pathname === link.path ? 'text-amber-400' : 'hover:text-amber-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl md:text-4xl font-black uppercase tracking-tighter hover:text-amber-400"
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
            <p className="text-amber-400 font-bold tracking-[0.3em] uppercase text-[10px]">Reach Us</p>
            <p className="text-xl font-black">{PHONE_NUMBERS[0]}</p>
            <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="bg-amber-400 text-white py-4 rounded-2xl text-center font-black tracking-widest text-[10px] shadow-2xl">RESERVE MY STAY</Link>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Enhanced Footer Accessibility */}
      <footer className="bg-[#0F4C45] text-white pt-20 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5 text-center lg:text-left">
              <img src="https://beehivewayanad.com/images/logo.png" alt="BeeHive" className="h-10 brightness-0 invert mb-8 mx-auto lg:mx-0" />
              <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-10 mx-auto lg:mx-0 font-light">
                A premium eco-friendly sanctuary nestled in the heart of Wayanad's coffee highlands. Experience nature through an artisanal lens.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-400 transition-all cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3 text-center lg:text-left">
              <h4 className="text-amber-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8">Quick Links</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path} className="text-white/80 hover:text-amber-400 transition-colors">{link.name}</Link></li>
                ))}
                <li><Link to="/contact" className="text-white/80 hover:text-amber-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-white/5 rounded-[2.5rem] p-8 border border-white/10">
              <h4 className="text-amber-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8 text-center lg:text-left">Contact Central</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-6 justify-center lg:justify-start">
                   <Phone size={18} className="text-amber-400" />
                   <p className="font-black text-sm md:text-lg">{PHONE_NUMBERS[0]}</p>
                </div>
                <div className="flex items-center gap-6 justify-center lg:justify-start">
                   <Mail size={18} className="text-amber-400" />
                   <p className="font-black text-sm md:text-lg truncate">wayanadbeehive@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-4 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              © {new Date().getFullYear()} BEEHIVE RESORT WAYANAD
            </p>
            <a 
              href="https://realamericantechnologies.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-amber-400 transition-all"
            >
              <span>Designed & Powered by Real American Technologies</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
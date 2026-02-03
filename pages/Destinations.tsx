import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import { MapPin, ArrowUpRight, Compass } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Destinations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal items on scroll
      const reveals = document.querySelectorAll(".dest-card");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          x: (i, target) => (el.classList.contains('even') ? 100 : -100),
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

      // Simple Parallax on images - only for desktop
      if (window.innerWidth > 768) {
        gsap.to(".dest-img-parallax", {
          y: -40,
          scrollTrigger: {
            trigger: ".dest-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FFF9F0] overflow-x-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center bg-[#0F4C45] torn-bottom overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://beehivewayanad.com/images/tour-places-wayanad.png" 
            className="w-full h-full object-cover" 
            alt="Wayanad" 
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pt-16 md:pt-20 text-center">
          <h2 className="text-amber-400 font-script text-3xl sm:text-4xl mb-3 sm:mb-4">Wanderer's</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight sm:leading-none">
            The <span className="text-amber-400 italic">Circuit</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg mt-6 sm:mt-8 max-w-xl mx-auto font-light px-4">
            Explore the soul of Wayanad from the center of its most iconic heritage sites.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 dest-section">
        <div className="container mx-auto max-w-7xl space-y-20 sm:space-y-28 md:space-y-40">
          {DESTINATIONS.map((dest, idx) => (
            <div 
              key={dest.id} 
              className={`dest-card flex flex-col lg:flex-row gap-10 sm:gap-16 md:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse even' : 'odd'}`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden border-8 sm:border-[15px] border-white shadow-xl md:shadow-2xl relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover dest-img-parallax" 
                    loading="lazy"
                  />
                </div>
                {/* Floating Map Pin Info */}
                {dest.distance && (
                  <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 bg-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-lg md:shadow-2xl flex items-center gap-2 sm:gap-4 z-20 max-w-[80%] sm:max-w-none">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-400 rounded-full flex items-center justify-center text-white shrink-0">
                      <MapPin size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[8px] sm:text-[10px] font-black uppercase text-stone-400 tracking-widest truncate">Distance</p>
                      <p className="text-[#0F4C45] font-black text-sm sm:text-base truncate">{dest.distance}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="h-px w-8 sm:w-12 bg-amber-400"></div>
                  <p className="text-amber-500 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs">Site 0{idx + 1}</p>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#0F4C45] mb-6 sm:mb-8 leading-snug sm:leading-tight">
                  {dest.name}
                </h2>
                <p className="text-stone-500 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 sm:mb-12">
                  {dest.description}
                </p>
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(dest.name + ' Wayanad')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-4 bg-[#0F4C45] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-black text-xs tracking-widest hover:bg-amber-400 transition-all shadow-lg sm:shadow-xl group w-full sm:w-auto"
                >
                  GET DIRECTIONS 
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Final Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-amber-400 text-white torn-top">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <Compass size={60} strokeWidth={1} className="mx-auto mb-6 sm:mb-10 opacity-50 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 italic">
            Ready to roam?
          </h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed sm:leading-loose mb-8 sm:mb-12 px-2 sm:px-0">
            Wayanad is a district of curves, peaks, and ancient secrets. 
            Begin your journey at the Hive and let the mountains guide your path.
          </p>
          <Link 
            to="/booking" 
            className="bg-[#0F4C45] px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full font-black text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.2em] shadow-xl sm:shadow-2xl inline-block w-full sm:w-auto"
          >
            BOOK YOUR BASECAMP
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

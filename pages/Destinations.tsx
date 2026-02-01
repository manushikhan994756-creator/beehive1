
import React, { useEffect, useRef } from 'react';
// Added Link import from react-router-dom
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

      // Simple Parallax on images
      gsap.to(".dest-img-parallax", {
        y: -40,
        scrollTrigger: {
          trigger: ".dest-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FFF9F0]">
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center bg-[#0F4C45] torn-bottom overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://beehivewayanad.com/images/tour-places-wayanad.png" className="w-full h-full object-cover" alt="Wayanad" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20 text-center md:text-left">
          <h2 className="text-amber-400 font-script text-4xl mb-4">Wanderer's</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
            The <span className="text-amber-400 italic">Circuit</span>
          </h1>
          <p className="text-white/60 text-lg mt-8 max-w-xl font-light">Explore the soul of Wayanad from the center of its most iconic heritage sites.</p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-32 px-6 dest-section">
        <div className="container mx-auto max-w-7xl space-y-40">
          {DESTINATIONS.map((dest, idx) => (
            <div 
              key={dest.id} 
              className={`dest-card flex flex-col lg:flex-row gap-16 md:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse even' : 'odd'}`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border-[15px] border-white shadow-2xl relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover dest-img-parallax" 
                  />
                </div>
                {/* Floating Map Pin Info */}
                {dest.distance && (
                  <div className="absolute -top-6 -left-6 bg-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 z-20">
                    <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest">Distance</p>
                      <p className="text-[#0F4C45] font-black">{dest.distance}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="h-px w-12 bg-amber-400"></div>
                  <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Site 0{idx + 1}</p>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-[#0F4C45] mb-8 leading-tight">{dest.name}</h2>
                <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed mb-12">
                  {dest.description}
                </p>
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(dest.name + ' Wayanad')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 bg-[#0F4C45] text-white px-10 py-5 rounded-full font-black text-xs tracking-widest hover:bg-amber-400 transition-all shadow-xl group"
                >
                  GET DIRECTIONS <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Final Section */}
      <section className="py-24 bg-amber-400 text-white torn-top">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Compass size={80} strokeWidth={1} className="mx-auto mb-10 opacity-50" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Ready to roam?</h2>
          <p className="text-white/80 text-lg font-light leading-loose mb-12">
            Wayanad is a district of curves, peaks, and ancient secrets. 
            Begin your journey at the Hive and let the mountains guide your path.
          </p>
          <Link to="/booking" className="bg-[#0F4C45] px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] shadow-2xl">
            BOOK YOUR BASECAMP
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

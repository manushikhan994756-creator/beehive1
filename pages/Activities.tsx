import React, { useEffect, useRef } from 'react';
import { ACTIVITIES } from '../constants';
import { Star, ArrowRight, Music, Tent, Waves, UtensilsCrossed, Palette } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Activities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal items on scroll
      const reveals = document.querySelectorAll(".act-card");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "back.out(1.7)"
        });
      });

      // Floating icons parallax
      gsap.to(".float-icon", {
        y: -100,
        rotate: 360,
        scrollTrigger: {
          trigger: ".act-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FFF9F0]">
      {/* Colorful Hero */}
      <section className="relative h-[65vh] flex items-center bg-[#0F4C45] torn-bottom overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://beehivewayanad.com/images/horse-ride.png" className="w-full h-full object-cover" alt="Activities" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20 text-center">
          <h2 className="text-amber-400 font-script text-4xl mb-4">Energetic</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
            Life <span className="text-amber-400 italic">at Hive</span>
          </h1>
          <p className="text-white/60 text-lg mt-8 max-w-xl mx-auto font-light leading-relaxed">From morning rides to starry campfires, every hour at Beehive is an opportunity to connect with the wild.</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-32 px-6 act-section">
        <div className="container mx-auto max-w-7xl relative">
          {/* Decorative Floating Background Icon */}
          <div className="absolute top-1/4 -right-10 opacity-5 float-icon hidden xl:block">
            <Palette size={200} strokeWidth={1} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {ACTIVITIES.map((act, i) => (
              <div 
                key={act.id} 
                className="act-card bg-white rounded-[3rem] overflow-hidden shadow-lg border border-stone-100 hover:shadow-2xl hover:border-amber-400 transition-all duration-500 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={act.image} alt={act.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C45]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                     <p className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">Discover More <ArrowRight size={14} /></p>
                  </div>
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-black text-[#0F4C45] mb-4 group-hover:text-amber-500 transition-colors">{act.name}</h4>
                  <p className="text-stone-500 text-sm font-light leading-relaxed mb-8">{act.description}</p>
                  <div className="flex gap-0.5 text-amber-400">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Night Highlight */}
      <section className="py-24 bg-[#0F4C45] text-white torn-top">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden border-[15px] border-white/10 -rotate-3 shadow-2xl">
                <img src="https://beehivewayanad.com/images/Campfire.png" className="w-full h-auto" alt="Campfire" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-amber-400 p-10 rounded-full shadow-2xl hidden md:block">
                 <Music size={40} className="text-white animate-bounce" />
              </div>
            </div>
            <div>
              <h3 className="text-amber-400 font-script text-3xl mb-4">Cozy Vibes</h3>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Campfire & <span className="text-amber-400 italic">Melody</span></h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                As the sun dips below the Western Ghats, the Hive comes alive with the crackle of flame and the rhythm of music. 
                Perfect for friends, families, and late-night stories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { name: "Barbeque Dinner", icon: <UtensilsCrossed size={20} /> },
                  { name: "Outdoor Tents", icon: <Tent size={20} /> },
                  { name: "Music Setup", icon: <Music size={20} /> },
                  { name: "Safe Environment", icon: <Waves size={20} /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
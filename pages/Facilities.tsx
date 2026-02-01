import React, { useEffect, useRef } from 'react';
import { Plus, Coffee, Wind, Tv, Shield, Beer, Droplets, MapPin, Sparkles, Home, Bed, Users, Tent, Utensils, Music, Waves, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Facilities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for content
      gsap.from(".reveal-header > *", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      // Sharp Parallax
      gsap.to(".fac-hero-img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Staggered reveals for cards
      gsap.from(".reveal-card", {
        scrollTrigger: {
          trigger: ".reveal-card",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const facilityList = [
    "Hot Water / Filter Water",
    "Twin, Double or single beds",
    "En-suite bathrooms",
    "Air conditioning or fan cooling system",
    "Satellite Television",
    "In-room safes (*) or a safe system",
    "Tea and coffee making facilities (*)",
    "Campfire / Refreshment area",
    "Barbeque Dinner with music",
    "Play area",
    "Natural Pond",
    "Designed Rooms",
    "Kitchen and Homely food",
    "Close to Major Tourist Destinations",
    "Accommodation for Group and Family"
  ];

  return (
    <div ref={containerRef} className="bg-[#FFF9F0] overflow-x-hidden">
      {/* High-Contrast Hero - Fixed Text Visibility & Fog */}
      <section ref={heroRef} className="relative h-[75vh] md:h-[85vh] flex items-center bg-[#0F4C45] torn-bottom overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://beehivewayanad.com/images/resort.jpg" 
            className="fac-hero-img w-full h-[120%] object-cover opacity-60 scale-105" 
            alt="Beehive Resort Background" 
          />
          {/* SOLID overlay to kill the "fog" */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C45] via-[#0F4C45]/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-24">
          <div className="reveal-header max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-amber-400"></div>
              <span className="text-amber-400 font-black uppercase tracking-[0.5em] text-[11px] md:text-xs">Premium Sanctuaries</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] mb-10 tracking-tighter">
              LIVE IN <br/> <span className="text-amber-400 italic">STYLE</span>
            </h1>
            <p className="text-white text-lg md:text-2xl font-light leading-relaxed max-w-2xl drop-shadow-xl opacity-90">
              Set on <span className="text-amber-400 font-black">six acres of coffee plantation</span>, Beehive provides the finest resort experiences with ultimate privacy and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* In-Room Facilities Section - Improved Padding */}
      <section className="py-24 md:py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            {/* Left: Interactive Image Group */}
            <div className="lg:col-span-6 relative reveal-card">
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-2">
                <img src="https://beehivewayanad.com/images/Rooms1.png" className="w-full h-auto" alt="Hive Interior" />
              </div>
              <div className="absolute -bottom-10 -left-6 md:-bottom-16 md:-left-16 z-20 w-40 md:w-64 aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[15px] border-white shadow-2xl -rotate-6">
                <img src="https://beehivewayanad.com/images/f3.png" className="w-full h-full object-cover" alt="Detail View" />
              </div>
              <div className="absolute -top-12 right-0 z-0 w-48 h-48 bg-amber-400/10 rounded-full blur-[80px]"></div>
            </div>

            {/* Right: Detailed Amenities List */}
            <div className="lg:col-span-6 reveal-card pt-10 lg:pt-0">
              <h2 className="text-4xl md:text-7xl font-black text-[#0F4C45] mb-8 leading-tight tracking-tighter">In-Room <br/><span className="text-amber-400 italic font-script normal-case tracking-normal">Facilities</span></h2>
              <p className="text-stone-500 text-lg md:text-xl mb-12 font-light leading-relaxed">Experience an authentic coffee plantation retreat where every detail is designed for your relaxation.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {facilityList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 group p-2 hover:translate-x-2 transition-transform">
                    <div className="w-10 h-10 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-400 group-hover:text-white transition-all shadow-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-[#0F4C45] text-xs font-black uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid with Fixed Styling */}
      <section className="py-24 md:py-40 bg-[#0F4C45] torn-top text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="reveal-card">
              <h3 className="text-amber-400 font-script text-4xl mb-4">The Atmosphere</h3>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Resort <span className="text-amber-400 italic font-script normal-case tracking-normal">Highlights</span></h2>
            </div>
            <p className="reveal-card text-white/40 max-w-md text-right hidden lg:block text-lg font-light leading-relaxed">A curated collection of views from our six-acre coffee estate sanctuary in the heart of Wayanad highlands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
            {/* Main Feature */}
            <div className="md:col-span-2 md:row-span-2 reveal-card group relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/5">
              <img src="https://beehivewayanad.com/images/f1.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Cottage Exterior" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C45] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-12 left-12">
                <span className="bg-amber-400 text-white px-8 py-3 rounded-full font-black text-[10px] tracking-[0.4em] uppercase shadow-2xl">VILLA EXTERIOR</span>
              </div>
            </div>
            
            <div className="reveal-card group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white/5">
              <img src="https://beehivewayanad.com/images/f3.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Resort Pathway" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#0F4C45]/80 transition-opacity p-6">
                 <p className="font-black text-[10px] tracking-[0.4em] uppercase text-center">Garden Trails & Coffee Walks</p>
              </div>
            </div>

            <div className="reveal-card group relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white/5">
              <img src="https://beehivewayanad.com/images/f4.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Evening Atmosphere" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#0F4C45]/80 transition-opacity p-6">
                 <p className="font-black text-[10px] tracking-[0.4em] uppercase text-center">Golden Hour Magic</p>
              </div>
            </div>

            <div className="md:col-span-2 reveal-card group relative h-[300px] md:h-auto rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-xl border-4 border-white/5">
              <img src="https://beehivewayanad.com/images/f2.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Pond View" />
              <div className="absolute bottom-12 left-12">
                 <h4 className="text-3xl font-black text-white tracking-tighter">Natural Pond Haven</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Background Elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Extra Detail Section for Groups - Increased Mobile Presence */}
      <section className="py-24 md:py-40 px-6 text-center bg-white relative">
        <div className="container mx-auto max-w-4xl relative z-10">
           <div className="w-20 h-20 bg-amber-400/10 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-10 shadow-sm">
             <Users size={40} />
           </div>
           <h2 className="text-4xl md:text-7xl font-black text-[#0F4C45] mb-10 leading-tight tracking-tighter">Space for the <br/><span className="text-amber-400">Whole Colony</span></h2>
           <p className="text-stone-500 text-lg md:text-2xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
             Whether you're a couple looking for a <span className="text-[#0F4C45] font-bold">private cottage</span> or a group needing a <span className="text-[#0F4C45] font-bold">large villa</span>, our design caters to every traveler's heartbeat.
           </p>
           <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {["Groups", "Families", "Backpackers", "Couples"].map((tag) => (
                <span key={tag} className="px-10 py-4 bg-stone-50 border border-stone-100 rounded-full text-[10px] font-black tracking-[0.3em] uppercase shadow-sm text-[#0F4C45] hover:bg-amber-400 hover:text-white transition-all cursor-default">
                  {tag}
                </span>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
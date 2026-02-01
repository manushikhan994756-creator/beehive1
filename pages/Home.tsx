import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Plane, Camera, Star, Cloud, Compass, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DESTINATIONS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-text-content > *", { 
        y: 80, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power4.out" 
      });
      
      gsap.from(".hero-visuals", { 
        x: 100, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power3.out" 
      });

      // Parallax Effects
      gsap.to(".hero-parallax-img img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Reveal elements on scroll
      const reveals = document.querySelectorAll(".reveal-on-scroll");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollTrending = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="overflow-hidden bg-[#FFF9F0]">
      {/* Dynamic Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-[#0F4C45] torn-bottom flex items-center pt-32 pb-44 px-6 lg:px-12">
        <div className="absolute top-[15%] left-[5%] text-white/10 hidden lg:block">
            <Compass size={120} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[20%] right-[10%] text-white/10 hidden lg:block">
            <Cloud size={100} strokeWidth={1} />
        </div>
        
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-text-content text-white text-center lg:text-left z-10">
            <h2 className="text-amber-400 font-script text-4xl mb-4">Escape to</h2>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.1] mb-8 tracking-tighter">
              The <span className="text-amber-400 italic">World</span> <br className="hidden md:block" /> with Hive
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience the untamed highlands and lush coffee estates of Wayanad. Your gateway to an artisanal stay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
              <Link to="/booking" className="btn-accent px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] shadow-2xl uppercase">
                START YOUR TRIP
              </Link>
            </div>
          </div>
          
          <div className="hero-visuals relative mt-12 lg:mt-0 flex justify-center">
            <div className="relative z-10 w-full max-w-lg lg:max-w-none">
              <div className="hero-parallax-img rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[10px] md:border-[20px] border-white/10 rotate-2 shadow-2xl aspect-[4/5] lg:aspect-auto">
                <img 
                  src="https://beehivewayanad.com/images/banner5.png" 
                  alt="Wayanad Hills" 
                  className="w-full h-[120%] object-cover -translate-y-[10%]" 
                />
              </div>
              <div className="hero-badge absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 bg-amber-400 rounded-full flex flex-col items-center justify-center text-white border-[6px] md:border-[12px] border-white shadow-2xl z-20">
                 <span className="text-[10px] md:text-xs font-black uppercase">Get up to</span>
                 <span className="text-4xl md:text-6xl font-black leading-none">60%</span>
                 <span className="text-[10px] md:text-xs font-black uppercase">Off</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisanal Booking Steps Section */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-24 mx-auto lg:mx-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-amber-400"></div>
              <h3 className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Easy Steps</h3>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-[#0F4C45] leading-[0.9] tracking-tighter mb-10 uppercase">
              For Your <br/><span className="text-amber-400 italic">Bookings</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Structural line for visual flow on desktop */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-stone-100 z-0"></div>
            
            {[
              { 
                id: '01', 
                title: 'Pick Destination', 
                icon: <MapPin size={28} />, 
                desc: 'Explore hundreds of world class destinations through our portal.',
                color: 'bg-emerald-50 text-emerald-600'
              },
              { 
                id: '02', 
                title: 'Secure Payment', 
                icon: <Star size={28} />, 
                desc: 'Simple and fast secure payments through our trusted gateways.',
                color: 'bg-amber-50 text-amber-500'
              },
              { 
                id: '03', 
                title: 'Enjoy The Hive', 
                icon: <CheckCircle2 size={28} />, 
                desc: 'Pack your bags and start your trip into the wild beauty of Wayanad.',
                color: 'bg-sky-50 text-sky-600'
              }
            ].map((step, idx) => (
              <div key={idx} className="reveal-on-scroll relative group bg-white p-10 md:p-14 rounded-[3rem] border border-stone-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-amber-400/20 transition-all duration-500 z-10">
                {/* Step Marker */}
                <div className="absolute top-8 right-8 text-[#0F4C45]/5 font-black text-6xl group-hover:text-amber-400/10 transition-colors">
                  {step.id}
                </div>
                
                <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm`}>
                  {step.icon}
                </div>
                
                <h4 className="text-2xl md:text-3xl font-black text-[#0F4C45] mb-6 group-hover:text-amber-500 transition-colors tracking-tight">{step.title}</h4>
                <p className="text-stone-500 text-sm md:text-lg leading-relaxed font-light mb-10">{step.desc}</p>
                
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">Fast Process</span>
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#0F4C45]">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="py-24 md:py-32 bg-[#FFF9F0] torn-top">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center lg:items-end mb-20 gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-amber-500 font-script text-3xl md:text-4xl mb-4">Trending</h3>
              <h2 className="text-4xl md:text-6xl font-black text-[#0F4C45] tracking-tighter">Popular Places</h2>
            </div>
            <div className="flex gap-6">
                <button 
                  onClick={() => scrollTrending('left')}
                  className="w-14 h-14 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#0F4C45] hover:bg-[#0F4C45] hover:text-white transition-all shadow-md active:scale-90"
                >
                   <ArrowRight className="rotate-180" size={24} />
                </button>
                <button 
                  onClick={() => scrollTrending('right')}
                  className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center text-white hover:bg-[#0F4C45] transition-all shadow-lg active:scale-90"
                >
                   <ArrowRight size={24} />
                </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 lg:gap-10 pb-12 no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {DESTINATIONS.map((dest, i) => (
              <div key={i} className="reveal-on-scroll min-w-[300px] md:min-w-[400px] group bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 snap-start border border-stone-50">
                <div className="h-72 md:h-80 overflow-hidden relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                  />
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg text-[#0F4C45]">
                    {dest.distance || 'Premium'}
                  </div>
                </div>
                <div className="p-10 md:p-12">
                  <div className="flex text-amber-400 mb-4 gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-[#0F4C45] mb-4 group-hover:text-amber-500 transition-colors tracking-tight">{dest.name}</h4>
                  <p className="text-stone-500 text-sm md:text-base line-clamp-2 mb-8 leading-relaxed font-light">{dest.description}</p>
                  <Link to="/destinations" className="inline-flex items-center gap-2 text-amber-500 font-black text-[10px] uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                    EXPLORE NOW <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h3 className="text-amber-500 font-script text-3xl md:text-4xl mb-4">What Our Guests Say</h3>
          <h2 className="text-4xl md:text-7xl font-black text-[#0F4C45] mb-20 uppercase tracking-tighter">Guest <span className="text-amber-400 italic">Reviews</span></h2>
          <div className="reveal-on-scroll bg-[#FFF9F0] rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 relative border border-amber-400/20 shadow-xl">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 md:w-32 md:h-32 rounded-full border-[8px] border-white overflow-hidden shadow-2xl">
               <img src="https://beehivewayanad.com/images/near-destination.jpg" className="w-full h-full object-cover" alt="Happy Guest" />
            </div>
            <p className="text-xl md:text-4xl font-serif italic text-[#0F4C45] leading-relaxed mb-12">
              "The BeeHive resort provided an incredible escape into nature. The coffee plantations and the cool breeze made it a spiritual experience."
            </p>
            <div className="flex flex-col items-center">
                <h5 className="text-amber-500 font-black uppercase tracking-[0.4em] text-sm md:text-lg">Kevin Martin</h5>
                <p className="text-stone-400 text-[10px] font-bold mt-2 uppercase tracking-widest">Adventure Enthusiast</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-[#0F4C45] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-[#1B7C72] rounded-[3rem] p-8 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
             <div className="text-center lg:text-left relative z-10 max-w-lg">
                <h2 className="text-3xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">Join the <br/><span className="text-amber-400 italic">Colony</span></h2>
                <p className="text-white/60 text-base md:text-xl font-light">Get exclusive travel guides direct to your inbox.</p>
             </div>
             <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center bg-white rounded-3xl p-2 relative z-10 shadow-2xl overflow-hidden">
                <input type="email" placeholder="Your Email Address" className="bg-transparent px-6 py-4 text-[#0F4C45] font-bold focus:outline-none w-full lg:w-80 text-sm md:text-lg" />
                <button className="bg-amber-400 text-white w-full sm:w-auto px-10 py-4 rounded-2xl hover:bg-[#0F4C45] transition-all shadow-xl font-black uppercase tracking-widest text-xs md:text-sm">
                   SUBSCRIBE
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
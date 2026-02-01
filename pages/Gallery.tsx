import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_IMAGES } from '../constants';
import { Maximize2, X, Camera, Compass, Sparkles, Plus, Image as ImageIcon, ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INITIAL_COUNT = 6;
const LOAD_MORE_STEP = 3;

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [filter, setFilter] = useState('All');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => ['All', 'Resort', 'Villas', 'Tents', 'Nature'], []);

  // Filtered and sliced images logic
  const visibleImages = useMemo(() => {
    // Note: Since constants.tsx doesn't have metadata, we use index logic for demo filtering
    return GALLERY_IMAGES.slice(0, visibleCount);
  }, [visibleCount]);

  const hasMore = visibleCount < GALLERY_IMAGES.length;

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + LOAD_MORE_STEP);
  }, []);

  // Accessibility: Handle Body Scroll & Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    
    if (selectedImg) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImg]);

  // GSAP Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context((self) => {
      if (!self.selector) return;

      // 1. Editorial Hero Entrance
      gsap.from(self.selector(".editorial-title"), {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      gsap.from(self.selector(".hero-subtitle"), {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });

      // 2. Parallax Grid Items
      const items = self.selector(".editorial-item");
      items.forEach((item: HTMLElement) => {
        const innerImg = item.querySelector("img");
        if (innerImg) {
          gsap.to(innerImg, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        }
        
        // Staggered reveal
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
          }
        });
      });
    }, containerRef);

    // Refresh triggers for Load More
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [visibleCount, filter]);

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://beehivewayanad.com/images/resort.jpg';
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FFF9F0] min-h-screen">
      {/* Editorial Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 bg-[#0F4C45] torn-bottom overflow-hidden">
        {/* Subtle background texture/pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full w-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full last:border-0" />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-amber-400"></div>
            <span className="text-amber-400 font-black uppercase tracking-[0.5em] text-[10px]">Highland Chronicles</span>
            <div className="h-px w-8 bg-amber-400"></div>
          </div>
          
          <h1 className="editorial-title text-5xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-12">
            ARTISANAL <br/> <span className="text-amber-400 italic font-script normal-case tracking-normal">Fragments</span>
          </h1>
          
          <p className="hero-subtitle text-white/70 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            A curated visual narrative of our coffee-scented sanctuaries, captured in the heart of Wayanad.
          </p>
          
          <div className="mt-16 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-amber-400 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Modern Filter Navigation */}
      <nav className="sticky top-[70px] md:top-[90px] z-40 py-8 bg-[#FFF9F0]/80 backdrop-blur-md border-b border-stone-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setVisibleCount(INITIAL_COUNT);
                }}
                className={`group relative text-[10px] md:text-xs font-black uppercase tracking-[0.4em] transition-all pb-2 ${
                  filter === cat ? 'text-amber-500' : 'text-[#0F4C45]/40 hover:text-[#0F4C45]'
                }`}
                aria-label={`Filter by ${cat}`}
              >
                {cat}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-500 ${filter === cat ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Editorial Grid Layout */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
            {visibleImages.map((img, idx) => {
              // Custom layout logic for editorial feel
              const isLarge = idx % 5 === 0;
              const isVertical = idx % 3 === 0 && !isLarge;
              
              return (
                <div 
                  key={`${img}-${idx}`} 
                  className={`editorial-item group relative overflow-hidden bg-stone-100 rounded-3xl md:rounded-[4rem] shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                    isLarge ? 'md:col-span-8 aspect-video' : isVertical ? 'md:col-span-4 aspect-[3/4]' : 'md:col-span-4 aspect-square'
                  }`}
                  onClick={() => setSelectedImg(img)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedImg(img); }}
                  aria-label="View larger capture"
                >
                  <img 
                    src={img} 
                    alt={`Beehive Story ${idx + 1}`} 
                    className="absolute -top-[10%] left-0 w-full h-[120%] object-cover" 
                    loading="lazy"
                    onError={handleImageError}
                  />
                  
                  {/* Subtle Interaction Layer */}
                  <div className="absolute inset-0 bg-[#0F4C45]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 backdrop-blur-[2px]">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-700">
                      <Maximize2 size={32} />
                    </div>
                    <div className="mt-6 text-center">
                       <p className="text-white text-[9px] font-black uppercase tracking-[0.5em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Fragment No.</p>
                       <p className="text-amber-400 font-script text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">0{idx + 1}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button - Editorial Style */}
          {hasMore && (
            <div className="mt-24 text-center">
              <button 
                onClick={handleLoadMore}
                className="group relative inline-flex flex-col items-center gap-6"
                aria-label="Load more artwork"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-[#0F4C45]/10 flex items-center justify-center text-[#0F4C45] transition-all duration-700 group-hover:bg-[#0F4C45] group-hover:text-white">
                  <ArrowDown className="w-8 h-8 md:w-10 md:h-10 animate-bounce" />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-[#0F4C45]/40 group-hover:text-[#0F4C45] transition-colors">Expand The Archives</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-24 bg-[#0F4C45] text-white torn-top relative overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] opacity-5 text-white pointer-events-none rotate-12">
          <ImageIcon size={400} />
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-2xl scale-75 md:scale-100">
            <Camera size={40} />
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Your lens <br/><span className="text-amber-400 italic font-script normal-case tracking-normal">awaits the Hive.</span></h2>
          <Link to="/booking" className="inline-block bg-white text-[#0F4C45] px-12 md:px-20 py-6 md:py-8 rounded-full font-black text-xs md:text-sm tracking-[0.5em] uppercase shadow-2xl hover:bg-amber-400 hover:text-white transition-all transform hover:-translate-y-2 active:scale-95">
            BOOK YOUR STAY
          </Link>
        </div>
      </section>

      {/* Immersive Lightbox Modal */}
      {selectedImg && (
        <div 
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-[#0A0D0C]/98 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in duration-500 backdrop-blur-2xl"
          onClick={() => setSelectedImg(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Header UI */}
          <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-10 pointer-events-none">
            <img src="https://beehivewayanad.com/images/logo.png" alt="BeeHive" className="h-6 md:h-10 brightness-0 invert opacity-40" />
            <button 
              className="pointer-events-auto w-14 h-14 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 hover:bg-amber-400 text-white transition-all flex items-center justify-center group"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
              aria-label="Close"
            >
              <X className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center pointer-events-none">
            <div className="relative pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImg} 
                className="max-w-full max-h-[85vh] object-contain rounded-2xl md:rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.8)] border-[6px] md:border-[12px] border-white/5" 
                alt="Selected fragment"
                onError={handleImageError}
              />
              
              {/* Image Footer Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-5 rounded-full shadow-2xl flex items-center gap-6 whitespace-nowrap">
                <Sparkles className="text-amber-400 w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-[#0F4C45] font-black uppercase tracking-[0.3em] text-[9px]">Hive Exclusive</span>
                  <span className="text-stone-400 text-[8px] font-bold uppercase tracking-widest">Wayanad, Kerala</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle instructions */}
          <div className="absolute bottom-12 text-white/20 font-black uppercase tracking-[0.5em] text-[8px]">
             Tap background to return
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

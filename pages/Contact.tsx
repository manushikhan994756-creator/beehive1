import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Compass, Globe } from 'lucide-react';
import { PHONE_NUMBERS, EMAIL } from '../constants';
import { gsap } from 'gsap';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-contact", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="bg-[#FFF9F0]">
      {/* Dynamic Hero */}
      <section className="relative h-[55vh] flex items-center bg-[#0F4C45] torn-bottom overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20 text-center">
          <h2 className="text-amber-400 font-script text-4xl mb-4">Connect</h2>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none">
            With <span className="text-amber-400 italic">Hive</span>
          </h1>
          <p className="text-white/50 text-sm md:text-lg mt-6 max-w-xl mx-auto font-light tracking-widest uppercase">Your gateway to the Western Ghats starts here.</p>
        </div>
        <div className="absolute top-1/2 right-[10%] opacity-10 hidden lg:block">
           <Compass size={300} strokeWidth={1} className="text-white rotate-12" />
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-4 space-y-8 md:space-y-10">
              <div className="reveal-contact bg-white p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-stone-100 hover:border-amber-400 transition-all group">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0F4C45] mb-4">Talk to Us</h3>
                <div className="text-stone-500 font-bold space-y-2">
                  <p className="tracking-widest text-lg">9656 359 111</p>
                  <p className="tracking-widest text-lg">9447 394 111</p>
                </div>
              </div>

              <div className="reveal-contact bg-white p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-stone-100 hover:border-amber-400 transition-all group">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0F4C45] mb-4">Connect</h3>
                <p className="text-stone-500 font-bold tracking-wide text-lg break-all">wayanadbeehive@gmail.com</p>
              </div>

              <div className="reveal-contact bg-[#0F4C45] p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl text-white group hover:bg-amber-400 transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 mb-8 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4">Meet Us</h3>
                <div className="space-y-4 text-white/70 font-light leading-relaxed">
                  <div>
                    <p className="text-amber-400 font-black uppercase text-[10px] tracking-[0.3em] mb-1">Region</p>
                    <p className="text-lg font-bold text-white">Karapuzha, Meenagadi, Wayanad</p>
                  </div>
                  <div>
                    <p className="text-amber-400 font-black uppercase text-[10px] tracking-[0.3em] mb-1">Specific Location</p>
                    <p className="text-lg font-bold text-white leading-snug">ABR SOLAR, <br/>Meenagadi, Wayanad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="reveal-contact bg-white p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] text-center border-4 border-amber-400 shadow-2xl h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mb-10">
                    <MessageSquare size={40} />
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black text-[#0F4C45] mb-6 leading-none">Message <br/><span className="text-amber-500 italic font-script text-3xl md:text-5xl">Sent!</span></h2>
                  <p className="text-stone-500 mb-10 text-lg font-light leading-relaxed">We will reach back across the mountains to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#0F4C45] font-black uppercase tracking-[0.3em] text-xs border-b-2 border-[#0F4C45] pb-1 hover:text-amber-500 hover:border-amber-500 transition-all">SEND ANOTHER</button>
                </div>
              ) : (
                <div className="reveal-contact bg-white p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-stone-50 relative overflow-hidden">
                  <h2 className="text-2xl md:text-5xl font-black text-[#0F4C45] mb-10 md:mb-12">Drop a <span className="text-amber-500 italic">Line</span></h2>
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Full Name</label>
                        <input required type="text" className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 transition-all" placeholder="Your Name" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Email Address</label>
                        <input required type="email" className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 transition-all" placeholder="hello@wander.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Subject</label>
                      <input required type="text" className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 transition-all" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Your Message</label>
                      <textarea required rows={4} className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 resize-none transition-all" placeholder="Your story..."></textarea>
                    </div>
                    <button type="submit" className="w-full md:w-auto bg-[#0F4C45] text-white px-12 py-5 md:py-6 rounded-full font-black text-xs md:text-sm tracking-[0.4em] hover:bg-amber-400 transition-all shadow-xl flex items-center justify-center gap-6 group">
                      SUBMIT MESSAGE <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Map Integration */}
      <section className="h-[500px] md:h-[650px] w-full bg-stone-100 relative torn-top">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.887268800262!2d76.1965141758925!3d11.59039404221884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60f18767fba6d%3A0x42d451324fd42699!2sBee%20Hive%20Staycations%20Wayanad!5e0!3m2!1sen!2sin!4v1715858000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1) brightness(0.9)' }} 
          allowFullScreen 
          loading="lazy" 
          title="Bee Hive Staycations Wayanad Location"
        ></iframe>
        <div className="absolute top-8 left-8 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-sm border border-stone-100 z-10 animate-in fade-in slide-in-from-left duration-1000">
           <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white"><Globe size={20} /></div>
              <h4 className="text-[#0F4C45] font-black text-lg">Visit the Hive</h4>
           </div>
           <p className="text-stone-500 text-sm font-light leading-relaxed mb-6">
             Find us in Meenagadi, the hub of Wayanad's natural beauty. We're situated near ABR Solar for easy navigation.
           </p>
           <a 
             href="https://www.google.com/maps/dir//Bee+Hive+Staycations+Wayanad" 
             target="_blank" 
             rel="noreferrer"
             className="text-xs font-black uppercase tracking-widest text-amber-500 flex items-center gap-2 hover:gap-3 transition-all"
           >
             Get Directions <Send size={14} />
           </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
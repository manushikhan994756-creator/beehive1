import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Compass, Globe } from 'lucide-react';
import { PHONE_NUMBERS, EMAIL } from '../constants';
import { gsap } from 'gsap';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
          <p className="text-white/50 text-sm md:text-lg mt-6 max-w-xl mx-auto font-light tracking-widest uppercase">
            Your gateway to the Western Ghats starts here.
          </p>
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
              {/* Phone Card */}
              <div className="reveal-contact bg-white p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-stone-100 hover:border-amber-400 transition-all duration-500 group hover:shadow-2xl">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0F4C45] mb-4">Talk to Us</h3>
                <div className="text-stone-500 font-bold space-y-2">
                  {PHONE_NUMBERS.map((number, index) => (
                    <p key={index} className="tracking-widest text-lg hover:text-amber-500 transition-colors duration-300">
                      {number}
                    </p>
                  ))}
                </div>
              </div>

              {/* Email Card */}
              <div className="reveal-contact bg-white p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-stone-100 hover:border-amber-400 transition-all duration-500 group hover:shadow-2xl">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0F4C45] mb-4">Connect</h3>
                <p className="text-stone-500 font-bold tracking-wide text-lg break-all hover:text-amber-500 transition-colors duration-300">
                  {EMAIL}
                </p>
              </div>

              {/* Location Card - Fixed Colors */}
              <div className="reveal-contact bg-gradient-to-br from-[#0F4C45] to-[#1A5C52] p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl text-white group hover:from-amber-500 hover:to-amber-600 transition-all duration-500 hover:shadow-2xl border border-white/10">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-amber-300 mb-8 group-hover:bg-white/25 group-hover:text-white transition-all duration-500 shadow-inner">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-6">Meet Us</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-amber-300 font-black uppercase text-[10px] tracking-[0.3em] mb-2 group-hover:text-amber-100 transition-colors duration-500">
                      Region
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-white transition-colors duration-500 leading-relaxed">
                      Karapuzha, Meenagadi, Wayanad
                    </p>
                  </div>
                  <div>
                    <p className="text-amber-300 font-black uppercase text-[10px] tracking-[0.3em] mb-2 group-hover:text-amber-100 transition-colors duration-500">
                      Specific Location
                    </p>
                    <p className="text-lg font-bold text-white leading-snug group-hover:text-white transition-colors duration-500">
                      ABR SOLAR, <br/>Meenagadi, Wayanad
                    </p>
                  </div>
                </div>
                {/* Subtle map pin decoration */}
                <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <MapPin size={40} />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="reveal-contact bg-gradient-to-br from-white to-amber-50 p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] text-center border-4 border-amber-400 shadow-2xl h-full flex flex-col items-center justify-center hover:shadow-3xl transition-shadow duration-500">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-amber-500 mb-10 shadow-lg">
                    <MessageSquare size={40} />
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black text-[#0F4C45] mb-6 leading-none">
                    Message <br/>
                    <span className="text-amber-500 italic font-script text-3xl md:text-5xl">Sent!</span>
                  </h2>
                  <p className="text-stone-500 mb-10 text-lg font-light leading-relaxed max-w-md">
                    We will reach back across the mountains to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="text-[#0F4C45] font-black uppercase tracking-[0.3em] text-xs border-b-2 border-[#0F4C45] pb-1 hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <div className="reveal-contact bg-white p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-stone-50 relative overflow-hidden hover:shadow-3xl transition-shadow duration-500">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-20"></div>
                  <h2 className="text-2xl md:text-5xl font-black text-[#0F4C45] mb-10 md:mb-12 relative z-10">
                    Drop a <span className="text-amber-500 italic">Line</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 transition-all duration-300 hover:border-amber-300"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 transition-all duration-300 hover:border-amber-300"
                          placeholder="hello@wander.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
                        Subject
                      </label>
                        <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 transition-all duration-300 hover:border-amber-300"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full text-lg md:text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 resize-none transition-all duration-300 hover:border-amber-300"
                        placeholder="Your story..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full md:w-auto bg-gradient-to-r from-[#0F4C45] to-[#1A5C52] text-white px-12 py-5 md:py-6 rounded-full font-black text-xs md:text-sm tracking-[0.4em] hover:from-amber-500 hover:to-amber-600 transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center justify-center gap-6 group"
                    >
                      SUBMIT MESSAGE 
                      <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
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
        />
        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-sm border border-white/20 z-10 animate-in fade-in slide-in-from-left duration-1000 hover:shadow-3xl transition-shadow duration-500">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <Globe size={20} />
            </div>
            <h4 className="text-[#0F4C45] font-black text-lg">Visit the Hive</h4>
          </div>
          <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
            Find us in Meenagadi, the hub of Wayanad's natural beauty. We're situated near ABR Solar for easy navigation.
          </p>
          <a 
            href="https://www.google.com/maps/dir//Bee+Hive+Staycations+Wayanad" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs font-black uppercase tracking-widest text-amber-500 hover:text-amber-600 flex items-center gap-2 hover:gap-3 transition-all duration-500 group"
          >
            Get Directions 
            <Send className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

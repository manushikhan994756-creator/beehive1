import React, { useState, useEffect, useRef } from 'react';
import { Send, Calendar, Users, MapPin, Mail, Phone, Plane } from 'lucide-react';
import { gsap } from 'gsap';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-card", {
        y: 100,
        opacity: 0,
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

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center container mx-auto px-8 text-center bg-[#FFF9F0]">
        <div className="w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center text-white mb-12 shadow-2xl animate-bounce">
           <Plane size={48} />
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-[#0F4C45] mb-8 leading-none">Inquiry <br/><span className="italic text-amber-500 font-script text-4xl md:text-6xl">Received!</span></h2>
        <p className="text-stone-500 max-w-md mx-auto mb-12 text-lg font-light leading-relaxed">
          Your travel plans are winging their way to our concierge. We'll be in touch within 24 hours to secure your spot at the Hive.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-[#0F4C45] text-white px-12 py-5 rounded-full font-black text-xs tracking-widest hover:bg-amber-400 transition-all shadow-xl"
        >
          ANOTHER BOOKING
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-[#FFF9F0]">
      {/* Energetic Hero */}
      <section className="relative h-[50vh] flex items-center bg-[#0F4C45] torn-bottom overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-20 text-center">
          <h2 className="text-amber-400 font-script text-4xl mb-4">Secure</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
            The <span className="text-amber-400 italic font-script text-4xl md:text-7xl">Reservation</span>
          </h1>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 px-6 -mt-32 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="form-card bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Field */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
                    <Users size={14} /> Full Name
                  </label>
                  <input required type="text" className="w-full text-2xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 placeholder:opacity-30" placeholder="Adventurer Name" />
                </div>
                {/* Field */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
                    <Phone size={14} /> Mobile
                  </label>
                  <input required type="tel" className="w-full text-2xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 placeholder:opacity-30" placeholder="+91..." />
                </div>
                {/* Field */}
                <div className="md:col-span-2 space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
                    <Mail size={14} /> Email Address
                  </label>
                  <input required type="email" className="w-full text-2xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 placeholder:opacity-30" placeholder="hello@wander.com" />
                </div>
                {/* Field */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
                    <Calendar size={14} /> Check In
                  </label>
                  <input required type="date" className="w-full text-xl font-bold text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2" />
                </div>
                {/* Field */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
                    <Calendar size={14} /> Check Out
                  </label>
                  <input required type="date" className="w-full text-xl font-bold text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2" />
                </div>
                {/* Field */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
                    <MapPin size={14} /> Suite Type
                  </label>
                  <select className="w-full text-xl font-bold text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 cursor-pointer">
                    <option>Family Room (Villa)</option>
                    <option>Private Cottage</option>
                    <option>Tent Stay</option>
                  </select>
                </div>
                {/* Field */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
                    <Users size={14} /> Guests
                  </label>
                  <select className="w-full text-xl font-bold text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 cursor-pointer">
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>Family Group</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Special Notes</label>
                <textarea rows={4} className="w-full text-xl font-serif text-[#0F4C45] border-b-2 border-stone-100 focus:border-amber-400 bg-transparent outline-none py-2 resize-none placeholder:opacity-30" placeholder="Any special requests?"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0F4C45] text-white p-10 rounded-full font-black text-sm tracking-[0.4em] hover:bg-amber-400 transition-all shadow-2xl flex items-center justify-center gap-6 group">
                SUBMIT RESERVATION <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
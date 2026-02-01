import React from 'react';
import { TARIFFS, SPECIAL_PACKAGES } from '../constants';
import { Check, Star } from 'lucide-react';

const Tariff: React.FC = () => {
  return (
    <div className="bg-[#FFF9F0] pt-32 pb-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <h3 className="text-amber-500 font-script text-3xl mb-2">Price For</h3>
          <h1 className="text-5xl md:text-7xl font-black text-[#0F4C45]">Travel The World</h1>
        </div>

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {TARIFFS.map((t, idx) => (
            <div key={t.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-100">
              <div className="h-64 overflow-hidden relative">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-amber-400 flex mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <h3 className="text-white text-xl font-black uppercase tracking-widest">{t.name}</h3>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-4xl font-black text-[#0F4C45]">₹{t.price.replace('/-', '')}</span>
                  <span className="text-stone-400 text-xs font-bold uppercase mb-1 tracking-widest">/ Night</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {t.details.split('. ').map((detail, i) => (
                    <li key={i} className="flex items-start gap-4 text-stone-500 text-sm">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {detail}
                    </li>
                  ))}
                  <li className="flex items-start gap-4 text-stone-500 text-sm">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {t.capacity}
                  </li>
                </ul>

                <button className="w-full py-4 rounded-full font-black text-[10px] tracking-[0.3em] uppercase border-2 border-[#0F4C45] text-[#0F4C45] hover:bg-[#0F4C45] hover:text-white transition-all">
                  BOOK THIS PLAN
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Packages Table */}
        <div className="bg-[#0F4C45] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl font-black mb-16 text-center">Holiday <span className="text-amber-400 italic">Packages</span></h2>
              <div className="space-y-8">
                {SPECIAL_PACKAGES.map((pkg, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                      <div>
                        <h4 className="text-2xl font-black text-amber-400 mb-2">{pkg.type}</h4>
                        <p className="text-white/60 text-sm max-w-xl">{pkg.inclusions}</p>
                      </div>
                      <div className="flex gap-8">
                         <div className="text-center">
                            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">2N / 3D</p>
                            <p className="text-2xl font-black">₹{pkg.price2n3d.replace('/-', '')}</p>
                         </div>
                         <div className="text-center">
                            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">3N / 4D</p>
                            <p className="text-2xl font-black">₹{pkg.price3n4d.replace('/-', '')}</p>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
           <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Tariff;
import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { clinicData } from '../data/clinic';
import DynamicIcon from './DynamicIcon';

export const WhyChooseUs = () => {
  const { whyChooseUs } = clinicData;
  const [isPaused, setIsPaused] = useState(false);

  // 4 identical sets so shifting -50% shifts exactly 2 full sets seamlessly on all screens up to 4K
  const infiniteItems = [...whyChooseUs, ...whyChooseUs, ...whyChooseUs, ...whyChooseUs];

  return (
    <section id="why-us" className="py-20 clinic-gradient-bg overflow-hidden">
      <div className="clinic-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Shield className="w-3.5 h-3.5 text-emerald-700" />
            <span>Our Commitments</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Why Patients Trust Our Practice
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus on creating a clinical experience that combines medical thoroughness with human compassion.
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="group-marquee relative">
          <div 
            className="relative rounded-3xl bg-white/80 border border-emerald-100/90 shadow-sm backdrop-blur-xs p-4 sm:p-6 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Subtle Left and Right Gradient Edge Masks for soft fade in/out */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white/95 to-transparent z-10 rounded-l-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white/95 to-transparent z-10 rounded-r-3xl" />

            {/* Marquee Track: Seamless Infinite Loop with strictly locked vertical overflow */}
            <div className="overflow-hidden w-full">
              <div
                className={`flex gap-6 py-4 px-2 items-stretch ${
                  isPaused ? 'animate-marquee pause-animation' : 'animate-marquee'
                }`}
              >
                {infiniteItems.map((item, idx) => (
                  <div
                    key={`${item.title}-${idx}`}
                    className="group relative flex flex-col justify-between w-[310px] sm:w-[350px] min-h-[280px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-[#0f4c3a] group-hover:text-emerald-300 transition-colors duration-300 shadow-2xs">
                        <DynamicIcon name={item.iconName} className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0f4c3a] transition-colors line-clamp-2 h-[54px] flex items-center">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Trust Pillar Highlight */}
                    <div className="pt-4 mt-4 border-t border-slate-50 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Verified Practice Standard</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

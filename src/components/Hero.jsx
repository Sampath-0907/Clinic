import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Heart, Clock, UserCheck, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinic';
import ImagePlaceholder from './ImagePlaceholder';

export const Hero = () => {
  const { hero } = clinicData;

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 clinic-gradient-bg">
      {/* Decorative Soft Green Background Blurs */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="clinic-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-6 max-w-4xl">
              {hero.headline}
            </h1>

            {/* Subheadline / Welcome Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-3xl leading-relaxed">
              {hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#0f4c3a] to-[#145d47] hover:from-[#0a382a] hover:to-[#0f4d3a] shadow-lg shadow-emerald-950/15 hover:shadow-xl transition-all duration-200 active:scale-95 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <Calendar className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-emerald-300 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-[#0f4c3a] bg-white hover:bg-emerald-50/80 border border-emerald-200/80 shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <span>{hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-emerald-100">
              {hero.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/60 backdrop-blur-xs border border-emerald-50">
                  <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 shrink-0">
                    {idx === 0 && <UserCheck className="w-4 h-4" />}
                    {idx === 1 && <Clock className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{item.label}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background Shape Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 to-teal-500/20 rounded-3xl transform rotate-1 scale-105 -z-10" />

            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-lg xl:max-w-xl bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-emerald-100/80">
              
              {/* Main Visual or Placeholder Container */}
              <div className="relative overflow-hidden rounded-2xl bg-emerald-50/60 aspect-4/3 flex items-center justify-center">
                {hero.heroImage ? (
                  <img
                    src={hero.heroImage}
                    alt="Clinic Medical Care"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImagePlaceholder
                    src={null}
                    alt="Clinic Care"
                    label="[Clinic Hero Image]"
                    type="hero"
                    className="w-full h-full border-none shadow-none bg-transparent"
                  />
                )}

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-emerald-100 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Consultations Open</span>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0f4c3a] text-emerald-300 flex items-center justify-center shadow-xs">
                    <Heart className="w-5 h-5 fill-emerald-300/30" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Patient-First Ethics</p>
                    <p className="text-[11px] text-slate-500">Evidence-based clinical care</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-800 text-xs font-semibold bg-white px-2.5 py-1 rounded-lg border border-emerald-100">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Licensed</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

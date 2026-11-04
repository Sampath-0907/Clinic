import React from 'react';
import { CheckCircle2, Stethoscope, ShieldCheck, Clock, Users } from 'lucide-react';
import { clinicData } from '../data/clinic';
import ImagePlaceholder from './ImagePlaceholder';

export const About = () => {
  const { about } = clinicData;

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-white border-y border-slate-200/70">
      {/* Prominent Atmospheric Background with Soft Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/about-clinic.jpg"
          alt="Clinic Care Facility"
          className="w-full h-full object-cover object-center opacity-15 filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      </div>

      {/* Ambient blurs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="clinic-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Multi-Image Showcase with Overlapping Elements */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Accent Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/60 via-blue-100/40 to-amber-100/50 rounded-3xl -z-10 transform -rotate-1 shadow-lg" />

              {/* Primary Image Container */}
              <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden group">
                <div className="relative overflow-hidden rounded-2xl aspect-4/3 sm:aspect-16/11">
                  <img
                    src={about.aboutImage || "/about-clinic.jpg"}
                    alt="About our clinic facility"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating chip on top of image */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 border border-white/60 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0145f2]" />
                    <span>Pragati Nagar, Hyderabad</span>
                  </div>
                </div>
              </div>

              {/* Floating Experience & Empathy Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-2 bg-gradient-to-r from-[#061234] to-[#091E5A] text-white p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-3.5 border border-blue-400/30 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0145f2] to-[#1e60ff] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                    {about.experienceYearsBadge || "Excellence & Empathy"}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5 font-medium">
                    Evidence-Based Clinical Practice
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Approach & Highlights in Frosted Glass Card */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-blue-100 shadow-xl">

            {/* Section Tag */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0145f2] text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0145f2]" />
              <span>{about.badge}</span>
            </span>

            {/* Title / Quote */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-6 border-l-4 border-[#0145f2] pl-4 sm:pl-5 italic">
              {about.title}
            </h2>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed font-normal">
              {about.missionText}
            </p>

            {/* Approach Statement */}
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal">
              {about.approachText}
            </p>

            {/* Key Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {about.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0145f2] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Anchor */}
            <a
              href="#doctors"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0145f2] to-[#1e60ff] hover:from-[#0031b8] hover:to-[#0145f2] shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0145f2]"
            >
              <Users className="w-4 h-4 text-blue-200" />
              <span>Meet Our Medical Practitioners</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

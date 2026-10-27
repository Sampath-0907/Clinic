import React from 'react';
import { CheckCircle2, Stethoscope, ShieldCheck, Clock, Users } from 'lucide-react';
import { clinicData } from '../data/clinic';
import ImagePlaceholder from './ImagePlaceholder';

export const About = () => {
  const { about } = clinicData;

  return (
    <section id="about" className="py-20 bg-white border-y border-emerald-100/60">
      <div className="clinic-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image / Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative">
              {/* Background Accent Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100/70 to-teal-50 rounded-3xl -z-10 transform -rotate-1" />
              
              <div className="bg-white p-3 rounded-2xl shadow-lg border border-emerald-100">
                {about.aboutImage ? (
                  <img
                    src={about.aboutImage}
                    alt="About our clinic facility"
                    className="w-full h-80 sm:h-96 object-cover rounded-xl"
                  />
                ) : (
                  <ImagePlaceholder
                    src={null}
                    alt="Clinic facility and consultation room"
                    label="[Clinic Facility Photo]"
                    type="about"
                    aspectRatio="aspect-4/3"
                    className="w-full h-80 sm:h-96"
                  />
                )}
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-4 bg-[#0f4c3a] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-emerald-600/40">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
                    {about.experienceYearsBadge}
                  </p>
                  <p className="text-sm font-bold text-white">
                    Patient-First Standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Approach & Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            {/* Section Tag */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              {about.badge}
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-6">
              {about.title}
            </h2>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed">
              {about.missionText}
            </p>

            {/* Approach Statement */}
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
              {about.approachText}
            </p>

            {/* Key Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {about.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/60">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Anchor */}
            <a
              href="#doctors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0f4c3a] hover:bg-[#093629] shadow-sm transition-all duration-200 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              <Users className="w-4 h-4 text-emerald-300" />
              <span>Meet Our Medical Practitioners</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

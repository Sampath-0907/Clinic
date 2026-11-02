import React from 'react';
import { CheckCircle2, Stethoscope, ShieldCheck, Clock, Users } from 'lucide-react';
import { clinicData } from '../data/clinic';
import ImagePlaceholder from './ImagePlaceholder';

export const About = () => {
  const { about } = clinicData;

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/70">
      <div className="clinic-container">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image / Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative">
              {/* Background Accent Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/70 to-slate-100 rounded-3xl -z-10 transform -rotate-1" />

              <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-100">
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
              <div className="absolute -bottom-5 -right-3 sm:right-4 bg-[#061234] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-[#0145f2]/40">
                <div className="w-12 h-12 rounded-xl bg-[#0145f2]/20 text-[#0145f2] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                    {about.experienceYearsBadge}
                  </p>
                  <p className="text-sm font-bold text-white">
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Approach & Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">

            {/* Section Tag */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0145f2] text-xs font-semibold uppercase tracking-wider mb-4">
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
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#0145f2] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Anchor */}
            <a
              href="#doctors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0145f2] hover:bg-[#0031b8] shadow-md shadow-blue-600/20 transition-all duration-200 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0145f2]"
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

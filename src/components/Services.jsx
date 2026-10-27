import React, { useState, useRef } from 'react';
import { ArrowRight, Check, Sparkles, Stethoscope, Brain, HeartPulse, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinic';
import DynamicIcon from './DynamicIcon';

// Curated category badges matching Dr. Soujanya's Mother and Mind Clinic theme
const categoryMap = {
  'antenatal-pregnancy': 'Maternal Care',
  'pcod-menstrual-health': 'Women\'s Wellness',
  'infertility-gynae-consult': 'Fertility Care',
  'gynae-surgeries-procedures': 'Advanced Surgeries',
  'cancer-screening-vaccines': 'Preventive Screening',
  'depression-mood-care': 'Mood & Emotions',
  'anxiety-panic-phobias': 'Anxiety & Panic',
  'insomnia-sleep-health': 'Sleep Medicine',
  'counselling-psychotherapy': 'Therapy & Counselling',
  'neuropsychiatry-addiction': 'Neuropsychiatry',
};

export const Services = () => {
  const { services, clinicalDirectory } = clinicData;
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'gynaecology' | 'psychiatry'
  const scrollContainerRef = useRef(null);

  // Filtered services based on user tab selection
  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter((s) => s.department === activeFilter);

  // Repeat items for continuous infinite marquee
  const infiniteServices = [...filteredServices, ...filteredServices, ...filteredServices];

  return (
    <section id="services" className="py-20 clinic-gradient-bg overflow-hidden">
      <div className="clinic-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Comprehensive Medical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Integrated Mother & Mind Care
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Personalized, ethical, and compassionate outpatient clinical services spanning women's health, obstetrics, and senior psychiatric care.
          </p>

          {/* Department Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#0f4c3a] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-emerald-50 border border-slate-200/80'
              }`}
            >
              All Services ({services.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('gynaecology')}
              className={`inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'gynaecology'
                  ? 'bg-rose-700 text-white shadow-md'
                  : 'bg-white text-rose-800 hover:bg-rose-50 border border-rose-200/80'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Gynaecology & Obstetrics (Dr. Soujanya)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('psychiatry')}
              className={`inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'psychiatry'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-200/80'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Psychiatry & Mind Care (Dr. Vivaswan)</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            INFINITE MARQUEE CAROUSEL WITH SMOOTH MOVING TRACK
           ========================================================================= */}
        <div className="group-marquee relative mb-16 sm:mb-20">
          
          {/* Framed Container */}
          <div 
            className="relative rounded-3xl bg-white/80 border border-emerald-100/90 shadow-sm backdrop-blur-xs p-4 sm:p-6 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Subtle Left and Right Gradient Edge Masks for soft fade in/out */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white/95 to-transparent z-10 rounded-l-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white/95 to-transparent z-10 rounded-r-3xl" />

            {/* Marquee Track: Seamless Infinite Loop */}
            <div
              ref={scrollContainerRef}
              className="overflow-hidden w-full"
            >
              <div
                className={`flex gap-6 py-3 px-3 ${
                  isPaused ? 'animate-marquee pause-animation' : 'animate-marquee'
                }`}
              >
                {infiniteServices.map((service, index) => {
                  const categoryTag = categoryMap[service.id] || service.departmentLabel || 'Clinical Specialty';
                  const isGynae = service.department === 'gynaecology';

                  return (
                    <div
                      key={`${service.id}-${index}`}
                      className="group relative flex flex-col justify-between w-[310px] sm:w-[350px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5"
                    >
                      <div>
                        {/* Top Row: Category Pill & Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border ${
                            isGynae 
                              ? 'bg-rose-50 text-rose-800 border-rose-100'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-100'
                          }`}>
                            {categoryTag}
                          </span>
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-2xs ${
                            isGynae
                              ? 'bg-rose-50 text-rose-700 group-hover:bg-rose-700 group-hover:text-white'
                              : 'bg-emerald-50 text-emerald-700 group-hover:bg-[#0f4c3a] group-hover:text-emerald-300'
                          }`}>
                            <DynamicIcon name={service.iconName} className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Service Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0f4c3a] transition-colors line-clamp-2 h-[54px] flex items-center">
                          {service.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2">
                          {service.shortDescription}
                        </p>

                        {/* Bullet Highlights from brochure */}
                        {service.features && (
                          <div className="space-y-2 mb-6 pt-3.5 border-t border-slate-100">
                            {service.features.slice(0, 3).map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                <Check className={`w-3.5 h-3.5 shrink-0 ${isGynae ? 'text-rose-500' : 'text-emerald-500'}`} />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            COMPLETE BROCHURE SERVICES DIRECTORY (GYNAECOLOGY & PSYCHIATRY)
           ========================================================================= */}
        {clinicalDirectory && (
          <div className="relative">
            {/* Directory Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Complete Clinical Directory</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                All Conditions Treated & Services Provided
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Comprehensive outpatient clinical care offered across our two specialized departments.
              </p>
            </div>

            {/* 2-Column Clinical Pamphlet Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Column 1: Gynaecology Services (Dr. Soujanya Banka) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/70 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

                <div>
                  {/* Department Badge & Title */}
                  <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-rose-100/80">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200/60 shadow-2xs">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        {clinicalDirectory.gynaecology.category}
                      </h4>
                      <p className="text-xs font-semibold text-rose-700">
                        {clinicalDirectory.gynaecology.doctorName} • {clinicalDirectory.gynaecology.doctorTitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    Specialized women's reproductive health, normal deliveries, minimally invasive laparoscopic surgeries, fertility evaluation, and preventive screening.
                  </p>

                  {/* Brochure Items Grid (2 columns of badges) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {clinicalDirectory.gynaecology.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-rose-50/40 border border-rose-100 text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-rose-100/80">
                  <span className="text-xs font-medium text-rose-800/80">
                    16 comprehensive gynaecological procedures & consultations
                  </span>
                </div>
              </div>

              {/* Column 2: Psychiatry Services (Dr. Vivaswan Boorla) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/70 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

                <div>
                  {/* Department Badge & Title */}
                  <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-emerald-100/80">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-2xs">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        {clinicalDirectory.psychiatry.category}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-800">
                        {clinicalDirectory.psychiatry.doctorName} • {clinicalDirectory.psychiatry.doctorTitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    Senior clinical psychiatric consultation, evidence-based psychotherapy, sleep medicine, de-addiction protocols, crisis support, and cognitive evaluations.
                  </p>

                  {/* Brochure Items Grid (2 columns of badges) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {clinicalDirectory.psychiatry.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50/40 border border-emerald-100 text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-100/80">
                  <span className="text-xs font-medium text-emerald-800/80">
                    23 specialized psychiatric & mental wellness conditions
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Bottom Notice */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Need a clinical consultation or second opinion not listed above?{' '}
            <a href="#contact" className="text-[#0f4c3a] font-semibold underline underline-offset-4 hover:text-emerald-600">
              Inquire with our clinic reception
            </a>{' '}
            or call our direct office line.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;

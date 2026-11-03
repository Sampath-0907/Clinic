import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Heart, Clock, UserCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { clinicData } from '../data/clinic';
import ImagePlaceholder from './ImagePlaceholder';

export const Hero = () => {
  const { hero } = clinicData;
  const slides = hero.slides || [
    {
      id: "hospital",
      image: hero.heroImage || "/hero-clinic.jpg",
      alt: "Clinic Care",
      badge: "Consultations Open",
      captionTitle: "Patient-First Ethics",
      captionSubtitle: "Evidence-based clinical care",
      captionBadge: "Licensed",
      objectPosition: "center",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  // Auto-play slideshow every 3.8 seconds
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Touch swipe support for mobile devices
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (diff < -40) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setTouchStartX(null);
  };

  const activeSlide = slides[currentSlide] || slides[0];

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 clinic-gradient-bg">
      {/* Decorative Soft Blue & Cloud Background Blurs */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#0145f2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="clinic-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-blue-200/90 shadow-xs mb-6 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-linear-to-r from-[#061234] to-[#0145f2] text-white text-[10px] sm:text-xs font-bold tracking-wide uppercase shadow-2xs">
                <Sparkles className="w-3 h-3 text-blue-200" />
                <span>{hero.badgeTag || "Speciality Clinic"}</span>
              </span>
              <span className="font-semibold text-slate-800 pr-1">
                {hero.badge}
              </span>
            </div>

            {/* Official Clinic Logo (Replacing previous text headline) */}
            <div className="mb-6 max-w-2xl w-full">
              <img
                src={clinicData.bannerLogoUrl || "/Clinic Logo 2.png"}
                alt={clinicData.clinicName}
                className="w-auto max-w-full h-auto max-h-28 sm:max-h-36 md:max-h-44 lg:max-h-52 object-contain object-left drop-shadow-xs"
              />
              <h1 className="sr-only">
                {clinicData.clinicName}
              </h1>
            </div>

            {/* Subheadline / Welcome Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-3xl leading-relaxed">
              {hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#0145f2] to-[#1e60ff] hover:from-[#0031b8] hover:to-[#0145f2] shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all duration-200 active:scale-95 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0145f2]"
              >
                <Calendar className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
                <span>{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-blue-200 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-[#0145f2] bg-white hover:bg-blue-50/80 border border-blue-200/80 shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0145f2]"
              >
                <span>{hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-slate-200/80">
              {hero.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-xs border border-slate-200/70 shadow-2xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0145f2] shrink-0">
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

          {/* Right Hero Visual Showcase (With Smooth Sliding Carousel) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background Shape Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0145f2]/15 to-blue-400/20 rounded-3xl transform rotate-1 scale-105 -z-10" />

            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-lg xl:max-w-xl bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-blue-100">
              
              {/* Main Visual Carousel Container - Dimensions Preserved Exactly (aspect-4/3) */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-slate-100/80 aspect-4/3 flex items-center justify-center group/slider select-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Horizontal Sliding Track */}
                <div 
                  className="flex w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, idx) => (
                    <div key={idx} className="relative w-full h-full shrink-0">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: slide.objectPosition || 'center' }}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}
                </div>

                {/* Floating Top Badge with Dynamic Title */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-blue-100 flex items-center gap-1.5 text-xs font-semibold text-slate-800 transition-all duration-300 pointer-events-none z-10">
                  <span className="w-2 h-2 rounded-full bg-[#0145f2] animate-pulse" />
                  <span>{activeSlide.badge || "Consultations Open"}</span>
                </div>

                {/* Left & Right Subtle Navigation Controls on Hover */}
                {slides.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer shadow-md focus:opacity-100 z-10"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer shadow-md focus:opacity-100 z-10"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Reference Style Indicator: Elongated Active Pill + Circular Inactive Dots */}
                {slides.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md z-10 shadow-sm">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          currentSlide === idx
                            ? 'w-7 h-2 bg-white shadow-xs'
                            : 'w-2 h-2 bg-white/50 hover:bg-white/90'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Floating Stat Card */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-slate-50 border border-blue-100 flex items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0145f2] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Heart className="w-5 h-5 fill-white/30" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 transition-all duration-300">
                      {activeSlide.captionTitle || "Patient-First Ethics"}
                    </p>
                    <p className="text-[11px] text-slate-500 transition-all duration-300">
                      {activeSlide.captionSubtitle || "Evidence-based clinical care"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#0145f2] text-xs font-semibold bg-white px-2.5 py-1 rounded-lg border border-blue-100 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#0145f2]" />
                  <span>{activeSlide.captionBadge || "Licensed"}</span>
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

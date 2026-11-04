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
    <section id="home" className="relative overflow-hidden py-12 lg:py-20 min-h-[90vh] flex items-center bg-slate-900">
      {/* Prominent Clinic Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <img
          src="/hero-clinic.jpg"
          alt="Dr. Soujanya's Mother and Mind Care Clinic Facility"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Modern Gradient Scrim so the clinic background is clearly visible while content is 100% readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/45 sm:from-slate-950/80 sm:via-slate-950/60 sm:to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
      </div>

      <div className="clinic-container relative z-10 w-full py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Content Column - Framed in modern luminous glass card */}
          <div className="lg:col-span-7 flex flex-col items-start text-left p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-xl border border-white/15 shadow-2xl">
            
            {/* Top Pill Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs mb-6 text-xs sm:text-sm text-white">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linear-to-r from-[#0145f2] to-[#1e60ff] text-white text-[10px] sm:text-xs font-bold tracking-wide uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                <span>{hero.badgeTag || "Speciality Clinic"}</span>
              </span>
              <span className="font-semibold text-slate-100 pr-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>{hero.badge}</span>
              </span>
            </div>

            {/* Official Clinic Logo */}
            <div className="mb-6 max-w-2xl w-full p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-lg">
              <img
                src={clinicData.bannerLogoUrl || "/Clinic Logo 2.png"}
                alt={clinicData.clinicName}
                className="w-auto max-w-full h-auto max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-48 object-contain object-left drop-shadow-xs"
              />
              <h1 className="sr-only">
                {clinicData.clinicName}
              </h1>
            </div>

            {/* Subheadline / Welcome Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-3xl leading-relaxed font-normal">
              {hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#0145f2] to-[#1e60ff] hover:from-[#0031b8] hover:to-[#0145f2] shadow-lg shadow-blue-600/40 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all duration-200 active:scale-95 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0145f2]"
              >
                <Calendar className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
                <span>{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-blue-200 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 shadow-xs hover:border-white/40 transition-all duration-200 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full pt-6 border-t border-white/15">
              {hero.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xs hover:bg-white/15 transition-all">
                  <div className="p-2.5 rounded-xl bg-[#0145f2]/40 text-blue-300 shrink-0 border border-blue-400/30">
                    {idx === 0 && <UserCheck className="w-4 h-4" />}
                    {idx === 1 && <Clock className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.label}</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Visual Showcase (With Smooth Sliding Carousel) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background Shape Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0145f2]/30 via-blue-400/20 to-transparent rounded-3xl transform rotate-1 scale-105 -z-10 blur-xs" />

            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-lg xl:max-w-xl bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/20">
              
              {/* Main Visual Carousel Container - Dimensions Preserved Exactly (aspect-4/3) */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-slate-900 aspect-4/3 flex items-center justify-center group/slider select-none shadow-inner border border-white/10"
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
              <div className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0145f2] text-white flex items-center justify-center shadow-xs shrink-0">
                    <Heart className="w-5 h-5 fill-white/30" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white transition-all duration-300">
                      {activeSlide.captionTitle || "Patient-First Ethics"}
                    </p>
                    <p className="text-[11px] text-slate-300 transition-all duration-300">
                      {activeSlide.captionSubtitle || "Evidence-based clinical care"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-blue-200 text-xs font-semibold bg-white/10 border border-white/20 px-2.5 py-1 rounded-lg shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-blue-300" />
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

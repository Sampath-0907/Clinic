import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const Testimonials = () => {
  const { testimonials } = clinicData;
  const [currentIndex, setCurrentIndex] = useState(0);

  // If client opted to omit testimonials, do not render the section
  if (!testimonials?.showSection || !testimonials?.items?.length) {
    return null;
  }

  const items = testimonials.items;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            {testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {testimonials.subtitle}
          </p>

          {/* Placeholder Admin Note */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-medium">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{testimonials.disclaimer}</span>
          </div>
        </div>

        {/* Testimonials Carousel & Cards */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Active Testimonial Card */}
          <div className="bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm relative">
            <Quote className="w-12 h-12 text-emerald-200 absolute top-6 right-6 opacity-60" />

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(items[currentIndex].rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
              {items[currentIndex].quote}
            </blockquote>

            {/* Author & Visit Tag */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0f4c3a] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {items[currentIndex].author.replace(/[\[\]]/g, '').slice(0, 2) || 'PT'}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {items[currentIndex].author}
                  </h4>
                  <p className="text-xs text-emerald-800 font-medium">
                    {items[currentIndex].visitType}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="p-2.5 rounded-full bg-white border border-emerald-200 text-slate-700 hover:bg-emerald-50 hover:text-[#0f4c3a] transition-colors shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="p-2.5 rounded-full bg-white border border-emerald-200 text-slate-700 hover:bg-emerald-50 hover:text-[#0f4c3a] transition-colors shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#0f4c3a]'
                    : 'w-2.5 bg-emerald-200 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;

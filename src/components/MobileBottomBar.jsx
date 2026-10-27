import React from 'react';
import { clinicData } from '../data/clinic';

export const MobileBottomBar = ({ onSelectAppointment }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppointmentClick = (e) => {
    e.preventDefault();
    if (onSelectAppointment) {
      onSelectAppointment();
    } else {
      scrollToSection('appointment');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    scrollToSection('home');
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] rounded-t-3xl transition-transform duration-300"
    >
      <div className="max-w-md mx-auto px-6 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+10px)] flex items-center justify-between">
        
        {/* 1. Appointment Button (Toy Doctor Icon) */}
        <button
          type="button"
          onClick={handleAppointmentClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-1 text-slate-700 hover:text-[#0f4c3a] active:scale-90 transition-all cursor-pointer group"
          aria-label="Book an appointment"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100/80 p-0.5 flex items-center justify-center shadow-sm border border-emerald-200/60 group-hover:scale-105 group-hover:shadow-md transition-all overflow-hidden">
            <img
              src="/doctor-toy.jpg"
              alt="Doctor Appointment"
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
          <span className="text-[11px] font-bold tracking-tight text-slate-700 group-hover:text-[#0f4c3a]">
            Appointment
          </span>
        </button>

        {/* 2. Elevated Center Logo (Matches screenshot's elevated circular bubble) */}
        <div className="relative -top-5 flex flex-col items-center">
          <button
            type="button"
            onClick={handleLogoClick}
            className="w-15 h-15 rounded-full bg-white p-1.5 shadow-[0_6px_20px_rgba(15,76,58,0.22)] border-2 border-emerald-500/80 flex items-center justify-center active:scale-95 transition-all cursor-pointer group"
            aria-label="Clinic home"
            title="Dr. Soujanya's Mother and Mind Clinic"
          >
            {clinicData.logoUrl ? (
              <img
                src={clinicData.logoUrl}
                alt={clinicData.clinicName}
                className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0f4c3a] to-[#165e49] flex items-center justify-center text-white font-bold text-xs">
                MMC
              </div>
            )}
          </button>
          <span className="text-[10px] font-bold text-emerald-900 mt-0.5 tracking-tight">
            Home
          </span>
        </div>

        {/* 3. Contact Button (Toy Medical Support Phone Icon) */}
        <button
          type="button"
          onClick={handleContactClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-1 text-slate-700 hover:text-[#0f4c3a] active:scale-90 transition-all cursor-pointer group"
          aria-label="Contact clinic"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100/80 p-0.5 flex items-center justify-center shadow-sm border border-emerald-200/60 group-hover:scale-105 group-hover:shadow-md transition-all overflow-hidden">
            <img
              src="/contact-toy.jpg"
              alt="Contact Support"
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
          <span className="text-[11px] font-bold tracking-tight text-slate-700 group-hover:text-[#0f4c3a]">
            Contact
          </span>
        </button>

      </div>
    </nav>
  );
};

export default MobileBottomBar;

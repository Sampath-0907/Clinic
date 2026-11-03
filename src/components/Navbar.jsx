import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Activity,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { clinicData } from '../data/clinic';
import { AppointmentModal } from './AppointmentModal';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  // Monitor scroll for elevation and active link highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section on scroll
      const sections = ['home', 'about', 'services', 'doctors', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter links (hide testimonials if disabled)
  const navLinks = clinicData.navLinks.filter(
    (link) => link.href !== '#testimonials' || clinicData.testimonials?.showSection
  );

  return (
    <>
      {/* Top Utility Announcement & Contact Bar (Scrolls naturally with page, eliminating scroll jitter) */}
      <div className="w-full bg-linear-to-r from-[#061234] via-[#091E5A] to-[#0145f2] text-white text-xs border-b border-blue-950/50">
        <div className="clinic-container flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-100 font-normal">
              <MapPin className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>{clinicData.location || "Pragati Nagar, Hyderabad"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-blue-100 font-medium">
              <Clock className="w-3.5 h-3.5 text-blue-300 shrink-0" />
              <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden md:inline-flex items-center gap-1 text-blue-200 text-[11px] bg-white/10 px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-3 h-3 text-blue-300" />
              Verified Specialists
            </span>
            {clinicData.contact?.phone && (
              <a
                href={`tel:${clinicData.contact.phoneTel || clinicData.contact.phone}`}
                className="inline-flex items-center gap-1.5 text-white hover:text-blue-200 transition-colors font-medium"
              >
                <Phone className="w-3 h-3 text-blue-300" />
                <span>{clinicData.contact.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar (Sticky top-0 with fixed height for flicker-free scrolling) */}
      <header 
        className={`sticky top-0 z-50 w-full transition-shadow duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/50'
        }`}
      >
        <div className="clinic-container py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Clinic Info */}
            <a
              href="#home"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0145f2] rounded-xl p-1 min-w-0 flex-1 lg:flex-initial"
            >
              {clinicData.logoUrl ? (
                <div className="relative p-0.5 rounded-xl bg-gradient-to-tr from-blue-100 to-white shadow-xs group-hover:shadow-md transition-shadow shrink-0">
                  <img
                    src={clinicData.logoUrl}
                    alt={clinicData.clinicName}
                    className="h-9 sm:h-11 w-auto object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#061234] to-[#0145f2] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
                  <Activity className="w-5 h-5 text-blue-300" />
                </div>
              )}
              
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 group-hover:text-[#0145f2] transition-colors leading-tight tracking-tight truncate">
                  {clinicData.clinicName}
                </span>
                <span className="text-[10px] sm:text-[11px] text-blue-900 font-semibold tracking-wide flex items-center gap-1 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0145f2] inline-block animate-pulse shrink-0"></span>
                  <span className="truncate">{clinicData.tagline || "Maternal Mental Health | Counselling"}</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Active Indicator Pill */}
            <nav className="hidden xl:flex items-center bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-2xs shrink-0 xl:translate-x-16 2xl:translate-x-24 transition-transform duration-200" aria-label="Main navigation">
              {navLinks.map((link) => {
                const linkId = link.href.replace('#', '');
                const isActive = activeSection === linkId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative whitespace-nowrap px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[#0145f2] shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action CTA Group */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <a
                href="#appointment"
                className="whitespace-nowrap inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0145f2] to-[#1e60ff] hover:from-[#0031b8] hover:to-[#0145f2] shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200 active:scale-95 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0145f2]"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-200 group-hover:scale-110 transition-transform" />
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setAppointmentModalOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-xl bg-blue-50 text-[#0145f2] border border-blue-200 text-xs font-bold shrink-0 hover:bg-blue-100 transition-colors active:scale-95"
                aria-label="Open Appointment Form Pop-up"
              >
                <Calendar className="w-4 h-4 text-[#0145f2]" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-[#0145f2] hover:bg-blue-50 transition-colors border border-slate-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0145f2] shrink-0"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

      {/* Advanced Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-blue-100 bg-white/98 backdrop-blur-xl shadow-2xl px-5 pt-3 pb-6 transition-all duration-200">
          <div className="mb-3 px-1 py-2 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between text-xs text-blue-950 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0145f2]" />
              <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#0145f2]" />
              <span>Pragati Nagar</span>
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              const isContact = link.href === '#contact';
              const targetHref = isContact ? `tel:${clinicData.contact?.phoneTel || clinicData.contact?.phone || '+916303818118'}` : link.href;

              return (
                <a
                  key={link.href}
                  href={targetHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-100/70 text-[#0145f2] font-bold'
                      : 'text-slate-700 hover:bg-slate-100/70 hover:text-[#0145f2]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0145f2]' : 'text-slate-400'}`} />
                </a>
              );
            })}
            
            <div className="pt-4 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAppointmentModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-linear-to-r from-[#0145f2] to-[#1e60ff] shadow-md transition-all active:scale-98"
              >
                <Calendar className="w-4 h-4 text-blue-200" />
                <span>Book an Appointment</span>
              </button>

              {clinicData.contact?.phone && (
                <a
                  href={`tel:${clinicData.contact.phoneTel || clinicData.contact.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-blue-950 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0145f2]" />
                  <span>Call {clinicData.contact.phone}</span>
                </a>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Pop-up Form Dialog */}
      <AppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />
    </header>
  </>
  );
};

export default Navbar;


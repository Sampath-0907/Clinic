import React from 'react';
import { Activity, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinic';
import DynamicIcon from './DynamicIcon';

export const Footer = () => {
  const { clinicName, logoUrl, footer, navLinks, services, contact } = clinicData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#093427] text-slate-300 pt-16 pb-12 border-t border-emerald-900/40">
      <div className="clinic-container">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <img src={logoUrl} alt={clinicName} className="h-10 w-auto object-contain rounded-lg" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                  <Activity className="w-5 h-5 text-emerald-400" />
                </div>
              )}
              <span className="font-bold text-lg text-white tracking-tight">
                {clinicName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-sm">
              {footer.description}
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-2.5">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-emerald-950/80 hover:bg-emerald-600/30 border border-emerald-800/50 flex items-center justify-center text-slate-300 hover:text-emerald-300 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <DynamicIcon name={social.iconName} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300/80 hover:text-emerald-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="text-slate-300/80 hover:text-emerald-300 transition-colors line-clamp-1"
                  >
                    {srv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Desk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${contact.phoneTel || contact.phone}`} className="hover:text-emerald-300">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-emerald-300">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 border-b border-emerald-900/40 text-[11px] text-slate-400/80 leading-relaxed">
          {footer.medicalDisclaimer}
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            {footer.copyright.replace('{year}', currentYear)}
          </p>

          <div className="flex items-center gap-6">
            {footer.privacyLink && (
              <a href={footer.privacyLink} className="hover:text-emerald-300 transition-colors">
                Privacy Policy
              </a>
            )}
            {footer.termsLink && (
              <a href={footer.termsLink} className="hover:text-emerald-300 transition-colors">
                Terms of Service
              </a>
            )}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-800/40 text-emerald-300 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

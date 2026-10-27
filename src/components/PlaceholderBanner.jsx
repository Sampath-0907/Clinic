import React, { useState } from 'react';
import { Settings, X, CheckSquare, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const PlaceholderBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Template configuration banner" className="bg-[#0a382a] text-white border-b border-emerald-700/60 transition-all">
      <div className="clinic-container py-2.5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-emerald-500/20 text-emerald-300">
              <Settings className="w-3.5 h-3.5 animate-spin-slow" />
            </span>
            <span className="font-semibold text-emerald-200">
              Quick Setup Guide:
            </span>
            <span className="text-slate-200">
              All clinic text & photos are configured in <code className="bg-emerald-950 px-1.5 py-0.5 rounded text-emerald-300 font-mono text-[11px]">src/data/clinic.js</code>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-800/80 hover:bg-emerald-700 text-white font-medium transition-colors text-[11px]"
            >
              <span>{isOpen ? 'Hide Checklist' : 'Checklist of Placeholders'}</span>
              {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="p-1 rounded-md text-emerald-300 hover:text-white hover:bg-emerald-800/60 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Collapsible Placeholder Checklist */}
        {isOpen && (
          <div className="mt-3 pt-3 border-t border-emerald-800/80 text-[11px] text-slate-200 grid grid-cols-1 md:grid-cols-3 gap-3 animate-fadeIn">
            <div className="bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/60">
              <p className="font-bold text-emerald-300 mb-1 flex items-center gap-1">
                <CheckSquare className="w-3 h-3" /> Identity & Contact
              </p>
              <ul className="space-y-0.5 text-slate-300">
                <li>• <code>clinicName</code> & <code>logoUrl</code></li>
                <li>• <code>contact.address</code> & map link</li>
                <li>• <code>contact.phone</code> & <code>contact.email</code></li>
                <li>• <code>contact.whatsapp</code> (optional)</li>
              </ul>
            </div>

            <div className="bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/60">
              <p className="font-bold text-emerald-300 mb-1 flex items-center gap-1">
                <CheckSquare className="w-3 h-3" /> Team & Facility Photos
              </p>
              <ul className="space-y-0.5 text-slate-300">
                <li>• <code>hero.heroImage</code></li>
                <li>• <code>about.aboutImage</code></li>
                <li>• <code>doctors[].photo</code> for each physician</li>
                <li>• <code>doctors[].name</code> & qualifications</li>
              </ul>
            </div>

            <div className="bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/60">
              <p className="font-bold text-emerald-300 mb-1 flex items-center gap-1">
                <CheckSquare className="w-3 h-3" /> Reviews & Booking
              </p>
              <ul className="space-y-0.5 text-slate-300">
                <li>• <code>testimonials.items</code> or toggle <code>showSection</code></li>
                <li>• <code>appointment.endpointUrl</code> (for live API)</li>
                <li>• <code>services[]</code> list of treatments</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default PlaceholderBanner;

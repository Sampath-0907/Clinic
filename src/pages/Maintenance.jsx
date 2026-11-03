import React from 'react';
import { Wrench, Clock, Phone, MapPin, MessageSquare, Home, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const Maintenance = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#edf1f5] text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#0145f2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Animated Icon Badge */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#061234] to-[#0145f2] text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/20">
          <Wrench className="w-9 h-9 text-blue-200 animate-pulse" />
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0145f2] text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200">
            <Clock className="w-3.5 h-3.5" />
            <span>Scheduled Maintenance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            System Upgrades in Progress
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
            We are performing scheduled infrastructure upgrades to our clinic portal to improve appointment confirmation speed and patient record security. We will be back online shortly.
          </p>

          {/* OPD Consultations Notice */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left mb-6 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-emerald-900">
              <strong className="font-bold">Clinic OPD is Open as Usual:</strong> Dr. Soujanya Banka and Dr. Vivaswan Boorla are consulting patients physically at our Pragati Nagar clinic from <strong>9:00 AM to 9:00 PM (Monday - Saturday)</strong>.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {clinicData.contact?.phone && (
              <a
                href={`tel:${clinicData.contact.phoneTel || clinicData.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0145f2] hover:bg-[#0031b8] shadow-md shadow-blue-600/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call {clinicData.contact.phone}</span>
              </a>
            )}

            {clinicData.contact?.whatsapp && (
              <a
                href={`https://wa.me/91${clinicData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Appointment</span>
              </a>
            )}
          </div>

          {/* Home Link if previewing */}
          {onNavigateHome && (
            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0145f2] transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Return to Home Preview</span>
              </button>
            </div>
          )}
        </div>

        {/* Address footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-[#0145f2]" />
          <span>{clinicData.contact.address}</span>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;


import React from 'react';
import { ShieldAlert, Home, Phone, ArrowLeft, Lock } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const Forbidden403 = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen clinic-gradient-bg text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#0145f2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Large 403 Badge */}
        <div className="inline-flex items-center justify-center mb-6 drop-shadow-md">
          <span className="text-7xl sm:text-9xl font-black tracking-tight text-[#061234] select-none">
            4<span className="text-amber-500">0</span>3
          </span>
        </div>

        {/* Status Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-rose-400" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 shadow-2xs">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>Access Restricted</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Restricted Clinical Area
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal">
            You do not have authorization to access this page or administrative portal. Medical case files, doctor scheduling consoles, and patient records are strictly protected under patient confidentiality protocols.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0145f2] to-[#1e60ff] hover:from-[#0031b8] hover:to-[#0145f2] shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return to Safe Homepage</span>
            </button>

            {clinicData.contact?.phone && (
              <a
                href={`tel:${clinicData.contact.phoneTel || clinicData.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-200 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0145f2]" />
                <span>Contact Clinic Desk</span>
              </a>
            )}
          </div>

          {/* Medical Privacy Notice */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 text-left flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              If you are a patient attempting to retrieve diagnostic reports or prescription summaries, please call our reception directly at <strong className="text-slate-900">{clinicData.contact.phone}</strong> for verified patient verification.
            </span>
          </div>
        </div>

        {/* Clinic Identity footer */}
        <p className="mt-6 text-xs text-slate-500">
          {clinicData.clinicName} • Pragati Nagar, Hyderabad
        </p>
      </div>
    </div>
  );
};

export default Forbidden403;


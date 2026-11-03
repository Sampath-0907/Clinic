import React from 'react';
import { ShieldAlert, Home, Phone, ArrowLeft, Lock } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const Forbidden403 = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#edf1f5] text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#0145f2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Large 403 Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-7xl sm:text-9xl font-black tracking-tight text-[#061234] select-none">
            4<span className="text-amber-600">0</span>3
          </span>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-200">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>Access Restricted</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Restricted Clinical Area
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
            You do not have authorization to access this page or administrative portal. Medical case files, doctor scheduling consoles, and patient records are strictly protected under patient confidentiality protocols.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0145f2] hover:bg-[#0031b8] shadow-md shadow-blue-600/20 transition-all active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Return to Safe Homepage</span>
            </button>

            {clinicData.contact?.phone && (
              <a
                href={`tel:${clinicData.contact.phoneTel || clinicData.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-colors"
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


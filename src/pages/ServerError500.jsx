import React from 'react';
import { AlertOctagon, RotateCw, Home, Phone, MessageSquare } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const ServerError500 = ({ onNavigateHome }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#edf1f5] text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Large 500 Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-7xl sm:text-9xl font-black tracking-tight text-[#061234] select-none">
            5<span className="text-red-500">0</span>0
          </span>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-red-200">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Internal Server Issue</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Our clinical system encountered a temporary error
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
            We are experiencing a temporary technical glitch on our server. Our technical team has been notified. Rest assured, all clinic doctor consultations and physical OPD services in Pragati Nagar remain fully operational.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRefresh}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0145f2] hover:bg-[#0031b8] shadow-md shadow-blue-600/20 transition-all active:scale-95"
            >
              <RotateCw className="w-4 h-4" />
              <span>Retry / Refresh Page</span>
            </button>

            <button
              type="button"
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Direct Emergency Contact Box */}
          <div className="mt-8 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-left">
            <h4 className="text-xs font-bold text-[#061234] uppercase tracking-wider mb-2">
              Book Instantly via Direct Front Desk
            </h4>
            <p className="text-xs text-slate-600 mb-4">
              Need immediate medical advice or wish to confirm an OPD slot? Reach us directly:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${clinicData.contact?.phoneTel || clinicData.contact?.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-blue-200 text-xs font-bold text-[#0145f2] shadow-2xs hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {clinicData.contact?.phone}</span>
              </a>

              {clinicData.contact?.whatsapp && (
                <a
                  href={`https://wa.me/91${clinicData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-2xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              )}
            </div>
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

export default ServerError500;


import React from 'react';
import { Home, Phone, ArrowLeft, Search, Calendar, Stethoscope } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const NotFound404 = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-[#edf1f5] text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#0145f2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Large 404 Badge */}
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-7xl sm:text-9xl font-black tracking-tight text-[#061234] select-none">
            4<span className="text-[#0145f2]">0</span>4
          </span>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0145f2] text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200">
            <Search className="w-3.5 h-3.5" />
            <span>Page Not Found</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            We couldn't find that clinic page
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
            The link you followed may be broken, or the consultation page might have been updated or moved. Don't worry—our clinic services are readily accessible from the homepage.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0145f2] hover:bg-[#0031b8] shadow-md shadow-blue-600/20 transition-all active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>

            {clinicData.contact?.phone && (
              <a
                href={`tel:${clinicData.contact.phoneTel || clinicData.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0145f2]" />
                <span>Call Clinic Desk</span>
              </a>
            )}
          </div>

          {/* Quick Helpful Links */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-left">
            <button
              type="button"
              onClick={() => {
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('doctors');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-colors flex items-center gap-2 text-slate-700"
            >
              <Stethoscope className="w-4 h-4 text-[#0145f2] shrink-0" />
              <div>
                <p className="font-bold text-slate-900">Our Doctors</p>
                <p className="text-[11px] text-slate-500">Dr. Soujanya & Dr. Vivaswan</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('appointment');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 transition-colors flex items-center gap-2 text-slate-700"
            >
              <Calendar className="w-4 h-4 text-[#0145f2] shrink-0" />
              <div>
                <p className="font-bold text-slate-900">Book Visit</p>
                <p className="text-[11px] text-slate-500">Online OPD Request</p>
              </div>
            </button>
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

export default NotFound404;


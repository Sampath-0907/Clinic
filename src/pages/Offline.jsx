import React, { useState, useEffect } from 'react';
import { WifiOff, RotateCw, Phone, MapPin, Home, AlertCircle } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const Offline = ({ onNavigateHome }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      if (typeof navigator !== 'undefined' && navigator.onLine) {
        setOnlineStatus(true);
        if (onNavigateHome) onNavigateHome();
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#edf1f5] text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-slate-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#0145f2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Offline Icon Badge */}
        <div className="w-20 h-20 rounded-3xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-6 shadow-xl">
          <WifiOff className="w-9 h-9 text-slate-300 animate-bounce" />
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-300">
            <AlertCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>Connection Unavailable</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            You are currently offline
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
            It looks like your internet connection has dropped. Please check your mobile data or Wi-Fi settings. You can still call our clinic reception directly using your phone's cellular network.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRetry}
              disabled={isChecking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0145f2] hover:bg-[#0031b8] shadow-md shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-75"
            >
              <RotateCw className={`w-4 h-4 ${isChecking ? 'animate-spin' : ''}`} />
              <span>{isChecking ? 'Checking Connection...' : 'Retry Connection'}</span>
            </button>

            {clinicData.contact?.phone && (
              <a
                href={`tel:${clinicData.contact.phoneTel || clinicData.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0145f2]" />
                <span>Call Clinic Desk</span>
              </a>
            )}
          </div>

          {/* OPD Physical Hours Notice */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600">
            <p className="font-bold text-slate-800 mb-1">Clinic In-Person Walk-ins Welcome:</p>
            <p>
              Monday to Saturday: 9:00 AM - 9:00 PM • Pragati Nagar, Hyderabad. Reception line: <strong className="text-slate-900">{clinicData.contact.phone}</strong>.
            </p>
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

export default Offline;


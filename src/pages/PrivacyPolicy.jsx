import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2, Phone, Mail, MapPin, Printer } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const PrivacyPolicy = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#edf1f5] text-slate-800 flex flex-col">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0145f2] hover:bg-blue-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-medium text-slate-500">
              Dr. Soujanya's Mother and Mind Care
            </span>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-14">
        {/* Document Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0145f2] text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Medical Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            This Privacy Policy explains how <strong>{clinicData.clinicName}</strong> collects, uses, protects, and handles your personal and sensitive health data in accordance with applicable medical confidentiality ethics and Indian data protection regulations.
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <span>Last Updated: November 2026</span>
            <span>Applies to: In-clinic visits, website requests & WhatsApp bookings</span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">1</span>
              Commitment to Patient Confidentiality
            </h2>
            <p>
              At {clinicData.clinicName}, we hold patient confidentiality as the cornerstone of ethical medical practice. Whether you consult us for obstetrics, gynecology, or clinical psychiatric and psychological counselling, your health information is treated with strict medical confidentiality and protected under physician-patient privilege.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">2</span>
              Information We Collect
            </h2>
            <p>To provide accurate diagnostic care and safe clinical management, we collect:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact & Identity Details:</strong> Full name, age, gender, contact number, email address, and residential city.</li>
              <li><strong>Consultation Requests:</strong> Preferred doctor, desired appointment date, time preference, and brief visit reasons submitted through our website.</li>
              <li><strong>Clinical & Medical History:</strong> Previous medical records, scan reports, lab test values, prescription history, obstetric details, and psychological assessments provided during clinical consultations.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">3</span>
              How We Use Your Clinical Information
            </h2>
            <p>Your data is used solely for medical and administrative operations:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Facilitating appointment scheduling, reminder calls, and OPD queue management.</li>
              <li>Clinical diagnosis, treatment planning, prescription management, and continuous maternal/psychiatric care.</li>
              <li>Communicating medical follow-up protocols, lab report updates, and essential patient health advisories.</li>
              <li>We <strong>never sell, lease, or commercially trade</strong> your personal or health information to third-party advertisers.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">4</span>
              Psychiatric & Sensitive Records Protection
            </h2>
            <p>
              Psychiatric evaluations, counselling transcripts, and psychotherapy notes are classified as highest-tier confidential records under the Mental Healthcare Act. These notes are accessible exclusively to authorized consulting specialists and will never be disclosed without express patient consent, except where mandated by statutory law or immediate risk of harm.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">5</span>
              WhatsApp & Digital Messaging Disclaimer
            </h2>
            <p>
              When requesting appointment confirmation via WhatsApp or phone, communications are encrypted via WhatsApp's protocol. However, please refrain from sharing sensitive diagnostic photos or confidential health histories over messaging apps unless specifically requested by your consulting doctor.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">6</span>
              Data Security & Physical Safeguards
            </h2>
            <p>
              We implement electronic access controls, secure encryption protocols, and physical clinic safety precautions to safeguard both physical patient case files and digital records against unauthorized access, alteration, or theft.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">7</span>
              Patient Rights
            </h2>
            <p>Under applicable health guidelines, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Request a copy of your clinical case history, discharge summary, or prescription records.</li>
              <li>Request correction of inaccurate contact or demographic details.</li>
              <li>Withdraw consent for optional health advisories or non-essential reminders.</li>
            </ul>
          </section>

          {/* Section 8: Grievance Desk */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Privacy & Grievance Contact</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              If you have questions about your medical records or data security at our clinic, please contact our administrative desk:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-[#0145f2] shrink-0" />
                <span>{clinicData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-[#0145f2] shrink-0" />
                <span>{clinicData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-[#0145f2] shrink-0" />
                <span>{clinicData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Lock className="w-4 h-4 text-[#0145f2] shrink-0" />
                <span>Data Protection Desk</span>
              </div>
            </div>
          </div>

        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#0145f2] hover:bg-[#0031b8] shadow-md transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Clinic Home</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;


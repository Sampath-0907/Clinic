import React, { useEffect } from 'react';
import { ArrowLeft, FileCheck, AlertTriangle, Phone, Mail, MapPin, Printer } from 'lucide-react';
import { clinicData } from '../data/clinic';
import { handleEmailClick, getEmailUrl } from '../utils/mailHelper';

export const TermsOfService = ({ onNavigateHome }) => {
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
            <FileCheck className="w-3.5 h-3.5" />
            <span>Clinical Terms & Policies</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Terms of Service
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Please read these Terms of Service carefully before utilizing our consultation booking features or visiting <strong>{clinicData.clinicName}</strong>. By accessing our website or booking an appointment, you agree to comply with these terms.
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <span>Effective Date: November 2026</span>
            <span>Jurisdiction: Hyderabad, Telangana, India</span>
          </div>
        </div>

        {/* Emergency Alert Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Medical Emergency Notice:</strong> This website and our online consultation request form are designed for scheduled outpatient appointments. For immediate medical emergencies, active labor, acute chest pain, or psychiatric crisis situations, please visit your nearest hospital emergency department or dial emergency services immediately.
          </div>
        </div>

        {/* Terms Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">1</span>
              Nature of Clinical Services
            </h2>
            <p>
              {clinicData.clinicName} provides specialized outpatient clinical care across gynecology, obstetrics, minimally invasive surgery, and comprehensive clinical psychiatry and psychological counselling.
            </p>
            <p>
              Information on this website is for general educational awareness regarding conditions and treatments. It does not constitute formal medical diagnosis or establish an enforceable physician-patient relationship until an in-person or official clinical consultation has taken place.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">2</span>
              Appointment Booking & Verification
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Submitting an online booking form or WhatsApp inquiry constitutes an appointment <em>request</em>.</li>
              <li>Your appointment slot is confirmed only once our clinical reception verifies doctor availability and contacts you via phone or confirmation message.</li>
              <li>While we strive to adhere strictly to appointment times, medical emergencies and urgent patient care may occasionally require schedule adjustments. We appreciate your patience and understanding.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">3</span>
              Prescription & Medication Policy
            </h2>
            <p>
              Under Indian medical regulations (National Medical Commission & Pharmacy Act), prescription drugs—including psychotropic medicines, hormonal therapies, and surgical medications—will only be dispensed following a rigorous professional evaluation. No prescriptions can be generated without proper clinical consultation.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">4</span>
              Cancellation & Rescheduling
            </h2>
            <p>
              If you need to reschedule or cancel a consultation, please notify our reception at least 3 hours in advance via phone call (+91 63038 18118) or WhatsApp (+91 83175 09180). This helps us offer the consultation window to another patient in need.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">5</span>
              Patient Responsibilities & Accurate Disclosure
            </h2>
            <p>
              To ensure safe diagnosis and appropriate medical interventions, patients and caregivers agree to provide accurate, honest, and complete medical histories, including all ongoing medications, drug allergies, past surgeries, and pre-existing conditions.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">6</span>
              Intellectual Property
            </h2>
            <p>
              All trademarks, clinic branding, logos, doctor profiles, clinical articles, and educational content on this website are the intellectual property of {clinicData.clinicName} and may not be reproduced, copied, or used commercially without prior written authorization.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0145f2] text-xs font-bold flex items-center justify-center shrink-0">7</span>
              Governing Law & Disputes
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of the use of our digital platforms shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.
            </p>
          </section>

          {/* Clinic Contact Desk */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Clinic Inquiries & Desk Support</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-[#0145f2] shrink-0" />
                <span>{clinicData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-[#0145f2] shrink-0" />
                <span>{clinicData.contact.phone}</span>
              </div>
              <a
                href={getEmailUrl(clinicData.contact.email)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleEmailClick(e, clinicData.contact.email)}
                className="flex items-center gap-2 text-slate-700 hover:text-[#0145f2] transition-colors cursor-pointer"
                title="Send email"
              >
                <Mail className="w-4 h-4 text-[#0145f2] shrink-0" />
                <span>{clinicData.contact.email}</span>
              </a>
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

export default TermsOfService;


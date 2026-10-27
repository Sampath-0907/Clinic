import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle, AlertTriangle, Building } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const Contact = () => {
  const { contact } = clinicData;

  return (
    <section id="contact" className="py-20 bg-white border-y border-emerald-100/60">
      <div className="clinic-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            {contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {contact.subtitle}
          </p>
        </div>

        {/* Contact Info & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f4c3a] text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Clinic Address</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {contact.address}
                  </p>
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f4c3a] text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Telephone Contact</h3>
                  <p className="text-xs text-slate-500 mb-1">For appointment inquiries & reception desk:</p>
                  <a
                    href={`tel:${contact.phoneTel || contact.phone}`}
                    className="text-base font-bold text-[#0f4c3a] hover:text-emerald-600 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0f4c3a] text-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Email Desk</h3>
                  <p className="text-xs text-slate-500 mb-1">For non-urgent queries and documentation:</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-semibold text-[#0f4c3a] hover:text-emerald-600 transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Conditional WhatsApp Button (Only shown if whatsapp phone is provided!) */}
            {contact.whatsapp && contact.whatsapp.trim() !== '' && (
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5b] shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Clinic on WhatsApp</span>
              </a>
            )}

          </div>

          {/* Right Column: Operating Hours & Map Container */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Operating Hours Card */}
            <div className="p-7 rounded-3xl bg-white border border-emerald-100 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Operating Hours</h3>
                  <p className="text-xs text-slate-500">Regular clinic consultation schedule</p>
                </div>
              </div>

              <div className="divide-y divide-emerald-50">
                {contact.operatingHours.map((schedule, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-800">{schedule.days}</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${schedule.isOpenDay ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                      <span className="text-slate-600 font-medium">{schedule.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Notice Card */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 leading-relaxed font-medium">
                {contact.emergencyNotice}
              </p>
            </div>

            {/* Google Maps Visual Box */}
            <div className="rounded-3xl overflow-hidden border border-emerald-100 p-6 bg-gradient-to-br from-emerald-50/40 to-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0f4c3a] text-white flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Need Driving Directions?</h4>
                  <p className="text-xs text-slate-500">Find the easiest route to our medical suite.</p>
                </div>
              </div>

              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0f4c3a] bg-white hover:bg-emerald-50 border border-emerald-200 shadow-2xs transition-all active:scale-95"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

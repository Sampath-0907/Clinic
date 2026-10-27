import React, { useState } from 'react';
import { Calendar, Award, Clock, BookOpen, X, ArrowRight, CheckCircle2, User, Share2 } from 'lucide-react';
import { clinicData } from '../data/clinic';
import ImagePlaceholder from './ImagePlaceholder';

export const Doctors = ({ onSelectDoctor }) => {
  const { doctors } = clinicData;
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  const handleBookDoctor = (doctorName) => {
    if (activeDoctorModal) {
      setActiveDoctorModal(null);
    }
    if (onSelectDoctor) {
      onSelectDoctor(doctorName);
    }
  };

  return (
    <section id="doctors" className="py-20 bg-white border-y border-emerald-100/60">
      <div className="clinic-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            Clinical Practitioners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Specialized clinical care and dedicated psychological guidance tailored for maternal mental health, parent-infant wellness, and emotional balance.
          </p>
        </div>

        {/* Doctor Profile Cards Grid (2 Column Balanced Layout for 2 Doctors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl xl:max-w-7xl mx-auto">
          {doctors.map((doctor) => (
            <article
              key={doctor.id}
              className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
            >
              <div>
                {/* Doctor Photo & Badges - Full Complete Portrait Frame */}
                <div className="relative mb-5 rounded-2xl overflow-hidden bg-slate-50 border border-emerald-100/80 shadow-xs aspect-[3/4]">
                  {doctor.photo ? (
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      loading="lazy"
                      style={{ objectPosition: doctor.photoPosition || 'center center' }}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <ImagePlaceholder
                      src={null}
                      alt={doctor.name}
                      label="[Doctor Photo]"
                      type="doctor"
                      aspectRatio="aspect-[3/4]"
                      className="w-full h-full"
                    />
                  )}

                  {/* Reading Time Tag */}
                  {doctor.readTime && (
                    <div className="absolute top-3 right-3 bg-[#0f4c3a]/90 backdrop-blur-xs text-emerald-200 px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                      <BookOpen className="w-3 h-3 text-emerald-300" />
                      <span>{doctor.readTime}</span>
                    </div>
                  )}
                </div>

                {/* Role / Designation Badge - cleanly placed below the photo so zero image is covered */}
                <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{doctor.role}</span>
                </div>

                {/* Tags */}
                {doctor.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {doctor.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Doctor Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#0f4c3a] transition-colors">
                  {doctor.name}
                </h3>

                {/* Qualifications */}
                <p className="text-xs font-semibold text-emerald-800 mb-3 tracking-wide">
                  {doctor.qualifications}
                </p>

                {/* Brief Bio */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {doctor.bio}
                </p>

                {/* Clinical Availability */}
                {doctor.availability && (
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100/70 text-xs text-slate-700 font-medium mb-6">
                    <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Availability: {doctor.availability}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Read More Blog Article & Book Consultation */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveDoctorModal(doctor)}
                  className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#0f4c3a] bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200 transition-colors active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>Read Profile & Bio</span>
                </button>

                <a
                  href="#appointment"
                  onClick={() => handleBookDoctor(doctor.name)}
                  className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#0f4c3a] hover:bg-[#0a372a] shadow-xs hover:shadow-md transition-all duration-200 active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Book Consultation</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Blog-Style Modal Drawer / Article Dialog */}
      {activeDoctorModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-doctor-title"
          onClick={() => setActiveDoctorModal(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-100 bg-[#f8faf8]">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Doctor Profile & Clinical Article</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveDoctorModal(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-emerald-100/50 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Blog Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              
              {/* Blog Top Header: Title, Doctor Details & Meta */}
              <div className="border-b border-emerald-100 pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {activeDoctorModal.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-slate-400 font-medium">
                    • {activeDoctorModal.readTime || '3 min read'}
                  </span>
                </div>

                <h2 id="modal-doctor-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {activeDoctorModal.name}
                </h2>
                <p className="text-sm font-semibold text-emerald-800 mb-1">
                  {activeDoctorModal.role}
                </p>
                <p className="text-xs text-slate-500">
                  {activeDoctorModal.qualifications}
                </p>
              </div>

              {/* Author Banner / Clinical Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/80 flex items-start gap-4">
                {activeDoctorModal.photo ? (
                  <img
                    src={activeDoctorModal.photo}
                    alt={activeDoctorModal.name}
                    style={{ objectPosition: activeDoctorModal.photoPosition || "center top" }}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-[#0f4c3a] text-white flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-emerald-300" />
                  </div>
                )}
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pt-1">
                  "{activeDoctorModal.fullArticle?.intro || activeDoctorModal.bio}"
                </div>
              </div>

              {/* Structured Blog Sections */}
              {activeDoctorModal.fullArticle?.sections ? (
                <div className="space-y-6">
                  {activeDoctorModal.fullArticle.sections.map((section, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 text-left">
                        {section.title}
                      </h3>
                      {section.content && (
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-left">
                          {section.content}
                        </p>
                      )}
                      {section.bullets && (
                        <ul className="space-y-2 pt-1">
                          {section.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 text-left">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeDoctorModal.bio}
                </p>
              )}

              {/* Consultation Availability Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Clinical Hours:</strong> {activeDoctorModal.availability}
                </span>
              </div>

            </div>

            {/* Modal Bottom Footer / CTA Action */}
            <div className="p-4 sm:p-6 border-t border-emerald-100 bg-[#f8faf8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Need specialized guidance? Schedule your appointment with {activeDoctorModal.name}.
              </span>
              <a
                href="#appointment"
                onClick={() => handleBookDoctor(activeDoctorModal.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0f4c3a] hover:bg-[#0a372a] shadow-md transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book Appointment with {activeDoctorModal.name.split(' ')[1] || 'Doctor'}</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Doctors;

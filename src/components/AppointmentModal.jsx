import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const AppointmentModal = ({ isOpen, onClose, initialDoctor = '', initialService = '' }) => {
  const { appointment, doctors, services } = clinicData;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: initialDoctor,
    service: initialService,
    date: '',
    timeSlot: appointment.timeSlots[0] || '',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Close smoothly with animation
  const handleSmoothClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 280);
  };

  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSmoothClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const todayString = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    } else if (formData.date < todayString) {
      newErrors.date = 'Date cannot be in the past';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a time slot';
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please provide a brief reason for your visit';
    } else if (formData.reason.trim().length < 5) {
      newErrors.reason = 'Please give a little more detail (min 5 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  /**
   * Helper to format YYYY-MM-DD to a clean human-readable string
   */
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Earliest available';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (months[month]) {
          return `${day} ${months[month]} ${year}`;
        }
      }
    } catch {
      // fallback to original string
    }
    return dateStr;
  };

  /**
   * Constructs WhatsApp URL with patient's appointment details.
   * Uses standard ASCII text & native WhatsApp bullet markdown (- ) to ensure
   * zero encoding corruption (no black diamond question marks) across all devices and OSes.
   */
  const getWhatsAppBookingUrl = (data) => {
    const rawNumber = clinicData.contact?.whatsapp || '';
    let cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    if (!cleanNumber) return null;
    if (cleanNumber.length === 10) {
      cleanNumber = '91' + cleanNumber;
    }

    const formattedDate = formatDate(data.date);

    const messageLines = [
      `*New Appointment Request*`,
      `*${clinicData.clinicName}*`,
      ``,
      `- *Patient Name:* ${data.name || 'Not provided'}`,
      `- *Phone:* ${data.phone || 'Not provided'}`,
      data.email ? `- *Email:* ${data.email}` : null,
      data.doctor ? `- *Doctor:* ${data.doctor}` : null,
      data.service ? `- *Service:* ${data.service}` : null,
      `- *Preferred Date:* ${formattedDate}`,
      `- *Time Slot:* ${data.timeSlot || 'Any slot'}`,
      data.reason ? `- *Reason / Concern:* ${data.reason}` : null,
      ``,
      `Please confirm the appointment slot availability. Thank you!`,
    ].filter(Boolean);

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    return `https://wa.me/${cleanNumber}?text=${encodedText}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);


    try {
      if (appointment.endpointUrl) {
        const response = await fetch(appointment.endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Server error');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      const bookedData = { ...formData };
      setSubmissionData(bookedData);
      setRequestSubmitted(true);

      // Auto-navigate to WhatsApp with booking details pre-filled
      const waUrl = getWhatsAppBookingUrl(bookedData);
      if (waUrl) {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        doctor: '',
        service: '',
        date: '',
        timeSlot: appointment.timeSlots[0] || '',
        reason: '',
      });
      setErrors({});
    } catch (err) {
      setErrors({ form: 'Unable to submit request. Please call our clinic directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappRedirectUrl = submissionData ? getWhatsAppBookingUrl(submissionData) : null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'animate-backdrop-in'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleSmoothClose();
      }}
    >
      <div 
        className={`w-full max-w-md max-h-[88vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-out border border-emerald-100 ${
          isClosing ? 'scale-95 opacity-0' : 'animate-modal-center'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100 bg-linear-to-r from-emerald-50/70 to-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0f4c3a] text-white flex items-center justify-center shadow-xs">
              <Calendar className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <h3 id="modal-title" className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                Book an Appointment
              </h3>
              <p className="text-[10px] sm:text-[11px] text-emerald-800 font-medium">
                Quick Consultation Request
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSmoothClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Compact Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3 text-xs">
          {requestSubmitted && submissionData ? (
            <div className="text-center py-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1.5">Request Received!</h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Thank you, <strong className="text-emerald-950">{submissionData.name}</strong>. Your consultation request for{' '}
                <strong className="text-emerald-950">{formatDate(submissionData.date)}</strong> ({submissionData.timeSlot}) has been logged.
              </p>

              {/* Direct WhatsApp Action Button */}
              {whatsappRedirectUrl && (
                <div className="mb-4">
                  <a
                    href={whatsappRedirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm transition-all active:scale-95"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.288A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.628 0-3.14-.492-4.404-1.334l-.316-.21-2.91.764.777-2.837-.23-.33A8.006 8.006 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.05-8 8.05z"/>
                    </svg>
                    <span>Chat & Confirm on WhatsApp</span>
                  </a>
                </div>
              )}

              <div className="bg-emerald-50 rounded-xl p-3 text-left text-[11px] text-slate-700 space-y-1 mb-4 border border-emerald-100">
                <p className="font-semibold text-emerald-950 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-700" />
                  What happens next:
                </p>
                <p>• Our front desk will verify doctor availability.</p>
                <p>• We will message or call you at <strong>{submissionData.phone}</strong> to confirm the exact time.</p>
              </div>
              <button
                type="button"
                onClick={handleSmoothClose}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-[#0f4c3a] hover:bg-[#0a382a] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/60 text-[11px] text-slate-700 flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <p>Our desk will call or message you to verify and finalize your requested slot.</p>
              </div>

              {errors.form && (
                <div className="p-2.5 rounded-xl bg-red-50 text-red-700 text-[11px] border border-red-200">
                  {errors.form}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter patient full name"
                    className="w-full pl-8.5 pr-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-emerald-500 focus:outline-hidden"
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91..."
                      className="w-full pl-8.5 pr-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="patient@email.com"
                      className="w-full pl-8.5 pr-3 py-2 rounded-lg border border-slate-200 text-xs focus:border-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Select Doctor
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:border-emerald-500 focus:outline-hidden"
                >
                  <option value="">Any Available Specialist</option>
                  {doctors?.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} ({doc.specialty})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={todayString}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 text-xs focus:border-emerald-500 focus:outline-hidden"
                  />
                  {errors.date && <p className="text-[11px] text-red-600 mt-0.5">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:border-emerald-500 focus:outline-hidden"
                  >
                    {appointment.timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Reason for Consultation <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="reason"
                  rows={2}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms or visit reason..."
                  className="w-full p-2.5 rounded-lg border border-slate-200 text-xs focus:border-emerald-500 focus:outline-hidden resize-none"
                />
                {errors.reason && <p className="text-[11px] text-red-600 mt-0.5">{errors.reason}</p>}
              </div>

              {/* Submit */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-linear-to-r from-[#0f4c3a] to-[#145d47] hover:from-[#0a382a] hover:to-[#0f4d3a] shadow-sm hover:shadow transition-all active:scale-98 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

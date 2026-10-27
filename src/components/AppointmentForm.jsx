import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const AppointmentForm = ({ selectedDoctor, selectedService }) => {
  const { appointment, doctors, services, clinicalDirectory } = clinicData;

  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    service: '',
    date: '',
    timeSlot: appointment.timeSlots[0] || '',
    reason: '',
  });

  // Validation Errors State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  // Sync props when user selects doctor or service from other sections
  useEffect(() => {
    if (selectedDoctor) {
      setFormData((prev) => ({ ...prev, doctor: selectedDoctor }));
    }
  }, [selectedDoctor]);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Today's date string for input min attribute (YYYY-MM-DD)
  const todayString = new Date().toISOString().split('T')[0];

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for appointment follow-up';
    } else if (!/^[0-9+\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred appointment date';
    } else if (formData.date < todayString) {
      newErrors.date = 'Appointment date cannot be in the past';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot';
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
    // Clear error for field on change
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

  /**
   * Submit Handler
   * Logs appointment and automatically navigates patient to WhatsApp with pre-filled details.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (appointment.endpointUrl) {
        // Real endpoint submission
        const response = await fetch(appointment.endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Server responded with an error');
        }
      } else {
        // Realistic response delay
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

      // Reset form fields
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
      setErrors({ form: 'Unable to submit request at this time. Please call our clinic directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappRedirectUrl = submissionData ? getWhatsAppBookingUrl(submissionData) : null;

  return (
    <section id="appointment" className="py-20 clinic-gradient-bg">
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            {appointment.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {appointment.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {appointment.subtitle}
          </p>
        </div>

        {/* Success State / Request Received Confirmation Card */}
        {requestSubmitted && submissionData ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6 shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Appointment Request Received
            </h3>

            <p className="text-base text-slate-700 max-w-xl mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-emerald-900">{submissionData.name}</strong>. Your consultation request for{' '}
              <strong className="text-emerald-900">{formatDate(submissionData.date)}</strong> ({submissionData.timeSlot})
              {submissionData.doctor ? ` with ${submissionData.doctor}` : ''} has been safely logged in our system.
            </p>

            {/* Direct WhatsApp Action Button */}
            {whatsappRedirectUrl && (
              <div className="mb-6">
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.288A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.628 0-3.14-.492-4.404-1.334l-.316-.21-2.91.764.777-2.837-.23-.33A8.006 8.006 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8.05-8 8.05z" />
                  </svg>
                  <span>Chat & Confirm on WhatsApp</span>
                </a>
                <p className="text-xs text-slate-500 mt-2">
                  Click above if WhatsApp did not open automatically.
                </p>
              </div>
            )}

            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5 max-w-lg mx-auto mb-8 text-left text-xs sm:text-sm text-slate-700 space-y-2">
              <p className="font-semibold text-emerald-950 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-700" />
                Next Steps from Our Clinical Desk:
              </p>
              <p>• Our front desk will review doctor availability for your requested slot.</p>
              <p>• We will contact you at <strong>{submissionData.phone}</strong> or <strong>{submissionData.email}</strong> to finalize your appointment.</p>
              <p className="text-slate-500 italic text-[11px] pt-1 border-t border-emerald-200/50">
                Notice: An appointment is not final until direct verbal or message confirmation is made by our staff.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setRequestSubmitted(false)}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0f4c3a] hover:bg-[#0a382a] transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          /* Main Appointment Request Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl">

            {/* Top Form Disclaimer Alert */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 mb-8 text-xs text-slate-700">
              <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {appointment.disclaimerNotice}
              </p>
            </div>

            {errors.form && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-hidden transition-colors ${errors.name
                        ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                        }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-hidden transition-colors ${errors.phone
                        ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                        }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 2: Email & Preferred Doctor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@gmail.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-hidden transition-colors ${errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                        }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="doctor" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Doctor
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:bg-white focus:border-emerald-500 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 transition-colors"
                  >
                    <option value="">Any Available Doctor / General Consultation</option>
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} - {doc.role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Preferred Service, Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Service (Optional)
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:bg-white focus:border-emerald-500 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 transition-colors"
                  >
                    <option value="">General Medical Assessment</option>
                    {formData.service && 
                     !services.some(s => s.name === formData.service) &&
                     !clinicalDirectory?.gynaecology?.items?.includes(formData.service) &&
                     !clinicalDirectory?.psychiatry?.items?.includes(formData.service) && (
                      <option value={formData.service}>{formData.service}</option>
                    )}
                    {clinicalDirectory && (
                      <>
                        <optgroup label="🌸 Gynaecology & Women's Health (Dr. Soujanya)">
                          {clinicalDirectory.gynaecology.items.map((item, idx) => (
                            <option key={`gyn-${idx}`} value={item}>{item}</option>
                          ))}
                        </optgroup>
                        <optgroup label="🧠 Psychiatry & Mind Care (Dr. Vivaswan)">
                          {clinicalDirectory.psychiatry.items.map((item, idx) => (
                            <option key={`psy-${idx}`} value={item}>{item}</option>
                          ))}
                        </optgroup>
                      </>
                    )}
                    <optgroup label="🏥 Core Clinical Packages">
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.name}>
                          {srv.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={todayString}
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-hidden transition-colors ${errors.date
                        ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                        }`}
                    />
                  </div>
                  {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 bg-slate-50/50 focus:bg-white focus:border-emerald-500 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 transition-colors"
                  >
                    {appointment.timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.timeSlot && <p className="text-xs text-red-600 mt-1">{errors.timeSlot}</p>}
                </div>
              </div>

              {/* Row 4: Reason for Visit */}
              <div>
                <label htmlFor="reason" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Reason for Consultation / Symptoms <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={3}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please describe symptoms, purpose of visit, or questions you would like addressed..."
                  className={`w-full p-4 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-hidden transition-colors resize-none ${errors.reason
                    ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                />
                {errors.reason && <p className="text-xs text-red-600 mt-1">{errors.reason}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#0f4c3a] to-[#145d47] hover:from-[#0a382a] hover:to-[#0f4d3a] shadow-lg shadow-emerald-950/15 hover:shadow-xl transition-all duration-200 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 text-emerald-300" />
                      <span>Request Appointment</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};

export default AppointmentForm;

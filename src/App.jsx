import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';

export function App() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleSelectDoctor = (doctorName) => {
    setSelectedDoctor(doctorName);
    // Smooth scroll to appointment form
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf8] text-slate-800">
      {/* 1. Navbar: Sticky */}
      <Navbar />

      {/* Main Content Sections (Strictly in order) */}
      <main className="flex-1 pb-20 md:pb-0">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About Us */}
        <About />

        {/* 4. Services */}
        <Services />

        {/* 5. Our Doctors */}
        <Doctors onSelectDoctor={handleSelectDoctor} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Appointment Form */}
        <AppointmentForm
          selectedDoctor={selectedDoctor}
        />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Mobile Fixed Bottom Navigation Bar (Directly opens modal) */}
      <MobileBottomBar onSelectAppointment={handleOpenAppointmentModal} />

      {/* Direct Mobile Appointment Modal Dialog */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
}

export default App;

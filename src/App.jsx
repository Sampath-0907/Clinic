import React, { useState, useEffect } from 'react';
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

// Legal & UX State Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound404 from './pages/NotFound404';
import Forbidden403 from './pages/Forbidden403';
import ServerError500 from './pages/ServerError500';
import Maintenance from './pages/Maintenance';
import Offline from './pages/Offline';

// URL route resolution helper
const getRouteFromUrl = () => {
  if (typeof window === 'undefined') return 'home';

  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  // Legal routes
  if (path === '/privacy' || path === '/privacy-policy' || hash === '#privacy' || hash === '#privacy-policy') {
    return 'privacy';
  }
  if (path === '/terms' || path === '/terms-of-service' || hash === '#terms' || hash === '#terms-of-service') {
    return 'terms';
  }

  // UX State routes
  if (path === '/404' || hash === '#404') {
    return '404';
  }
  if (path === '/403' || hash === '#403') {
    return '403';
  }
  if (path === '/500' || hash === '#500') {
    return '500';
  }
  if (path === '/maintenance' || hash === '#maintenance') {
    return 'maintenance';
  }
  if (path === '/offline' || hash === '#offline') {
    return 'offline';
  }

  // Root or section anchors
  if (path === '/' || path === '' || path === '/index.html') {
    return 'home';
  }

  // Unknown route resolves to 404
  return '404';
};

export function App() {
  const [currentPage, setCurrentPage] = useState(getRouteFromUrl);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // Synchronize browser history and back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getRouteFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);

    const routes = {
      home: '/',
      privacy: '/privacy-policy',
      terms: '/terms-of-service',
      404: '/404',
      403: '/403',
      500: '/500',
      maintenance: '/maintenance',
      offline: '/offline',
    };

    const targetUrl = routes[page] || '/';
    if (window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDoctor = (doctorName) => {
    setSelectedDoctor(doctorName);
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  // Render Legal & UX Pages
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === '404') {
    return <NotFound404 onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === '403') {
    return <Forbidden403 onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === '500') {
    return <ServerError500 onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'maintenance') {
    return <Maintenance onNavigateHome={() => navigateTo('home')} />;
  }

  if (currentPage === 'offline') {
    return <Offline onNavigateHome={() => navigateTo('home')} />;
  }

  // Default Home Page View
  return (
    <div className="min-h-screen flex flex-col bg-[#edf1f5] text-slate-800">
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
        <AppointmentForm selectedDoctor={selectedDoctor} />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* 9. Footer with Legal & UX State Links */}
      <Footer onNavigate={navigateTo} />

      {/* 10. Mobile Fixed Bottom Navigation Bar */}
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

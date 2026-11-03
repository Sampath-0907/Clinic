/**
 * Helper to ensure email links redirect reliably across all devices and OSes.
 * On desktop (Windows/Mac/Linux), mailto: often fails silently if no default mail client
 * (like Outlook) is configured. This helper provides direct Gmail web compose on desktop,
 * while triggering native mail apps on mobile devices.
 */

export const getEmailUrl = (email = 'drsoujanyasmotherandmindcare@gmail.com') => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
};

export const handleEmailClick = (e, email = 'drsoujanyasmotherandmindcare@gmail.com') => {
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Native mail app on mobile devices
    window.location.href = `mailto:${email}`;
    if (e && e.preventDefault) e.preventDefault();
  } else {
    // Desktop: If event exists and default was not prevented, letting the default _blank navigation happen
    // to https://mail.google.com/mail/?view=cm... will work. If triggered from a button or onClick:
    if (e && e.preventDefault) {
      e.preventDefault();
      window.open(getEmailUrl(email), '_blank', 'noopener,noreferrer');
    }
  }
};

import React from 'react';
import {
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Users,
  Activity,
  Sparkles,
  HeartHandshake,
  Award,
  Clock,
  Building2,
  Lock,
  PhoneCall,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
  AlertTriangle,
  Building,
  Star,
  Quote,
  Check,
  CheckCircle2,
  AlertCircle,
  User,
  Camera,
  ArrowRight,
  ArrowUp,
} from 'lucide-react';

// Clean SVG fallbacks for social icons not included in modern lucide-react
const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.65-1.66 1.65 1.65 0 0 0-1.65-1.66z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ICON_MAP = {
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Users,
  Activity,
  Sparkles,
  HeartHandshake,
  Award,
  Clock,
  Building2,
  Lock,
  PhoneCall,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
  AlertTriangle,
  Building,
  Star,
  Quote,
  Check,
  CheckCircle2,
  AlertCircle,
  User,
  Camera,
  ArrowRight,
  ArrowUp,
};

/**
 * Renders an icon by string name safely
 */
export const DynamicIcon = ({ name, className = "w-6 h-6", ...props }) => {
  const IconComponent = ICON_MAP[name] || Stethoscope;
  return <IconComponent className={className} {...props} />;
};

export default DynamicIcon;

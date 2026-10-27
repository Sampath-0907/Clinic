# Modern Medical Clinic Landing Page

A responsive, high-performance, and trustworthy landing page designed for medical clinics, healthcare practices, and outpatient wellness centers.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the live site with hot reload.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Centralized Configuration (`src/data/clinic.js`)

All clinic content, practitioner details, operating hours, and contact information are centralized in **one single file**:
👉 [`src/data/clinic.js`](file:///src/data/clinic.js)

To update your clinic's details, you only need to edit `src/data/clinic.js`—no need to touch individual component files.

---

## 📋 Client Placeholders Checklist

Below is the list of placeholders marked with `[Square Brackets]` in `src/data/clinic.js` that the client should replace with authentic clinic details:

| Section | Placeholder Field in `src/data/clinic.js` | Description |
| :--- | :--- | :--- |
| **Brand Identity** | `clinicName` | The legal/public name of your medical practice |
| | `tagline` | Primary slogan or practice mission statement |
| | `logoUrl` | Path to SVG/PNG logo file (e.g. `"/logo.svg"`, or leave `null` for the default medical emblem) |
| **Hero Section** | `hero.badge` | Availability pill (e.g., `"[Accepting New Patients]"`) |
| | `hero.headline` | Primary welcoming healthcare title |
| | `hero.subheadline` | Short welcome paragraph explaining outpatient services |
| | `hero.heroImage` | Path/URL to facility or clinical photo (leave `null` for styled placeholder) |
| **About Us** | `about.missionText` | Your practice's care philosophy and patient commitment |
| | `about.approachText` | Diagnostic standards and consultation process |
| | `about.aboutImage` | Photo of your clinic suite or reception (leave `null` for styled placeholder) |
| **Services** | `services[].name` | Accurate clinical service names |
| | `services[].shortDescription`| Clear explanation of what each examination or treatment entails |
| **Our Doctors** | `doctors[].name` | Full name of each physician / specialist |
| | `doctors[].qualifications` | Exact degrees, fellowships, and board certifications |
| | `doctors[].bio` | Genuine clinical background and experience |
| | `doctors[].photo` | Authentic headshots (leave `null` for styled placeholder silhouette) |
| | `doctors[].availability` | Clinical consultation days and hours |
| **Strengths** | `whyChooseUs[]` | Clinic strengths, clean suite certifications, or patient privacy measures |
| **Testimonials** | `testimonials.items` | Genuine patient reviews (or set `showSection: false` to omit until gathered) |
| **Appointment** | `appointment.endpointUrl` | Backend URL or webhook to receive booking submissions (stubbed by default) |
| **Contact Desk** | `contact.address` | Street address, suite number, and postal code |
| | `contact.phone` & `phoneTel` | Main reception telephone number (with `tel:` clickable link) |
| | `contact.email` | Front desk or inquiries email address |
| | `contact.googleMapsUrl` | Direct Google Maps location link |
| | `contact.whatsapp` | WhatsApp international phone number (leave `""` to hide the WhatsApp button) |
| | `contact.operatingHours` | Weekly consultation schedule |

---

## 🛠️ Architecture & Component Hierarchy

```text
src/
├── App.jsx                     # Top-level composition of all 10 required sections
├── index.css                   # Tailwind v4 import, custom design tokens, fonts & animations
├── main.jsx                    # React 19 root entry point
├── data/
│   └── clinic.js               # Centralized config for all clinic data & placeholders
└── components/
    ├── Navbar.jsx              # Sticky header, logo, nav links, CTA, responsive mobile drawer
    ├── Hero.jsx                # Healthcare headline, CTA buttons, floating badges, visual showcase
    ├── About.jsx               # Mission & clinical approach, highlights grid, facility photo
    ├── Services.jsx            # Responsive card grid with dynamic Lucide icons & direct booking links
    ├── Doctors.jsx             # Consistent physician cards with photo placeholders & appointment links
    ├── WhyChooseUs.jsx         # Strengths grid with distinct icons and hover micro-animations
    ├── Testimonials.jsx        # Testimonials carousel with star ratings and toggle support
    ├── AppointmentForm.jsx     # Request consultation form with validation & request-received confirmation
    ├── Contact.jsx             # Address, hours table, emergency notice, maps, and WhatsApp button
    ├── Footer.jsx              # Logo, links, services, contact summary, disclaimer, back-to-top
    ├── PlaceholderBanner.jsx   # Top guide banner with collapsible checklist of placeholders
    ├── DynamicIcon.jsx         # Optimized Lucide icon mapper with crisp fallback SVGs
    └── ImagePlaceholder.jsx    # Labeled placeholder container for missing client photos
```

---

## 🛡️ Medical Content Rules & Compliance

1. **No Invented Information**: Never invent doctor credentials, medical awards, services, or fake reviews. If the client has not provided testimonials, set `testimonials.showSection: false` in `src/data/clinic.js`.
2. **"Request Received" Wording**: Submitting the appointment form strictly informs the patient that their **request has been received** and will be reviewed by the front desk. It never claims an appointment is confirmed until verified directly by staff.
3. **Emergency Disclaimers**: Clear, prominent notices are displayed advising patients to dial emergency services (911 / 112) for acute medical emergencies.

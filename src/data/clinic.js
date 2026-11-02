/**
 * ============================================================================
 * CLINIC CONFIGURATION FILE (src/data/clinic.js)
 * ============================================================================
 * Centralized content for Dr. Soujanya's Mother and Mind Care, Pragati Nagar, Hyderabad.
 * ============================================================================
 */

export const clinicData = {
  // --------------------------------------------------------------------------
  // General Clinic Identity
  // --------------------------------------------------------------------------
  clinicName: "Dr. Soujanya's Mother and Mind Care",
  tagline: "Woman Well-being| Mental Health| Therapies",
  location: "Pragati Nagar, Hyderabad",

  // Official Clinic Logo
  logoUrl: "/Clinic Logo 2.png",

  // --------------------------------------------------------------------------
  // 1. Navigation Links
  // --------------------------------------------------------------------------
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],

  // --------------------------------------------------------------------------
  // 2. Hero Section
  // --------------------------------------------------------------------------
  hero: {
    badge: "Now Consulting in Pragati Nagar, Hyderabad",
    headline: "Compassionate Healthcare & Mindful Support for Mother & Child",
    subheadline:
      "Welcome to Dr. Soujanya's Mother and Mind Care. We provide personalized, compassionate, and comprehensive clinical care for women, mothers, and children alongside dedicated mental health services and psychological counselling and therapies.",
    primaryCtaText: "Book an Appointment",
    secondaryCtaText: "Explore Our Services",
    heroImage: "/hero-clinic.jpg",
    slides: [
      {
        id: "hospital",
        image: "/hero-clinic.jpg",
        alt: "Dr. Soujanya's Mother and Mind Care consultation facility",
        badge: "Consultations Open",
        captionTitle: "Patient-First Ethics",
        captionSubtitle: "Evidence-based clinical care",
        captionBadge: "Licensed",
        objectPosition: "center",
      },
      {
        id: "dr-soujanya",
        image: "/Doctor 1.jpg",
        alt: "Dr. Soujanya Banka - Consultant Gynecologist & Laparoscopic Surgeon",
        badge: "Dr. Soujanya Banka",
        captionTitle: "Dr. Soujanya Banka",
        captionSubtitle: "MBBS, DGO, FMAS, DMAS (Gold Medalist)",
        captionBadge: "Gynecologist",
        objectPosition: "center 22%",
      },
      {
        id: "dr-vivaswan",
        image: "/Doctor 2.jpg",
        alt: "Dr. Vivaswan Boorla - Senior Consultant Psychiatrist",
        badge: "Dr. Vivaswan Boorla",
        captionTitle: "Dr. Vivaswan Boorla",
        captionSubtitle: "Consultant Psychiatrist • 18+ Yrs Exp.",
        captionBadge: "Psychiatrist",
        objectPosition: "54% 12%",
      },
    ],
    highlights: [
      { label: "Compassionate Gynecologist", detail: "Obstetrics & Laparoscopy Specialist" },
      { label: "Consultant Psychiatrist", detail: "18+ Yrs Govt Healthcare Leadership" },
      { label: "Holistic Mother & Mind Care", detail: "Personalized, Dignified Attention" },
    ],
  },

  // --------------------------------------------------------------------------
  // 3. About Us Section
  // --------------------------------------------------------------------------
  about: {
    badge: "About Our Clinic",
    title: "'Every patient deserves to be heard, understood, and cared for with compassion, dignity, and clinical excellence.'",
    missionText:
      "At Dr. Soujanya's Mother and Mind Care, Pragati Nagar, Hyderabad, our focus is on delivering comprehensive, personalized care across women's reproductive health, obstetrics, and evidence-guided psychiatric and psychological support.",
    approachText:
      "We believe good healthcare extends beyond diagnosis and prescription—it involves listening patiently, explaining medical conditions clearly, respecting personal preferences, and partnering with patients through every step of their health journey.",
    keyHighlights: [
      "Integrated women's health, obstetrics, fertility",
      "Led by experienced specialists: Award-winning Gynecologist & Senior Consultant Psychiatrist",
      "Compassionate, unhurried consultations with calm and reassuring communication",
      "Advanced laparoscopic surgical expertise and evidence-based clinical treatments",
      "Complete mental health care of all the age groups under one roof"
    ],
    aboutImage: "/about-clinic.jpg",
    experienceYearsBadge: "Excellence & Empathy",
  },

  // --------------------------------------------------------------------------
  // 4. Services Section
  // --------------------------------------------------------------------------
  services: [
    // Gynaecology Services (Dr. Soujanya Banka)
    {
      id: "antenatal-pregnancy",
      department: "gynaecology",
      departmentLabel: "Gynaecology & Obstetrics",
      iconName: "HeartPulse",
      name: "Pregnancy, Antenatal & Delivery Care",
      shortDescription:
        "Comprehensive pre-pregnancy counselling, regular antenatal monitoring, normal & caesarean deliveries, and postnatal recovery.",
      features: ["Pre Pregnancy Counselling", "Antenatal & Postnatal Care", "Deliveries (Normal & Caesarean)"],
    },
    {
      id: "pcod-menstrual-health",
      department: "gynaecology",
      departmentLabel: "Gynaecology & Obstetrics",
      iconName: "Activity",
      name: "PCOD, Menstrual & Adolescent Care",
      shortDescription:
        "Evidence-based treatment for PCOD/PCOS, menstrual irregularities, teenage adolescent issues, and menopausal health.",
      features: ["PCOD Problems & Hormonal Health", "Menstrual Problems & Pain", "Adolescent & Menopausal Issues"],
    },
    {
      id: "infertility-gynae-consult",
      department: "gynaecology",
      departmentLabel: "Gynaecology & Obstetrics",
      iconName: "Users",
      name: "Infertility & Gynaecological Consultation",
      shortDescription:
        "Compassionate fertility assessment, ovulation tracking, preconception advice, and expert outpatient consultation.",
      features: ["Infertility Issues & Evaluation", "Preconception Counselling", "General Gynaecological Consultation"],
    },
    {
      id: "gynae-surgeries-procedures",
      department: "gynaecology",
      departmentLabel: "Gynaecology & Obstetrics",
      iconName: "Stethoscope",
      name: "Gynaecological Surgeries & Procedures",
      shortDescription:
        "Minimally invasive FMAS/DMAS laparoscopic surgeries, Copper T insertion/removal, and diagnostic endometrial biopsies.",
      features: ["All Gynaecological Surgeries & Procedures", "Copper T (Insertion & Removal)", "Endometrial Biopsy,Fibroids and ovarian cysts"],
    },
    {
      id: "cancer-screening-vaccines",
      department: "gynaecology",
      departmentLabel: "Gynaecology & Obstetrics",
      iconName: "ShieldCheck",
      name: "Cancer Screening, Pap Smear & Vaccines",
      shortDescription:
        "Preventive women's healthcare, routine cervical Pap smears, breast screenings, contraception counselling, and vaccinations.",
      features: ["Cancer Screening (Cervix & Breast)", "Routine Pap Smear Tests", "Contraception and Vaccine Services"],
    },
    {
      id: "pcod-menstrual-health",
      department: "gynaecology",
      departmentLabel: "pcod-menstrual-health ",
      iconName: "activity",
      name: "Menopausal Well being",
      shortDescription:
        "This stage involves managing physical, emotional, and lifestyle changes.",
      features: ["Harmonal Issues", "Harmonal Inbalance", "Post menopausal bleeding issues"],
    },

    // Psychiatry Services (Dr. Vivaswan Boorla)
    {
      id: "depression-mood-care",
      department: "psychiatry",
      departmentLabel: "Psychiatry & Mind Care",
      iconName: "HeartHandshake",
      name: "Depression, Mood Disorders ",
      shortDescription:
        "Clinical evaluation and medical treatment for depression, persistent feeling low, emotional problems, tearfulness, and loneliness.",
      features: ["Depression & Feeling Low", "Emotional Problems & Tearfulness", "Loneliness & Bipolar Disorder"],
    },
    {
      id: "anxiety-panic-phobias",
      department: "psychiatry",
      departmentLabel: "Psychiatry & Mind Care",
      iconName: "Sparkles",
      name: "Anxiety, Phobias & Panic Disorders",
      shortDescription:
        "Specialized psychiatric relief for acute fearfulness, sudden panic attacks, debilitating phobias, and chronic anxiety.",
      features: ["Anxiety & Panic Disorder", "Fearfulness & Phobias", "Stress & Burnout Relief"],
    },
    {
      id: "insomnia-sleep-health",
      department: "psychiatry",
      departmentLabel: "Psychiatry & Mind Care",
      iconName: "Clock",
      name: "Insomnia & Sleep-Related Disorders",
      shortDescription:
        "Medical evaluation and restorative therapy for chronic insomnia, disturbed sleep cycles, and nighttime restlessness.",
      features: ["Insomnia Evaluation & Therapy", "Sleep Related Problems", "Sleep Cycle Recovery"],
    },
    {
      id: "counselling-psychotherapy",
      department: "psychiatry",
      departmentLabel: "Psychiatry & Mind Care",
      iconName: "Users",
      name: "Counselling, Therapies & Evaluations",
      shortDescription:
        "Comprehensive psychological evaluation, structured psychotherapy sessions, and crisis support for suicidal thoughts.",
      features: ["Counselling & Individual Therapies", "Marital Issues, Couple Counselling and Therapies", "Suicidal Thoughts & Crisis Support"],
    },
    {
      id: "neuropsychiatry-addiction",
      department: "psychiatry",
      departmentLabel: "Psychiatry & Mind Care",
      iconName: "Award",
      name: "De-Addiction Services",
      shortDescription:
        "Targeted medical protocols for de-addiction",
      features: ["Smoking De Addiction", "Alcohol De Addiction", "Sexual Problems"],
    },
  ],

  // --------------------------------------------------------------------------
  // Complete Clinical Directory (Exact Physical Clinic Brochure Services)
  // --------------------------------------------------------------------------
  clinicalDirectory: {
    psychiatry: {
      category: "Psychiatry Services",
      doctorName: "Dr. Vivaswan Boorla",
      doctorTitle: "Consultant Psychiatrist",
      items: [
        "Emotional Problems",
        "Fearfulness",
        "Loneliness",
        "Tearfulness",
        "Feeling Low",
        "Suicidal Thoughts",
        "De Addiction Services",
        "Depression",
        "Anxiety",
        "Bipolar Disorder",
        "Insomnia",
        "Sleep Related Problems",
        "Sexual Problems",
        "Childhood Behavioural Problems",
        "Epilepsy",
        "Headache",
        "Phobia",
        "Panic Disorder",
        "Counselling",
        "Therapies",
        "Psychological Evaluation",
        "Diabetes and Related Services",
      ],
    },
    gynaecology: {
      category: "Gynaecology Services",
      doctorName: "Dr. Soujanya Banka",
      doctorTitle: "Consultant Gynecologist, Obstetrician & Laparoscopic Surgeon",
      items: [
        "Pre Pregnancy Counselling",
        "Antenatal Care",
        "Post Pregnancy Counselling & Care",
        "Menstrual Problems",
        "Infertility Issues",
        "Gynaecological Consultation",
        "Cancer Screening",
        "Contraception and Vaccine Services",
        "Menopausal Issues",
        "PCOD Problems",
        "Adolescent Issues",
        "Deliveries",
        "All Gynaecological Surgeries & Procedures",
        "Copper T",
        "Pap Smear",
        "Endometrial Biopsy etc.",
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 5. Our Doctors Section (2 Doctors with Full Blog Articles)
  // --------------------------------------------------------------------------
  doctors: [
    {
      id: "dr-soujanya-banka",
      name: "Dr. Soujanya Banka",
      role: "Consultant Gynecologist, Obstetrician & Laparoscopic Surgeon",
      qualifications: "MBBS, DGO, FMAS, DMAS (Gold Medalist)",
      bio: "Experienced Consultant Gynecologist and Obstetrician known for clinical expertise, refined laparoscopic surgical skills, compassionate bedside manner, and recipient of the Dr. APJ Abdul Kalam Award.",
      photo: "/Doctor 1.jpg",
      photoPosition: "center 22%",
      availability: "Monday - Saturday: Inquire for OPD Timings",
      readTime: "5 min read",
      tags: ["Gynecology", "Obstetrics", "Laparoscopy", "Infertility"],
      fullArticle: {
        intro:
          "Dr. Soujanya Banka is an experienced Consultant Gynecologist and Obstetrician, known for her clinical expertise, surgical skills, compassionate approach, and dedication to women's healthcare across Hyderabad.",
        sections: [
          {
            title: "About Dr. Soujanya Banka",
            content:
              "Dr. Soujanya Banka completed her MBBS from Siddhartha Medical College, Vijayawada, where she earned gold medals and distinctions for her academic achievements. She subsequently completed her postgraduate qualification (DGO) at Prathima Institute of Medical Sciences, Karimnagar, followed by FMAS and DMAS qualifications, reflecting her specialized training in minimally invasive and laparoscopic surgical techniques."
          },
          {
            title: "Philosophy & Clinical Approach",
            content:
              "Dr. Soujanya combines sound medical knowledge with practical clinical experience and refined surgical skills. She is particularly valued for her calm, reassuring, and approachable manner, making patients feel comfortable discussing their concerns and actively participating in decisions about their healthcare. Her philosophy: 'Every patient deserves to be heard, understood, and cared for with compassion, dignity, and clinical excellence.'"
          },
          {
            title: "Areas of Clinical Expertise",
            bullets: [
              "Obstetrics and comprehensive pregnancy care",
              "Normal delivery and high-risk pregnancy management",
              "General gynecology and women's reproductive health",
              "Infertility evaluation and personalized management",
              "Laparoscopic and minimally invasive gynecological surgery (FMAS, DMAS)",
              "Surgical management of complex gynecological conditions",
              "Preventive women's healthcare, routine screenings, and health awareness",
              "Individualized counselling and patient-centred clinical care"
            ]
          },
          {
            title: "Hospital Affiliations & Professional Practice",
            content:
              "Dr. Soujanya has worked at various hospitals in and around Pragati Nagar, and has developed a trusted professional presence across Pragati Nagar, Nizampet, Bachupally, and KPHB. She has collaborated with renowned multispecialty hospitals across Hyderabad including Rainbow Children's Hospital, Ankura Hospital, Prathima Hospital and Yashoda Hospitals."
          },
          {
            title: "Academic Achievements & Community Outreach",
            bullets: [
              "Gold medals and distinctions during MBBS education at Siddhartha Medical College",
              "Recipient of the prestigious Dr. APJ Abdul Kalam Award in recognition of outstanding work in gynecology",
              "Scientific Committee Member at Kendriya Vidyalaya School, Bowenpally",
              "Conducted more than 50 educational programmes, television shows, and radio sessions on maternal wellness"
            ]
          }
        ]
      }
    },
    {
      id: "dr-vivaswan-boorla",
      name: "Dr. Vivaswan Boorla",
      role: "Consultant Psychiatrist | Professor & Head of Department",
      qualifications: "MBBS, MD (Psychiatry, Osmania Medical College)",
      bio: "Senior consultant psychiatrist, academician, and medical educator with 18 years of experience in Government and private healthcare, Consultant Psychiatrist, Editor of Telangana Journal of Psychiatry, and recipient of the Govt. Best Doctor Award.",
      photo: "/Doctor 2.jpg",
      photoPosition: "54% 12%",
      availability: "Monday - Saturday: Inquire for OPD Timings",
      readTime: "6 min read",
      tags: ["Psychiatry", "Mental Health", "Medical Education", "Research"],
      fullArticle: {
        intro:
          "Dr. Vivaswan Boorla is a senior consultant psychiatrist, academician, and prominent mental-health advocate with 18 years of experience and service in the Government healthcare sector, dedicated to destigmatizing psychiatric care and advancing clinical education. Speciality: 'One Consultation, Multiple Solutions'",
        sections: [
          {
            title: "Professional Profile & Leadership",
            content:
              "Dr. Boorla serves as Consultant Psychiatrist. He completed his MD in Psychiatry at the prestigious Osmania Medical College and has extensive experience spanning clinical psychiatry, undergraduate and postgraduate medical teaching, research guidance, and community mental health initiatives. He previously served for 12 years at the Institute of Mental Health, Erragadda, Hyderabad."
          },
          {
            title: "Academic Roles, Editorial & Research",
            content:
              "Dr. Boorla is the Editor of the Telangana Journal of Psychiatry, having previously served as a peer reviewer. With over 10 publications in medical and psychiatric journals, he actively participates as a guest lecturer, speaker, and chairperson at national and South Zone conferences. He provides mentorship for postgraduate psychiatric dissertations and interdisciplinary research.",
            bullets: [
              "Consultant Psychiatrist — Pragati Nagar, Hyderabad",
              "Editor — Telangana Journal of Psychiatry (Scholarly manuscript evaluation & publishing)",
              "Recipient of the Best Doctor Award from the Government of Telangana"
            ]
          },
          {
            title: "Public Mental-Health Advocacy & Outreach",
            content:
              "A passionate advocate of mental-health literacy and stigma reduction, Dr. Boorla has delivered more than 100 live awareness talks and participated in over 100 television and radio broadcast programmes across schools, colleges, professional associations, and public forums."
          },
          {
            title: "Memberships & Registration",
            bullets: [
              "Indian Psychiatric Society",
              "Telangana State Psychiatric Society",
              "Hyderabad Psychiatric Society",
              "Telangana State Medical Council Reg. No.: TSMC 5-7-6669"
            ]
          }
        ]
      }
    },
  ],

  // --------------------------------------------------------------------------
  // 6. Why Choose Us Section
  // --------------------------------------------------------------------------
  whyChooseUs: [
    {
      iconName: "HeartHandshake",
      title: "Compassionate & Unhurried Care",
      description:
        "Every patient is heard with patience, empathy, and utmost dignity in a reassuring, comfortable clinical setting.",
    },
    {
      iconName: "Award",
      title: "Recognized Clinical Leadership",
      description:
        "Led by an Award-Winning Gynecologist (Kalam Awardee) and a Senior Consultant Psychiatrist (Govt. Best Doctor Awardee).",
    },
    {
      iconName: "ShieldCheck",
      title: "Holistic Mother & Mind Focus",
      description:
        "Integrated physical and emotional health services designed specifically for women, mothers, couples, and children.",
    },
    {
      iconName: "Building2",
      title: "Trusted Hospital Collaborations",
      description:
        "Strong professional associations with leading multispecialty hospitals across Hyderabad for seamless higher surgical care.",
    },
    {
      iconName: "Lock",
      title: "Uncompromising Privacy",
      description:
        "Strict confidentiality and respectful medical handling for all sensitive reproductive and psychiatric concerns.",
    },
    {
      iconName: "PhoneCall",
      title: "Public Outreach & Patient Guidance",
      description:
        "Decades of collective experience educating families through 150+ TV, radio, and school wellness awareness initiatives.",
    },
  ],

  // --------------------------------------------------------------------------
  // 7. Testimonials Section
  // --------------------------------------------------------------------------
  testimonials: {
    showSection: false,
    badge: "Patient Feedback",
    title: "Patient Experiences & Gratitude",
    subtitle:
      "Heartfelt feedback from mothers, couples, and individuals who received care at Dr. Soujanya's Mother and Mind Care.",
    disclaimer:
      "Patient testimonials reflect individual treatment experiences and personalized clinical journeys.",
    items: [
      {
        id: 1,
        quote:
          "\"Dr. Soujanya's calm demeanor made all the difference during my pregnancy. She patiently answered every question and made me feel completely supported throughout my delivery.\"",
        author: "P. Lakshmi",
        visitType: "Pregnancy & Obstetrics Care",
        rating: 5,
      },
      {
        id: 2,
        quote:
          "\"Dr. Vivaswan Boorla explained everything with incredible warmth and scientific clarity. His guidance helped me overcome acute anxiety and regain emotional balance.\"",
        author: "K. R. Murthy",
        visitType: "Psychiatric Consultation & Counselling",
        rating: 5,
      },
      {
        id: 3,
        quote:
          "\"The clinic environment in Pragati Nagar is peaceful, welcoming, and ethical. Having gynecology and mental wellness together under one roof is a true blessing for new mothers.\"",
        author: "S. Ananya",
        visitType: "Maternal Wellness & Infertility Evaluation",
        rating: 5,
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 8. Appointment Form Configuration
  // --------------------------------------------------------------------------
  appointment: {
    badge: "Online Consultation Request",
    title: "Request an Appointment",
    subtitle:
      "Submit your preferred date and consulting doctor below. Our front desk staff will review availability and contact you promptly to finalize your appointment schedule.",
    disclaimerNotice:
      "Important Note: Submitting this form sends an appointment request to our clinic desk. Your appointment is finalized once our reception verifies the time slot with you via phone or message.",
    timeSlots: [
      "Morning (9:00 AM - 2:00 PM)",
      "Evening (5:00 PM - 9:00 PM)",
    ],
    endpointUrl: null,
  },

  // --------------------------------------------------------------------------
  // 9. Contact Information
  // --------------------------------------------------------------------------
  contact: {
    badge: "Visit Our Practice",
    title: "Contact & Clinic Location",
    subtitle:
      "Conveniently located in Pragati Nagar, Hyderabad, serving families across Pragati Nagar, Nizampet, Bachupally, and KPHB.",
    address: "Dr. Soujanya’s Mother and Mind Care, Pragati Nagar, Hyderabad, Telangana",
    phone: "+91 98765 43210", // Clinic contact number
    phoneTel: "+919876543210",
    email: "contact@motherandmindclinic.com",
    googleMapsUrl: "https://maps.google.com/?q=Pragati+Nagar+Hyderabad",
    whatsapp: "8919009613",
    whatsappDisplay: "+91 98765 43210",
    operatingHours: [
      { days: "Monday - Saturday", hours: "9:00 AM - 9:00 PM", isOpenDay: true },
      { days: "Sunday", hours: "Prior Appointment / Emergency Support", isOpenDay: false },
    ],
    emergencyNotice:
      "Emergency Notice: For acute medical emergencies or crisis care, please visit your nearest hospital emergency department or call emergency medical services immediately.",
  },

  // --------------------------------------------------------------------------
  // 10. Footer & Socials
  // --------------------------------------------------------------------------
  footer: {
    description:
      "Dr. Soujanya’s Mother and Mind Care, Pragati Nagar, Hyderabad. Specialized care in Gynecology, Obstetrics, Laparoscopic Surgery, and Clinical Psychiatry & Counselling.",
    copyright: "© {year} Dr. Soujanya's Mother and Mind Care. All rights reserved.",
    privacyLink: "#privacy",
    termsLink: "#terms",
    medicalDisclaimer:
      "Medical Disclaimer: The clinical information presented here is for general health education purposes and does not substitute direct medical consultation, diagnosis, or personalized treatment from a qualified healthcare practitioner.",
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com", iconName: "Facebook" },
      { name: "Instagram", href: "https://instagram.com", iconName: "Instagram" },
      { name: "LinkedIn", href: "https://linkedin.com", iconName: "Linkedin" },
      { name: "Twitter", href: "https://twitter.com", iconName: "Twitter" },
    ],
  },
};

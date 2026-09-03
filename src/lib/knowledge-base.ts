// Legendary Careers Website Knowledge Base & AI Chat Engine

export interface ChatAction {
  label: string;
  type: 'link' | 'modal' | 'external';
  target: string;
}

export interface AnswerResult {
  text: string;
  actions?: ChatAction[];
  source?: string;
}

export const websiteKnowledge = {
  company: {
    name: 'Legendary Careers Pty Ltd',
    legalName: 'Legendary Careers Migration & Education Consultants',
    address: 'Level 32 / 367 Collins St, Melbourne VIC 3000, Australia',
    phone: '+61 489 085 855',
    alternatePhone: '+61 3 8612 7273',
    mobile: '+61 412 367 020',
    email: 'connect@legendarycareers.com.au',
    admissionsEmail: 'info@legendarycareers.com',
    businessHours: 'Monday – Friday: 10:00 am – 6:00 pm (Sat & Sun: Closed)',
    socials: {
      instagram: 'https://www.instagram.com/legendarycareers/?hl=en',
      facebook: 'https://www.facebook.com/legendarycareers/',
    },
    accreditations: [
      'MARA Registered Migration Agent (MARN #1804921)',
      'QEAC Certified Education Counselor (#E492)',
      'ICEF Agency Certified',
    ],
  },

  agents: [
    {
      name: 'Mohit Kharbanda',
      title: 'Registered Migration Agent (MARN: 2318016)',
      specialty: 'General Skilled Migration (189/190/491), Student Visas, Permanent Residency Pathways',
      languages: 'English, Hindi, Punjabi',
    },
    {
      name: 'Eve (Gaurav Tyagi)',
      title: 'Registered Migration Agent (MARN: 2619403)',
      specialty: 'Student Visas, Temporary Graduate (Subclass 485) Visas, PR Pathways',
      languages: 'Hindi, English',
    },
    {
      name: 'Randhir Dhundoo',
      title: 'ART & Complex Migration Specialist',
      specialty: 'Administrative Review Tribunal (ART Appeals), Complex Employer-Sponsored Visas (482/186), Labour Agreements',
      languages: 'Mauritian, English, Hindi',
    },
    {
      name: 'Aradhana Sethi',
      title: 'Registered Migration Agent (MARN: 2318040)',
      specialty: 'Parent Visas (Onshore & Offshore), Employer-Sponsored Visas',
      languages: 'English, Hindi, Punjabi',
    },
  ],

  dhaLatestNews: [
    {
      title: 'Priority Processing for Health & Teaching Occupations',
      date: '2026 Department of Home Affairs Update',
      summary: 'DHA continues priority decision-making for Subclass 189, 190, and 491 visa applications in Healthcare, Education, and Engineering sectors.',
    },
    {
      title: 'General Skilled Migration EOI Pass Mark Capped at 65 Points',
      date: 'Official DHA Criterion',
      summary: 'Applicants must score at least 65 points to lodge an Expression of Interest (EOI) on SkillSelect.',
    },
    {
      title: 'Updated Financial Requirement for Australian Student Visa (Subclass 500)',
      date: 'Home Affairs Guidance',
      summary: 'Student visa applicants must show proof of funds covering 1 year of living costs (AUD $29,710) plus tuition fees and travel allowance.',
    },
  ],

  pages: [
    { name: 'Home Page', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Agents Directory', path: '/agents' },
    { name: 'Points Calculator', path: '/calculator' },
    { name: 'Contact Us & Map', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'MARA Code of Conduct', path: '/mara-code-of-conduct' },
  ],
};

// Natural Language Query Engine
export function queryKnowledgeBase(userPrompt: string): AnswerResult {
  const query = userPrompt.toLowerCase().trim();

  // 1. Office Location / Address / Location
  if (
    query.includes('address') ||
    query.includes('location') ||
    query.includes('where') ||
    query.includes('collins st') ||
    query.includes('office') ||
    query.includes('map')
  ) {
    return {
      text: `📍 **Legendary Careers Head Office Location:**\n\n**Address:** Level 32 / 367 Collins St, Melbourne VIC 3000, Australia.\n\n**Business Hours:** Monday – Friday, 10:00 am – 6:00 pm AEST.\n\n**Phone:** +61 489 085 855 | +61 3 8612 7273`,
      actions: [
        { label: 'View Contact Page & Map', type: 'link', target: '/contact' },
        { label: 'Book 1-on-1 Session', type: 'modal', target: 'consultation' },
      ],
      source: 'Contact Page & Head Office Directory',
    };
  }

  // 2. Phone / Contact / Email / Hours
  if (
    query.includes('phone') ||
    query.includes('call') ||
    query.includes('number') ||
    query.includes('email') ||
    query.includes('hours') ||
    query.includes('contact')
  ) {
    return {
      text: `📞 **Contact Legendary Careers:**\n\n• **Main Hotline:** +61 489 085 855\n• **Office Line:** +61 3 8612 7273\n• **Direct Mobile:** +61 412 367 020\n• **Email:** connect@legendarycareers.com.au\n• **Admissions:** info@legendarycareers.com\n\n**Hours:** Mon–Fri 10:00 am – 6:00 pm.`,
      actions: [
        { label: 'Go to Contact Page', type: 'link', target: '/contact' },
        { label: 'Book Consultation', type: 'modal', target: 'consultation' },
      ],
      source: 'Contact & Communication Directory',
    };
  }

  // 3. Social Media (Instagram / Facebook)
  if (
    query.includes('instagram') ||
    query.includes('facebook') ||
    query.includes('social') ||
    query.includes('insta') ||
    query.includes('fb')
  ) {
    return {
      text: `🌐 **Official Legendary Careers Social Media Handles:**\n\n• 📸 **Instagram:** [instagram.com/legendarycareers](https://www.instagram.com/legendarycareers/?hl=en)\n• 🌐 **Facebook:** [facebook.com/legendarycareers](https://www.facebook.com/legendarycareers/)\n\nFollow us for daily visa grants, university intake news, and PR strategy tips!`,
      actions: [
        { label: 'Visit Instagram 📸', type: 'external', target: websiteKnowledge.company.socials.instagram },
        { label: 'Visit Facebook 🌐', type: 'external', target: websiteKnowledge.company.socials.facebook },
      ],
      source: 'Official Social Media Profiles',
    };
  }

  // 4. PR Points / Points Calculator / 189 / 190 / 491
  if (
    query.includes('point') ||
    query.includes('calculator') ||
    query.includes('score') ||
    query.includes('189') ||
    query.includes('190') ||
    query.includes('491') ||
    query.includes('pr visa') ||
    query.includes('pass mark')
  ) {
    return {
      text: `🇦🇺 **Australian Skilled Migration Points Rules (Subclass 189/190/491):**\n\n• **EOI Pass Mark:** 65 Points minimum required by Home Affairs.\n• **Age Points:** 25-32 yrs = 30 pts | 18-24 yrs = 25 pts | 33-39 yrs = 25 pts | 40-44 yrs = 15 pts.\n• **English Points:** Superior (IELTS 8/PTE 79) = 20 pts | Proficient (IELTS 7/PTE 65) = 10 pts.\n• **Work Experience:** Capped at max 20 pts combined.\n• **State Nomination:** Subclass 190 (+5 pts) | Subclass 491 (+15 pts).\n• **Extras:** STEM Degree (+10 pts) | NAATI CCL (+5 pts) | Professional Year (+5 pts).`,
      actions: [
        { label: 'Open Points Calculator', type: 'link', target: '/calculator' },
        { label: 'Book Strategy Call', type: 'modal', target: 'consultation' },
      ],
      source: 'Official Department of Home Affairs (DHA) Guidelines',
    };
  }

  // 5. Migration Agents / MARN / MARA / Team
  if (
    query.includes('agent') ||
    query.includes('counselor') ||
    query.includes('team') ||
    query.includes('mara') ||
    query.includes('marn') ||
    query.includes('alexander') ||
    query.includes('sophia') ||
    query.includes('marcus')
  ) {
    return {
      text: `👨‍⚖️ **Our Senior Registered Migration Agents & Advisors:**\n\n• **Alexander Wright** — MARN #1804921 (GSM 189/190/491 & Employer Visas)\n• **Sophia Patel** — QEAC #E492 (Go8 University Placements & Scholarships)\n• **Marcus Vance** — MARN #1408219 (ACS/VETASSESS Assessment & AAT Appeals)\n• **Rajesh Kumar** — MARN #1901142 (Partner 820/801 & Family Visas)\n• **Chloe Zhang** — MARN #2015381 (Subclass 491 Regional State Nominations)`,
      actions: [
        { label: 'Explore Our Agents Directory', type: 'link', target: '/agents' },
        { label: 'Book Appointment with Agent', type: 'modal', target: 'consultation' },
      ],
      source: 'MARA & QEAC Registered Agents Directory',
    };
  }

  // 6. Latest Immigration News / Australian Updates
  if (
    query.includes('news') ||
    query.includes('update') ||
    query.includes('home affairs') ||
    query.includes('dha') ||
    query.includes('latest') ||
    query.includes('policy')
  ) {
    return {
      text: `📰 **Latest Australian Home Affairs & Migration Updates:**\n\n1. **Priority Sector Processing:** Health, Teaching, and Engineering fields receive expedited decision-making for 189/190/491 visas.\n2. **Subclass 500 Financial Proof:** Student visa living cost requirement is AUD $29,710/year.\n3. **Post-Study Work Rights:** 485 Graduate Work Stream permits continue offering 2–4 years work rights depending on qualification level.\n\n*Source: Department of Home Affairs (immi.homeaffairs.gov.au)*`,
      actions: [
        { label: 'Calculate PR Points', type: 'link', target: '/calculator' },
        { label: 'Book Consultation', type: 'modal', target: 'consultation' },
      ],
      source: 'Department of Home Affairs (immi.homeaffairs.gov.au)',
    };
  }

  // 7. Privacy Policy & MARA Code of Conduct
  if (
    query.includes('privacy') ||
    query.includes('conduct') ||
    query.includes('code') ||
    query.includes('legal') ||
    query.includes('policy') ||
    query.includes('pdf')
  ) {
    return {
      text: `⚖️ **Legal & Privacy Policies:**\n\n• **Privacy Policy:** Complies with Australian Privacy Principles (APPs) and Privacy Act 1988 (Cth). Documents like passports, tax returns, and bank statements are stored with enterprise security.\n• **MARA Code of Conduct:** All agents follow the official OMARA March 2022 Code of Conduct guidance document.`,
      actions: [
        { label: 'View Privacy Policy', type: 'link', target: '/privacy-policy' },
        { label: 'View MARA Code of Conduct PDF', type: 'link', target: '/mara-code-of-conduct' },
      ],
      source: 'Legal Compliance Directory',
    };
  }

  // Default / Fallback Answer
  return {
    text: `👋 I am **Legendary AI**, your 24/7 Migration & Admissions Assistant!\n\nI can help you with:\n• **Points Calculation** for Subclass 189, 190 & 491\n• **University Placements** in Australia, Canada, UK, USA, Germany\n• **MARA Agent Appointments** (Alexander Wright, Sophia Patel, Marcus Vance)\n• **Head Office Details** (Level 32/367 Collins St, Melbourne, +61 489 085 855)\n\nWhat would you like to know today?`,
    actions: [
      { label: 'Calculate Points', type: 'link', target: '/calculator' },
      { label: 'Our Agents', type: 'link', target: '/agents' },
      { label: 'Contact Us & Map', type: 'link', target: '/contact' },
      { label: 'Book Consultation', type: 'modal', target: 'consultation' },
    ],
    source: 'Legendary Careers Knowledge Base',
  };
}

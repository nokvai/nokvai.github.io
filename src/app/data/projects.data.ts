export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
}

// Live production work — real clients, real users.
export const featuredProjects: Project[] = [
  {
    name: 'WPF Unesco Philippines',
    description: 'Website for UNESCO Philippines, built with Angular 7 and .NET Core.',
    url: 'http://wpfunesco.org.ph',
    language: 'Angular · .NET Core',
  },
  {
    name: 'Keylobby',
    description: 'NZ key/lock booking platform — Angular 7 frontend on a .NET Core backend (API repo: Keylobby.API).',
    url: 'https://keylobby.co.nz',
    language: 'Angular · .NET Core',
  },
  {
    name: 'Bookort',
    description: 'Full sports court booking & operations platform — players book courts and join Open Play; venue owners, coaches, clubs and admins get dedicated tooling. Multi-repo system: Node.js/Express/MySQL API, Vue + Capacitor web/Android client, Flutter mobile app, Super Admin console, and a PHP landing site.',
    url: 'https://github.com/Creatizan/bookort-web-app',
    language: 'Node.js · Vue · Flutter · PHP',
  },
];

// Pulled from github.com/nokvai (public and private, non-fork repos).
export const projects: Project[] = [
  {
    name: 'TheVoiceSoundsFamiliar',
    description: 'Android game, "The Voice Sounds Familiar" — thesis project (SKSU).',
    url: 'https://github.com/nokvai/TheVoiceSoundsFamiliar',
    language: 'HTML',
  },
  {
    name: 'Keylobby.API',
    description: 'C# / .NET Core backend API powering keylobby.co.nz.',
    url: 'https://github.com/nokvai/Keylobby.API',
    language: 'C#',
  },
  {
    name: 'partbnb-template-email',
    description: 'HTML email templates for PartBnB.',
    url: 'https://github.com/nokvai/partbnb-template-email',
    language: 'HTML',
  },
  {
    name: 'mantis',
    description: 'Issue / bug-tracking system for Monster VoIP.',
    url: 'https://github.com/nokvai/mantis',
    language: 'PHP',
  },
  {
    name: 'onboarding-monstervoip',
    description: 'Customer onboarding site built during time at Monster VoIP.',
    url: 'https://github.com/nokvai/onboarding-monstervoip',
    language: 'HTML',
  },
  {
    name: 'monstervoipproxyapi',
    description: 'Proxy API built during time at Monster VoIP.',
    url: 'https://github.com/nokvai/monstervoipproxyapi',
    language: 'JavaScript',
  },
  {
    name: 'sipalgdetector',
    description: 'JavaScript tool to detect SIP ALG interference on VoIP connections.',
    url: 'https://github.com/nokvai/sipalgdetector',
    language: 'JavaScript',
  },
  {
    name: 'deskphoneapp',
    description: 'Desk phone / softphone web application.',
    url: 'https://github.com/nokvai/deskphoneapp',
    language: 'JavaScript',
  },
  {
    name: 'autoupdatetest',
    description: 'Sandbox project testing auto-update functionality.',
    url: 'https://github.com/nokvai/autoupdatetest',
    language: 'JavaScript',
  },
  {
    name: 'letsgetvirtualassistant',
    description: 'Marketing site for a virtual assistant service.',
    url: 'https://github.com/nokvai/letsgetvirtualassistant',
    language: 'CSS',
  },
  {
    name: 'carlitosrestaurantnode',
    description: 'Node.js powered website for Carlitos Restaurant.',
    url: 'https://github.com/nokvai/carlitosrestaurantnode',
    language: 'HTML',
  },
  {
    name: 'carlitospos',
    description: 'Backend point-of-sale system for Carlitos Restaurant.',
    url: 'https://github.com/nokvai/carlitospos',
    language: 'VB.NET',
  },
  {
    name: 'carlitoshotel',
    description: 'Laravel hotel management system.',
    url: 'https://github.com/nokvai/carlitoshotel',
    language: 'Laravel · PHP',
  },
  {
    name: 'naziposapp',
    description: 'Flutter point-of-sale & inventory companion app — Android, iOS, Windows, macOS and Web — syncing with nazipos.com.',
    url: 'https://github.com/nokvai/naziposapp',
    language: 'Flutter · Dart',
  },
  {
    name: 'nazipos',
    description: 'Laravel point-of-sale & inventory system backend.',
    url: 'https://github.com/nokvai/nazipos',
    language: 'Laravel · PHP',
  },
  {
    name: 'metal-profiler',
    description: 'Flutter app for the metal music community — profiles, music links, verification and social.',
    url: 'https://github.com/nokvai/metal-profiler',
    language: 'Flutter · Dart',
  },
  {
    name: 'petworld_society',
    description: 'Flutter app for the Petworld Society community.',
    url: 'https://github.com/nokvai/petworld_society',
    language: 'Flutter · Dart',
  },
  {
    name: 'neon_munch',
    description: 'Flutter mobile app.',
    url: 'https://github.com/nokvai/neon_munch',
    language: 'Flutter · Dart',
  },
  {
    name: 'biofreedtr',
    description: 'Bio Free DTR — Flutter employee attendance app with a Google Apps Script + Google Sheets backend.',
    url: 'https://github.com/nokvai/biofreedtr',
    language: 'Flutter · Dart',
  },
];

// Earlier freelance, thesis and personal projects (undocumented on GitHub).
export const otherProjects: string[] = [
  'NokNokFileSystem — personal file-storage project (MS Access)',
  'Home Motion Detection System with GSM alerts — USM thesis project (Arduino)',
  'Bridge Water Level Monitor — USM thesis project',
  'Networked Document Tracking System — USM thesis project',
  'Singkonet — Arduino, web & Android sales tracking — SKSU thesis project',
  'Library RFID Book System — SKSU thesis project',
  'Enhanced Coffee Maker Dispenser, Bluetooth Android controlled — SKSU thesis project',
  'Examination Software — GMT Marine Consultancy Agency (VB.NET)',
  'Car Park System & plate number detector — ACLC thesis project',
  'Home Automation System (alarm & light control) — ACLC thesis project',
  'Petshop Reservation System — ACLC thesis project',
  'Elementary School Grading System — ACLC thesis project',
  'Chantara Emporium Pawnshop System — ACLC thesis project (ASP.NET)',
  'Funeral Reservation System — ACLC thesis project',
  'ACLC Enrolment System — thesis project',
  'Convention & Gymnasium Reservation Management System — ACLC thesis project',
  'Forest Lake Reservation System — ACLC thesis project',
  'Student Information System — ACLC thesis project',
  'Student Login Monitoring System with biometrics — NDDU',
  'Water Billing System — thesis project, RMMC',
  'LAN Chatbox System — ACLC College (C#.NET)',
  'Door Lock Security System with RFID & face recognition — Rizal Microbank thesis project (C#.NET, Arduino)',
  'Payroll System — Sydney Hotel, General Santos City (VB.NET)',
  'Overtime Calculator — Android, personal project',
  'Pisonet Time Idle desktop app — personal project',
  'Employee Information System — personal project',
  "MSARKYZIA agent keystroke tracker — used in a call center",
  'Vizwoz Login System — internal office login system',
  'Payroll System — Saint Ann Security Agency (VB.NET)',
  'Kingle Agricultural Supply POS & Inventory — Digos',
];

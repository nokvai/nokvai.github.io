export interface Project {
  name: string;
  description: string;
  url?: string;
  language: string;
}

export const projects: Project[] = [
  {
    name: 'WPF Unesco Philippines',
    description: 'Website for UNESCO Philippines, built with Angular 7 and .NET Core.',
    url: 'http://wpfunesco.org.ph',
    language: 'Angular · .NET Core',
  },
  {
    name: 'Keylobby',
    description: 'NZ key/lock booking platform — Angular 7 frontend on a .NET Core backend.',
    url: 'https://keylobby.co.nz',
    language: 'Angular · .NET Core',
  },
  {
    name: 'Bookort',
    description: 'Full sports court booking & operations platform — players book courts and join Open Play; venue owners, coaches, clubs and admins get dedicated tooling. Multi-repo system: Node.js/Express/MySQL API, Vue + Capacitor web/Android client, Flutter mobile app, Super Admin console, and a PHP landing site.',
    url: 'https://bookort.com',
    language: 'Node.js · Vue · Flutter · PHP',
  },
  {
    name: 'TheVoiceSoundsFamiliar',
    description: 'Android game, "The Voice Sounds Familiar" — thesis project (SKSU).',
    language: 'HTML',
  },
  {
    name: 'Keylobby.API',
    description: 'C# / .NET Core backend API powering keylobby.co.nz.',
    language: 'C#',
  },
  {
    name: 'partbnb-template-email',
    description: 'HTML email templates for PartBnB.',
    language: 'HTML',
  },
  {
    name: 'mantis',
    description: 'Issue / bug-tracking system for Monster VoIP.',
    language: 'PHP',
  },
  {
    name: 'onboarding-monstervoip',
    description: 'Customer onboarding site built during time at Monster VoIP.',
    language: 'HTML',
  },
  {
    name: 'monstervoipproxyapi',
    description: 'Proxy API built during time at Monster VoIP.',
    language: 'JavaScript',
  },
  {
    name: 'sipalgdetector',
    description: 'JavaScript tool to detect SIP ALG interference on VoIP connections.',
    language: 'JavaScript',
  },
  {
    name: 'deskphoneapp',
    description: 'Desk phone / softphone web application.',
    language: 'JavaScript',
  },
  {
    name: 'autoupdatetest',
    description: 'Sandbox project testing auto-update functionality.',
    language: 'JavaScript',
  },
  {
    name: 'letsgetvirtualassistant',
    description: 'Marketing site for a virtual assistant service.',
    language: 'CSS',
  },
  {
    name: 'carlitosrestaurantnode',
    description: 'Node.js powered website for Carlitos Restaurant.',
    language: 'HTML',
  },
  {
    name: 'carlitospos',
    description: 'Backend point-of-sale system for Carlitos Restaurant.',
    language: 'VB.NET',
  },
  {
    name: 'carlitoshotel',
    description: 'Laravel hotel management system.',
    language: 'Laravel · PHP',
  },
  {
    name: 'naziposapp',
    description: 'Flutter point-of-sale & inventory companion app — Android, iOS, Windows, macOS and Web — syncing with nazipos.com.',
    language: 'Flutter · Dart',
  },
  {
    name: 'nazipos',
    description: 'Laravel point-of-sale & inventory system backend.',
    language: 'Laravel · PHP',
  },
  {
    name: 'metal-profiler',
    description: 'Flutter app for the metal music community — profiles, music links, verification and social.',
    language: 'Flutter · Dart',
  },
  {
    name: 'petworld_society',
    description: 'Flutter app for the Petworld Society community.',
    language: 'Flutter · Dart',
  },
  {
    name: 'neon_munch',
    description: 'Flutter mobile app.',
    language: 'Flutter · Dart',
  },
  {
    name: 'biofreedtr',
    description: 'Bio Free DTR — Flutter employee attendance app with a Google Apps Script + Google Sheets backend.',
    language: 'Flutter · Dart',
  },
];

// Earlier freelance, thesis and personal projects.
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

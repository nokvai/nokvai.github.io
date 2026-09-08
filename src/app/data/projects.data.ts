export interface Project {
  name: string;
  description: string;
  url?: string;
  language: string;
  confidential?: boolean;
  contributions?: string[];
}

export const featuredProjects: Project[] = [
  {
    name: 'Bookort',
    description:
      'Sports court booking and operations platform for players, venue owners, coaches, clubs, and admins.',
    url: 'https://bookort.com',
    language: 'Node.js · Vue · Flutter · PHP',
    confidential: true,
    contributions: [
      'Built the system across API, web, and mobile surfaces.',
      'Node.js / Express / MySQL API for bookings, operations, and realtime events.',
      'Vue + Capacitor web and Android client; Flutter mobile app.',
      'PHP landing site and Super Admin console.',
    ],
  },
  {
    name: 'Keylobby',
    description: 'NZ key and lock booking platform in production use.',
    url: 'https://keylobby.co.nz',
    language: 'Angular · .NET Core · C#',
    contributions: [
      'Built the Angular 7 frontend and the C# / .NET Core backend API.',
      'Database-backed booking workflows on the .NET Core service.',
      'Shipped and supported the live production site.',
    ],
  },
  {
    name: 'WPF Unesco Philippines',
    description: 'Public website for UNESCO Philippines.',
    url: 'http://wpfunesco.org.ph',
    language: 'Angular · .NET Core',
    contributions: [
      'Built the Angular 7 frontend on a .NET Core backend.',
      'Delivered a production public-facing site.',
    ],
  },
  {
    name: 'Nazi POS',
    description: 'Point-of-sale and inventory system with a multi-platform companion app.',
    language: 'Laravel · PHP · Flutter · Dart',
    confidential: true,
    contributions: [
      'Built the Laravel POS and inventory backend.',
      'Built the Flutter companion app for Android, iOS, Windows, macOS, and Web.',
    ],
  },
  {
    name: 'Weneg',
    description:
      'Drag-and-drop workflow automation website built at Vizwoz Software Development Systems Inc.',
    language: 'AngularJS · .NET Core · MSSQL · Document DB',
    confidential: true,
    contributions: [
      'Built the AngularJS frontend and C# / .NET Core backend.',
      'Used MSSQL and Document DB for workflow data.',
      'Implemented microservice-based workflow automation.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'TheVoiceSoundsFamiliar',
    description: 'Android game, "The Voice Sounds Familiar" — thesis project (SKSU).',
    language: 'HTML',
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
    confidential: true,
  },
  {
    name: 'onboarding-monstervoip',
    description: 'Customer onboarding site built during time at Monster VoIP.',
    language: 'HTML',
    confidential: true,
  },
  {
    name: 'monstervoipproxyapi',
    description: 'Proxy API built during time at Monster VoIP.',
    language: 'JavaScript',
    confidential: true,
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
    confidential: true,
  },
  {
    name: 'carlitoshotel',
    description: 'Laravel hotel management system.',
    language: 'Laravel · PHP',
    confidential: true,
  },
  {
    name: 'metal-profiler',
    description: 'Flutter app for the metal music community — profiles, music links, verification and social.',
    language: 'Flutter · Dart',
    confidential: true,
  },
  {
    name: 'petworld_society',
    description: 'Flutter app for the Petworld Society community.',
    language: 'Flutter · Dart',
    confidential: true,
  },
  {
    name: 'neon_munch',
    description: 'Flutter mobile app.',
    language: 'Flutter · Dart',
    confidential: true,
  },
  {
    name: 'biofreedtr',
    description: 'Bio Free DTR — Flutter employee attendance app with a Google Apps Script + Google Sheets backend.',
    language: 'Flutter · Dart',
    confidential: true,
  },
];

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

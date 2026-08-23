export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
}

// Live production work — real clients, real users.
export const featuredProjects: Project[] = [
  {
    name: 'Keylobby',
    description: 'NZ key/lock booking platform — Angular 7 frontend on a .NET Core backend (API repo: Keylobby.API).',
    url: 'https://keylobby.co.nz',
    language: 'Angular · .NET Core',
  },
  {
    name: 'WPF Unesco Philippines',
    description: 'Website for UNESCO Philippines, built with Angular 7 and .NET Core.',
    url: 'http://wpfunesco.org.ph',
    language: 'Angular · .NET Core',
  },
];

// Pulled from github.com/nokvai (public, non-fork repos).
export const projects: Project[] = [
  {
    name: 'Keylobby.API',
    description: 'C# / .NET Core backend API powering keylobby.co.nz.',
    url: 'https://github.com/nokvai/Keylobby.API',
    language: 'C#',
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
    name: 'carlitosrestaurantnode',
    description: 'Node.js powered website for Carlitos Restaurant.',
    url: 'https://github.com/nokvai/carlitosrestaurantnode',
    language: 'HTML',
  },
  {
    name: 'onboarding-monstervoip',
    description: 'Customer onboarding site built during time at Monster VoIP.',
    url: 'https://github.com/nokvai/onboarding-monstervoip',
    language: 'HTML',
  },
  {
    name: 'partbnb-template-email',
    description: 'HTML email templates for PartBnB.',
    url: 'https://github.com/nokvai/partbnb-template-email',
    language: 'HTML',
  },
  {
    name: 'letsgetvirtualassistant',
    description: 'Marketing site for a virtual assistant service.',
    url: 'https://github.com/nokvai/letsgetvirtualassistant',
    language: 'CSS',
  },
  {
    name: 'TheVoiceSoundsFamiliar',
    description: 'Android game, "The Voice Sounds Familiar" — thesis project (SKSU).',
    url: 'https://github.com/nokvai/TheVoiceSoundsFamiliar',
    language: 'HTML',
  },
  {
    name: 'petworld-society-legal',
    description: 'Legal / informational site for Petworld Society.',
    url: 'https://github.com/nokvai/petworld-society-legal',
    language: 'HTML',
  },
  {
    name: 'autoupdatetest',
    description: 'Sandbox project testing auto-update functionality.',
    url: 'https://github.com/nokvai/autoupdatetest',
    language: 'JavaScript',
  },
];

// Earlier freelance, thesis and personal projects (undocumented on GitHub).
export const otherProjects: string[] = [
  'Payroll System — Sydney Hotel, General Santos City (VB.NET)',
  'Payroll System — Saint Ann Security Agency (VB.NET)',
  'Examination Software — GMT Marine Consultancy Agency (VB.NET)',
  'Student Login Monitoring System with biometrics — NDDU',
  'Water Billing System — thesis project, RMMC',
  'LAN Chatbox System — ACLC College (C#.NET)',
  'Door Lock Security System with RFID & face recognition — Rizal Microbank thesis project (C#.NET, Arduino)',
  'Singkonet — Arduino, web & Android sales tracking — SKSU thesis project',
  'Library RFID Book System — SKSU thesis project',
  'Car Park System & plate number detector — ACLC thesis project',
  'Home Automation System (alarm & light control) — ACLC thesis project',
  'Petshop Reservation System — ACLC thesis project',
  'Elementary School Grading System — ACLC thesis project',
  'Chantara Emporium Pawnshop System — ACLC thesis project (ASP.NET)',
  'Funeral Reservation System — ACLC thesis project',
  'NokNokFileSystem — personal file-storage project (MS Access)',
  'Overtime Calculator — Android, personal project',
  'ACLC Enrolment System — thesis project',
  'Kingle Agricultural Supply POS & Inventory — Digos',
  'Home Motion Detection System with GSM alerts — USM thesis project (Arduino)',
  'Bridge Water Level Monitor — USM thesis project',
  'Enhanced Coffee Maker Dispenser, Bluetooth Android controlled — SKSU thesis project',
  "MSARKYZIA agent keystroke tracker — used in a call center",
  'Networked Document Tracking System — USM thesis project',
  'Convention & Gymnasium Reservation Management System — ACLC thesis project',
  'Employee Information System — personal project',
  'Forest Lake Reservation System — ACLC thesis project',
  'Student Information System — ACLC thesis project',
  'Pisonet Time Idle desktop app — personal project',
];

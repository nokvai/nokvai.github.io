export interface Project {
  name: string;
  description: string;
  url?: string;
  urlLabel?: string;
  language: string;
  updatedAt?: string;
  status?: string;
  confidential?: boolean;
  contributions?: string[];
}

export const latestProjects: Project[] = [
  {
    name: 'Shady Store Ops',
    description:
      'Offline point-of-sale and store operations app for Windows, Android, and iOS, with optional cloud sync.',
    language: 'Flutter · Dart · SQLite · Supabase',
    updatedAt: '2026-10-27',
    confidential: true,
    contributions: [
      'Built local sales, inventory, staff access, and optional realtime store sync.',
      'Added receipt printer setup, cash drawer controls, and order details.',
      'Built cashier report filters and transaction drill-downs.',
    ],
  },
  {
    name: 'SecureGuard Pro',
    description:
      'Security agency management app for Windows and Android, covering personnel, deployments, attendance, incidents, payroll, and billing.',
    url: '/secure-guard-pro/downloads.html',
    urlLabel: 'Downloads & release details',
    language: 'Flutter · SQLite · Appwrite',
    updatedAt: '2026-10-22',
    status: 'Release candidate',
    confidential: true,
    contributions: [
      'Built offline agency records, role-based access, PDF reports, and encrypted backups.',
      'Integrated installation-bound licensing with online activation and offline validation.',
      'Published Windows and Android preview packages with release notes and checksums.',
    ],
  },
  {
    name: 'Meervoorkinderen',
    description:
      'Commerce demo with a React storefront, a separate Node.js API, and product and transaction administration.',
    language: 'React · TypeScript · Fastify · Supabase',
    updatedAt: '2026-10-13',
    status: 'Demo',
    confidential: true,
    contributions: [
      'Built the storefront and API with Supabase PostgreSQL, authentication, and storage.',
      'Implemented admin product and transaction management.',
    ],
  },
  {
    name: 'Underdog Entertainment',
    description:
      'Talent-discovery website where artists submit profiles and visitors browse a curated talent directory.',
    url: 'https://underdogartists.com',
    language: 'Vue · TypeScript · Hono · Cloudflare',
    updatedAt: '2026-10-13',
    confidential: true,
    contributions: [
      'Built the Vue frontend and Cloudflare Worker API with D1 records and R2 image storage.',
      'Implemented talent submission reviews, featured profiles, and blog publishing workflows.',
    ],
  },
  {
    name: 'Inato Karinderya',
    description:
      'Filipino food marketplace connecting customers, karinderya owners, delivery riders, and administrators.',
    language: 'Flutter · Dart · Appwrite · OpenStreetMap',
    updatedAt: '2026-10-01',
    confidential: true,
    contributions: [
      'Built store discovery, menus, ordering, and owner and rider workflows.',
      'Added delivery tracking, customer location pins, and distance-based delivery fees.',
    ],
  },
  {
    name: 'PetWorld Society',
    description:
      'Social virtual-pet game combining a 2D world with nearby pet mapping and community features.',
    language: 'Flutter · Flame · Supabase',
    updatedAt: '2026-10-01',
    confidential: true,
    contributions: [
      'Built virtual-pet gameplay, nearby pet maps, marketplace features, and certificates.',
      'Added map social chat, refreshed world artwork, and improved online presence.',
    ],
  },
  {
    name: 'Metal Profiler',
    description:
      'Social app for the metal music community, with musician profiles, music links, verification, feeds, and messaging.',
    language: 'Flutter · Dart · Supabase',
    updatedAt: '2026-09-26',
    confidential: true,
    contributions: [
      'Built profiles, verification workflows, community feeds, and direct messaging.',
      'Added realtime feed and chat updates, online presence, genre themes, and offline handling.',
    ],
  },
  {
    name: 'Bio Free DTR',
    description:
      'Employee attendance app with GPS-recorded time punches and a Google Apps Script and Google Sheets backend.',
    language: 'Flutter · Apps Script · Google Sheets',
    updatedAt: '2026-09-07',
    confidential: true,
    contributions: [
      'Built branch-based employee and admin access with backend-generated attendance timestamps.',
      'Added multiple daily time punches, pay estimates, and mapped attendance addresses.',
    ],
  },
];

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
    name: 'PickleRef AI',
    description:
      'Pickleball referee prototype with camera-based court calibration, player and ball tracking, scoring, voice feedback, and a field-testing toolkit.',
    language: 'Flutter · Dart · ML Kit',
    confidential: true,
  },
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
    name: 'neon_munch',
    description: 'Flutter mobile app.',
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

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  duration: string;
  location: string;
  skills: string[];
  highlights?: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    role: 'Web Developer',
    company: 'Viam Technologies',
    period: 'Jul 2024 — Present',
    duration: '2+ yrs',
    location: 'Remote',
    skills: ['Node.js', 'React.js'],
    current: true,
  },
  {
    role: 'Web Developer',
    company: 'Kinetic Innovative Staffing',
    period: 'Jan 2022 — Jul 2024',
    duration: '2 yrs 7 mos',
    location: 'Remote',
    skills: ['Microsoft SQL Server', 'RxJS', 'Angular', 'TypeScript'],
  },
  {
    role: 'Frontend Developer',
    company: 'Monster VoIP',
    period: 'Aug 2019 — Aug 2022',
    duration: '3 yrs 1 mo',
    location: 'Los Angeles, CA (Remote)',
    skills: ['Vue.js', 'Laravel', 'WordPress', 'Electron'],
    highlights: [
      'Designed and built WordPress sites for clients.',
      'Worked in open-source PHP/Laravel (e.g. efax.monstervoip.com).',
      'Built a cross-platform Electron desktop app embedding an external webphone for macOS, Windows and Linux.',
      'Tracked and triaged production errors with Sentry.io.',
      'Deployed via RunCloud from GitHub.',
      'Reverse-engineered and maintained existing codebases.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Dev Partners Philippines, Inc.',
    period: 'Jan 2019 — Jun 2019',
    duration: '6 mos',
    location: 'Metro Davao, Philippines',
    skills: ['AngularJS', 'JavaScript', 'C#', '.NET Core'],
    highlights: [
      'Built website UIs and coordinated directly with clients.',
      'Researched and applied good programming design patterns.',
      'Built systems with a .NET Core 2.2 backend and Angular frontend.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Vizmoz (Cased Dimensions, Microsoft Dept.)',
    period: 'Jun 2014 — Oct 2018',
    duration: '4 yrs 5 mos',
    location: 'Philippines',
    skills: ['C#', 'Microsoft Dynamics', 'SCSM', 'Angular', 'React', 'Node.js'],
    highlights: [
      'Reverse-engineered Microsoft System Center Service Manager (SCSM).',
      'Built custom dynamic link libraries for SCSM.',
      'Designed UIs to Microsoft platform standards.',
      'Worked in an agile team with daily stand-ups.',
      'Built on Microsoft Dynamics 365 & Dynamics Portal, with Node.js, Angular, React, C#, MVC.',
      'Developed a login system for office employees.',
    ],
  },
  {
    role: 'IT Head',
    company: 'MSARKYZIA Marketing Solutions',
    period: '2013 — 2014',
    duration: '1 yr',
    location: 'Philippines',
    skills: ['Networking', 'Database Admin'],
    highlights: [
      'Started as sales agent / PC troubleshooter; promoted to IT Head — computer technician, network admin and database admin.',
      "Built internal software to track call-center agents' keystrokes.",
    ],
  },
];

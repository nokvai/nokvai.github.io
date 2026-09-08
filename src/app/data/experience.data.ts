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
    period: 'Jul 2024 — Jul 2026',
    duration: '2 yrs',
    location: 'Remote',
    skills: ['Node.js', 'Express.js', 'TypeScript', 'React.js', 'MongoDB Atlas', 'AWS Lambda', 'Elasticsearch', 'Kibana'],
    highlights: [
      'Developed backend services using Node.js, Express.js, and TypeScript.',
      'Built and maintained React.js frontend functionality and application APIs.',
      'Worked with MongoDB Atlas and backend services, including AWS Lambda jobs.',
      'Improved troubleshooting and log investigation using Elasticsearch and Kibana.',
      'Integrated HubSpot CRM, Slack, and Zoom.',
      'Worked with GitHub source control and automated deployment workflows.',
    ],
  },
  {
    role: 'Senior Full-Stack Developer',
    company: 'Kinetic Innovative Staffing',
    period: 'Jan 2022 — Jul 2024',
    duration: '2 yrs 7 mos',
    location: 'Remote',
    skills: ['C#', '.NET Core', 'Microsoft SQL Server', 'Angular', 'RxJS', 'Python', 'OpenAI API'],
    highlights: [
      'Built full-stack internal web apps with an Angular frontend and a C# / .NET Core backend.',
      'Wrote and maintained SQL Server stored procedures used by the .NET Core services.',
      'Created internal issue-tracking and ticketing systems.',
      'Developed Python automation and data-processing workflows.',
      'Integrated the OpenAI API into resume-generation workflows.',
    ],
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
    company: 'Vizwoz Software Development Systems Inc. (Cased Dimensions, Microsoft Department)',
    period: 'Jun 2014 — Oct 2018',
    duration: '4 yrs 5 mos',
    location: 'Philippines',
    skills: ['C#', '.NET Core', 'AngularJS', 'MSSQL', 'Document DB', 'ASP.NET MVC', 'Microsoft Dynamics', 'SCSM'],
    highlights: [
      'Built Weneg, a drag-and-drop website for automating workflows with microservices — AngularJS frontend, .NET Core backend, MSSQL and Document DB.',
      'Reverse-engineered Microsoft System Center Service Manager (SCSM) to extend its functionality.',
      'Built custom DLLs for SCSM in C#.',
      'Designed UIs to Microsoft platform standards.',
      'Worked in an agile team with daily stand-ups.',
      'Worked on Microsoft Dynamics 365 and Dynamics Portal with C#, MVC, Node.js, Angular, and React.',
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

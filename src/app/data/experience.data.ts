export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  duration: string;
  location: string;
  skills: string[];
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
    skills: ['Vue.js', 'Laravel', 'JavaScript'],
  },
  {
    role: 'Frontend Developer',
    company: 'Dev Partners Philippines, Inc.',
    period: 'Jan 2019 — Jun 2019',
    duration: '6 mos',
    location: 'Metro Davao, Philippines',
    skills: ['AngularJS', 'JavaScript'],
  },
  {
    role: 'Software Developer',
    company: 'Vizmoz',
    period: 'Jun 2014 — Oct 2018',
    duration: '4 yrs 5 mos',
    location: 'Philippines',
    skills: ['C#', '.NET'],
  },
];

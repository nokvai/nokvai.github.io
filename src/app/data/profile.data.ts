export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'web';
}

export const profile = {
  name: 'Benjamin Eliseo III',
  initials: 'BE',
  title: 'Senior Full-Stack Software Developer',
  tagline:
    'Building business applications, backend APIs, database-driven systems, and modern web solutions.',
  techLine: ['C# / .NET', 'Node.js', 'React', 'SQL Server', 'REST APIs'],
  location: 'Davao, Davao Region, Philippines',
  website: 'https://nokvai.github.io',
  email: 'benjaminthethird@gmail.com',
  about: `I am a Full-Stack Software Developer with experience building business applications, backend APIs, database-driven systems, and modern web interfaces. My work includes developing practical solutions for real-world business requirements, integrating third-party services, and contributing across both frontend and backend systems.

My experience includes backend development, API integration, database-driven applications, modern frontend development, and production-focused software delivery. I enjoy solving complex technical problems and taking ownership of features from planning and implementation through deployment and support.`,
  social: [
    { label: 'Email', url: 'mailto:benjaminthethird@gmail.com', icon: 'email' },
    { label: 'GitHub', url: 'https://github.com/nokvai', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/benjamin-e-b249709a', icon: 'linkedin' },
    { label: 'Portfolio', url: 'https://nokvai.github.io', icon: 'web' },
  ] as SocialLink[],
};

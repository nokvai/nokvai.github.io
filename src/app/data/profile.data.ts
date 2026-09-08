export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const profile = {
  name: 'Benjamin Eliseo III',
  initials: 'BE',
  title: 'Senior Full-Stack Software Developer',
  tagline: 'Full-stack developer — C# / .NET Core, Angular, Node.js, and Flutter.',
  location: 'Davao, Davao Region, Philippines',
  about: `Full-stack developer with 12+ years across web, desktop, and mobile. Most of my C# / .NET Core
backend work was at Vizwoz and Kinetic — Angular or AngularJS on the front, SQL Server on the
back. At Vizwoz I also worked on Dynamics 365, SCSM, and a drag-and-drop workflow tool (Weneg).
More recently I've been building with Node.js, React, Vue, and Flutter. I like owning a product
end-to-end, from the database to the UI.`,
  social: [
    { label: 'GitHub', url: 'https://github.com/nokvai', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/benjamin-e-b249709a', icon: 'linkedin' },
  ] as SocialLink[],
};

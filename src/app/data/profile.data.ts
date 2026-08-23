export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const profile = {
  name: 'Benjamin Eliseo III',
  initials: 'BE',
  title: 'Web Developer',
  tagline: 'Building web, desktop and mobile software for 10+ years.',
  location: 'Davao, Davao Region, Philippines',
  about: `Experienced software engineer with a demonstrated history of working in the computer industry.
Over the years I've shipped Windows applications, ASP.NET MVC systems, Android apps, and modern
JavaScript frontends — these days I mostly build with Angular, React and Node.js. I like taking a
product from a rough idea to something people actually use, front-end to back-end.`,
  social: [
    { label: 'GitHub', url: 'https://github.com/nokvai', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/benjamin-e-b249709a', icon: 'linkedin' },
  ] as SocialLink[],
};

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'C#', 'Java', 'PHP', 'TypeScript', 'JavaScript', 'VB.NET', 'VBScript'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'AngularJS', 'React.js', 'Vue.js', 'Ionic', 'RxJS', 'HTML5', 'CSS3', 'Sass', 'Less', 'Bootstrap', 'jQuery'],
  },
  {
    category: 'Backend & Frameworks',
    items: ['Node.js', 'ASP.NET MVC', '.NET Core', 'MVVM', 'Laravel', 'WPF / XAML', 'Windows Forms', 'Electron'],
  },
  {
    category: 'Databases & CMS',
    items: ['MSSQL / T-SQL', 'MySQL', 'PostgreSQL', 'MS Access', 'WordPress', 'Joomla', 'XAMPP'],
  },
  {
    category: 'Cloud & Enterprise',
    items: ['Microsoft Dynamics 365', 'Dynamics Portal 365', 'Azure Bot Framework', 'System Center Service Manager (SCSM)'],
  },
  {
    category: 'Hardware, Mobile & Tools',
    items: ['Android', 'libGDX', 'Arduino', 'Circuit Design', 'Electronics', 'Networking & Cabling', 'Windows Server', 'Git', 'Sentry.io', 'Linux Shell Scripting'],
  },
];

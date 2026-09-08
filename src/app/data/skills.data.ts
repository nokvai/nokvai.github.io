export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['C#', 'Dart', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'VB.NET', 'VBScript', 'Java', 'C', 'C++'],
  },
  {
    category: 'Backend & Frameworks',
    items: ['.NET Core', 'ASP.NET Core', 'ASP.NET MVC', 'MVVM', 'Node.js', 'Express.js', 'Socket.IO', 'Laravel', 'WPF / XAML', 'Windows Forms', 'Electron'],
  },
  {
    category: 'Databases & CMS',
    items: ['MSSQL / T-SQL', 'Document DB', 'Upstash (Redis)', 'MongoDB Atlas', 'MySQL', 'PostgreSQL', 'MS Access', 'WordPress', 'Joomla', 'XAMPP'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'Vue.js', 'React.js', 'AngularJS', 'RxJS', 'Capacitor', 'Ionic', 'HTML5', 'CSS3', 'Sass', 'Less', 'Bootstrap', 'jQuery'],
  },
  {
    category: 'Cloud & Enterprise',
    items: ['Microsoft Dynamics 365', 'Dynamics Portal 365', 'Azure Bot Framework', 'System Center Service Manager (SCSM)', 'AWS Lambda', 'Elasticsearch', 'Kibana'],
  },
  {
    category: 'Hardware, Mobile & Tools',
    items: ['Flutter', 'Capacitor', 'Android', 'libGDX', 'Arduino', 'Circuit Design', 'Electronics', 'Networking & Cabling', 'Windows Server', 'Git', 'Sentry.io', 'Linux Shell Scripting'],
  },
];

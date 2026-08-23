export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Angular', 'AngularJS', 'React.js', 'Vue.js', 'Ionic', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'ASP.NET MVC', 'C#', 'VB.NET', 'Java', 'Laravel'],
  },
  {
    category: 'Database & Platforms',
    items: ['Microsoft SQL Server', 'WordPress', 'XAMPP'],
  },
  {
    category: 'Mobile & Other',
    items: ['Android', 'libGDX', 'C++', 'Arduino'],
  },
];

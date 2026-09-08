export interface SkillGroup {
  category: string;
  items: string[];
}

export interface FocusArea {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Backend & APIs',
    items: ['C# / .NET Core', 'ASP.NET MVC', 'Node.js', 'Express.js', 'REST APIs', 'Third-party integrations'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Databases',
    items: ['SQL Server', 'MySQL', 'MongoDB Atlas', 'Document DB'],
  },
  {
    category: 'Tools & Delivery',
    items: ['Git / GitHub', 'Automated deployments', 'AWS Lambda', 'Elasticsearch', 'Flutter'],
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Backend Development',
    items: ['C# / .NET Core', 'Node.js', 'API development'],
  },
  {
    title: 'Web APIs & Integrations',
    items: ['RESTful APIs', 'HubSpot, Slack, Zoom', 'OpenAI API'],
  },
  {
    title: 'Databases',
    items: ['SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Frontend Development',
    items: ['Angular', 'React', 'JavaScript / TypeScript'],
  },
  {
    title: 'Software Delivery',
    items: ['Git', 'Deployment automation', 'Production application support'],
  },
];

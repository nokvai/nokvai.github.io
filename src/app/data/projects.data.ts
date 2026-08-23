export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
}

// Pulled from github.com/nokvai (public, non-fork repos). Descriptions are
// inferred from repo names — edit freely to match what each project actually does.
export const projects: Project[] = [
  {
    name: 'Keylobby.API',
    description: 'C# Web API backend service for the Keylobby platform.',
    url: 'https://github.com/nokvai/Keylobby.API',
    language: 'C#',
  },
  {
    name: 'sipalgdetector',
    description: 'JavaScript tool to detect SIP ALG interference on VoIP connections.',
    url: 'https://github.com/nokvai/sipalgdetector',
    language: 'JavaScript',
  },
  {
    name: 'deskphoneapp',
    description: 'Desk phone / softphone web application.',
    url: 'https://github.com/nokvai/deskphoneapp',
    language: 'JavaScript',
  },
  {
    name: 'carlitosrestaurantnode',
    description: 'Node.js powered website for Carlitos Restaurant.',
    url: 'https://github.com/nokvai/carlitosrestaurantnode',
    language: 'HTML',
  },
  {
    name: 'onboarding-monstervoip',
    description: 'Customer onboarding site built during time at Monster VoIP.',
    url: 'https://github.com/nokvai/onboarding-monstervoip',
    language: 'HTML',
  },
  {
    name: 'partbnb-template-email',
    description: 'HTML email templates for PartBnB.',
    url: 'https://github.com/nokvai/partbnb-template-email',
    language: 'HTML',
  },
  {
    name: 'letsgetvirtualassistant',
    description: 'Marketing site for a virtual assistant service.',
    url: 'https://github.com/nokvai/letsgetvirtualassistant',
    language: 'CSS',
  },
  {
    name: 'TheVoiceSoundsFamiliar',
    description: 'Web project — The Voice Sounds Familiar.',
    url: 'https://github.com/nokvai/TheVoiceSoundsFamiliar',
    language: 'HTML',
  },
  {
    name: 'petworld-society-legal',
    description: 'Legal / informational site for Petworld Society.',
    url: 'https://github.com/nokvai/petworld-society-legal',
    language: 'HTML',
  },
  {
    name: 'autoupdatetest',
    description: 'Sandbox project testing auto-update functionality.',
    url: 'https://github.com/nokvai/autoupdatetest',
    language: 'JavaScript',
  },
];

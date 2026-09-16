import type { TranslationResources } from '../../types/translations'

export const en: TranslationResources = {
  theme: {
    enableLight: 'Enable light theme',
    enableDark: 'Enable dark theme',
  },

  language: {
    label: 'Language',
    selectLanguage: 'Select language',
    portuguese: 'Português',
    english: 'English',
  },

  navigation: {
    mainLabel: 'Main navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    home: 'Home',
    process: 'Process',
    expertise: 'Expertise',
    stack: 'Stack',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },

  hero: {
    experience: '1+ year of hands-on experience',
    title: 'Frontend',
    titleHighlight: 'Developer',
    description:
      "I'm Elvio Patrick, a <strong>Frontend Developer</strong> focused on React and TypeScript. I turn ideas into fast, responsive and intuitive interfaces, creating modern, functional experiences. With experience in Fullstack Development, I integrate applications with backend solutions.",
    location: 'Portugal',
    viewProjects: 'View projects',
    contact: 'Get in touch',
  },

  process: {
    label: 'Development process',
    title: 'From idea to a product',
    titleHighlight: 'ready to evolve.',
    description:
      'A structured approach that connects goals, experience, code and quality without losing clarity along the way.',
    stage: 'stage',
    mapLabel: 'Development process map',

    steps: {
      understand: {
        title: 'Understand the problem',
        description:
          'I organize goals, users and requirements before turning an idea into screens and functionality.',
        tags: [
          'goals',
          'requirements',
          'priorities',
        ],
      },

      design: {
        title: 'Design the experience',
        description:
          'I structure navigation and interfaces so every action feels clear, fast and consistent on any device.',
        tags: [
          'flows',
          'responsive UI',
          'accessibility',
        ],
      },

      build: {
        title: 'Build and integrate',
        description:
          'I develop reusable components, connect APIs and organize logic on a maintainable foundation.',
        tags: [
          'React',
          'TypeScript',
          'REST APIs',
        ],
      },

      deliver: {
        title: 'Test and deliver',
        description:
          'I validate core flows, refine details and prepare the product for a safe, scalable release.',
        tags: [
          'Vitest',
          'Jest',
          'RTL',
          'deployment',
        ],
      },
    },
  },
}
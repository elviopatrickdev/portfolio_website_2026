import type { TranslationResources } from '../../types/translations'

export const pt: TranslationResources = {
  theme: {
    enableLight: 'Ativar tema claro',
    enableDark: 'Ativar tema escuro',
  },

  language: {
    label: 'Idioma',
    selectLanguage: 'Selecionar idioma',
    portuguese: 'Português',
    english: 'English',
  },

  navigation: {
    mainLabel: 'Navegação principal',
    openMenu: 'Abrir menu de navegação',
    closeMenu: 'Fechar menu de navegação',
    home: 'Início',
    process: 'Processo',
    expertise: 'Especialização',
    stack: 'Stack',
    projects: 'Projetos',
    about: 'Sobre',
    contact: 'Contacto',
  },

  hero: {
    experience: '1+ ano de experiência prática',
    title: 'Frontend',
    titleHighlight: 'Developer',
    description:
      'Sou Elvio Patrick, <strong>Frontend Developer</strong> focado em React e TypeScript. Transformo ideias em interfaces rápidas, responsivas e intuitivas, criando experiências modernas e funcionais. Com experiência em Fullstack Development, integrando aplicações a soluções backend.',
    location: 'Portugal',
    viewProjects: 'Ver projetos',
    contact: 'Falar comigo',
  },

  process: {
    label: 'Processo de desenvolvimento',
    title: 'Da ideia ao produto',
    titleHighlight: 'pronto para evoluir.',
    description:
      'Uma abordagem estruturada para ligar objetivo, experiência, código e qualidade sem perder clareza no caminho.',
    stage: 'etapa',
    mapLabel: 'Mapa do processo de desenvolvimento',

    steps: {
      understand: {
        title: 'Entender o problema',
        description:
          'Organizo objetivos, utilizadores e requisitos antes de transformar a ideia em ecrãs e funcionalidades.',
        tags: [
          'objetivos',
          'requisitos',
          'prioridades',
        ],
      },

      design: {
        title: 'Desenhar a experiência',
        description:
          'Estruturo a navegação e a interface para que cada ação seja clara, rápida e consistente em qualquer dispositivo.',
        tags: [
          'fluxos',
          'UI responsiva',
          'acessibilidade',
        ],
      },

      build: {
        title: 'Construir e integrar',
        description:
          'Desenvolvo componentes reutilizáveis, ligo APIs e organizo a lógica com uma base simples de manter.',
        tags: [
          'React',
          'TypeScript',
          'REST APIs',
        ],
      },

      deliver: {
        title: 'Testar e entregar',
        description:
          'Valido os fluxos principais, corrijo detalhes e preparo o produto para uma publicação segura e evolutiva.',
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
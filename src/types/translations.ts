export interface ProcessStepTranslation {
  title: string
  description: string
  tags: string[]
}

export interface TranslationResources {
  theme: {
    enableLight: string
    enableDark: string
  }

  language: {
    label: string
    selectLanguage: string
    portuguese: string
    english: string
  }

  navigation: {
    mainLabel: string
    openMenu: string
    closeMenu: string
    home: string
    process: string
    expertise: string
    stack: string
    projects: string
    about: string
    contact: string
  }

  hero: {
    experience: string
    title: string
    titleHighlight: string
    description: string
    location: string
    viewProjects: string
    contact: string
  }

  process: {
    label: string
    title: string
    titleHighlight: string
    description: string
    stage: string
    mapLabel: string

    steps: {
      understand: ProcessStepTranslation
      design: ProcessStepTranslation
      build: ProcessStepTranslation
      deliver: ProcessStepTranslation
    }
  }
}
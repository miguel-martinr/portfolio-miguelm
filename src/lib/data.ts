import { ExperienceListSchema, ProjectListSchema, AboutSchema } from './schemas'
import type { Experience, Project, About } from './schemas'

import experienceData from '@/data/experience.json'
import projectsData from '@/data/projects.json'
import aboutData from '@/data/about.json'

function parse<T>(schema: { parse: (data: unknown) => T }, data: unknown, label: string): T {
  try {
    return schema.parse(data)
  } catch (err) {
    throw new Error(`[portfolio] Invalid data in ${label}.json:\n${String(err)}`)
  }
}

export function getExperiences(): Experience[] {
  return parse(ExperienceListSchema, experienceData, 'experience')
}

export function getProjects(): Project[] {
  return parse(ProjectListSchema, projectsData, 'projects')
}

export function getAbout(): About {
  return parse(AboutSchema, aboutData, 'about')
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured)
}

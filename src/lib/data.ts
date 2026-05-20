import { ExperienceListSchema, ProjectListSchema, AboutSchema } from './schemas'
import type { Experience, Project, About } from './schemas'

import { data as experienceData } from '@/data/experience'
import { data as projectsData } from '@/data/projects'
import { data as aboutData } from '@/data/about'

function parse<T>(schema: { parse: (data: unknown) => T }, data: unknown, label: string): T {
  try {
    return schema.parse(data)
  } catch (err) {
    throw new Error(`[portfolio] Invalid data in ${label}.json:\n${String(err)}`, { cause: err })
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

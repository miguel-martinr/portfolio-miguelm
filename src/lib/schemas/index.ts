/**
 * Punto de entrada único para todos los esquemas y tipos del portfolio.
 * Importa desde aquí en el resto de la app.
 */
export { ExperienceSchema, ExperienceListSchema } from './experience.schema'
export type { Experience } from './experience.schema'

export { ProjectSchema, ProjectListSchema } from './project.schema'
export type { Project } from './project.schema'

export { AboutSchema } from './about.schema'
export type { About, SocialLink } from './about.schema'

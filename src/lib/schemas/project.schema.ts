import { z } from 'zod'

export const ProjectSchema = z.object({
  /** Nombre del proyecto */
  name: z.string(),
  /** Descripción corta (se usa en la card) */
  shortDescription: z.string(),
  /** Descripción larga (se usa en el detalle, Markdown) */
  longDescription: z.string().optional(),
  /** URL de la imagen de portada (relativa a /public o absoluta) */
  image: z.string().optional(),
  /** Stack de tecnologías */
  technologies: z.array(z.string()).default([]),
  /** URL del repositorio */
  repoUrl: z.string().url().optional(),
  /** URL del demo / producción */
  demoUrl: z.string().url().optional(),
  /** Aparece destacado en la sección principal */
  featured: z.boolean().default(false),
  /** Estado del proyecto */
  status: z.enum(['active', 'archived', 'wip']).default('active'),
  /** Año de creación / última actualización relevante */
  year: z.number().int().min(2000),
})

export const ProjectListSchema = z.array(ProjectSchema)

export type Project = z.infer<typeof ProjectSchema>

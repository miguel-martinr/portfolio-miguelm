import { z } from 'zod'

export const ExperienceSchema = z.object({
  /** Nombre de la empresa */
  company: z.string(),
  /** URL del logo (relativa a /public o absoluta) */
  companyLogo: z.string().optional(),
  /** URL de la empresa */
  companyUrl: z.string().url().optional(),
  /** Título del puesto */
  role: z.string(),
  /** Tipo: full-time, part-time, freelance, internship */
  type: z
    .enum(['full-time', 'part-time', 'freelance', 'internship', 'research'])
    .default('full-time'),
  /** Fecha de inicio (YYYY-MM) */
  startDate: z.string().regex(/^\d{4}-\d{2}$/, 'Formato: YYYY-MM'),
  /** Fecha de fin (YYYY-MM) o null si es el trabajo actual */
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'Formato: YYYY-MM')
    .nullable(),
  /** Descripción en texto plano o Markdown */
  description: z.array(z.string()).default([]),
  /** Lista de tecnologías / stack */
  technologies: z.array(z.string()).default([]),
  /** Ubicación (ej: "Madrid, Spain" o "Remote") */
  location: z.string().optional(),
})

export const ExperienceListSchema = z.array(ExperienceSchema)

export type Experience = z.infer<typeof ExperienceSchema>

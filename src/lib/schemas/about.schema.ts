import { z } from 'zod'

const SocialLinkSchema = z.object({
  platform: z.enum(['github', 'linkedin', 'twitter', 'email', 'website', 'other']),
  url: z.string().url(),
  label: z.string().optional(),
})

export const AboutSchema = z.object({
  /** Nombre completo */
  name: z.string(),
  /** Título profesional (ej: "Software Engineer") */
  title: z.string(),
  /** Frase corta para el Hero */
  tagline: z.string(),
  /** Bio en Markdown */
  bio: z.string(),
  /** URL de la foto de perfil (relativa a /public o absoluta) */
  avatar: z.string().optional(),
  /** URL del CV (PDF) para el botón de descarga */
  cvUrl: z.string().optional(),
  /** Email de contacto */
  email: z.string().email(),
  /** Ubicación actual */
  location: z.string().optional(),
  /** Redes sociales */
  socials: z.array(SocialLinkSchema).default([]),
  /** Skills agrupadas por categoría */
  skills: z
    .array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      })
    )
    .default([]),
})

export type About = z.infer<typeof AboutSchema>
export type SocialLink = z.infer<typeof SocialLinkSchema>

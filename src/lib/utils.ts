import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Formatea "YYYY-MM" a "Jan 2024" */
export function formatDate(yyyyMM: string): string {
  const [year, month] = yyyyMM.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

/** Calcula la duración entre dos fechas "YYYY-MM" */
export function getDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate + '-01')
  const end = endDate ? new Date(endDate + '-01') : new Date()
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years}y`)
  if (remainingMonths > 0) parts.push(`${remainingMonths}mo`)
  return parts.join(' ') || '< 1mo'
}

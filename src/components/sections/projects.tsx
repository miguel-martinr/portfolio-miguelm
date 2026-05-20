import { useState, useMemo, useRef, useEffect } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { getProjects } from '@/lib/data'
import type { Project } from '@/lib/schemas'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="mr-1 h-3 w-3" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const STATUS_LABEL: Record<Project['status'], string> = {
  active: 'Active',
  archived: 'Archived',
  wip: 'WIP',
}

export function Projects() {
  const allProjects = getProjects()
  const scrollRef = useRef<HTMLDivElement>(null)

  const allTechs = useMemo(() => {
    const set = new Set<string>()
    allProjects.forEach((p) => p.technologies.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [allProjects])

  const [activeTech, setActiveTech] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightbox])

  const filtered = useMemo(
    () =>
      activeTech ? allProjects.filter((p) => p.technologies.includes(activeTech)) : allProjects,
    [allProjects, activeTech]
  )

  const sorted = [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured))

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const cardWidth = (card?.offsetWidth ?? 360) + 24
    el.scrollBy({ left: dir === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' })
  }

  const handleFilterChange = (tech: string | null) => {
    setActiveTech(tech)
    setTimeout(() => scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' }), 0)
  }

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Projects</h2>

        {/* Filter chips */}
        {allTechs.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange(null)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                activeTech === null
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => handleFilterChange(activeTech === tech ? null : tech)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  activeTech === tech
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Prev */}
        <button
          onClick={() => scroll('prev')}
          aria-label="Previous project"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'absolute top-1/2 left-2 z-10 -translate-y-1/2 shadow-md'
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex [scroll-snap-type:x_mandatory] gap-6 overflow-x-auto scroll-smooth px-4 pb-4 sm:px-16 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {sorted.map((project) => (
            <div
              key={project.name}
              className="w-[calc(100vw-2rem)] shrink-0 snap-center sm:w-90 lg:w-95"
            >
              <Card
                className={cn(
                  'flex h-full flex-col transition-shadow hover:shadow-md',
                  project.featured && 'ring-primary/20 ring-1'
                )}
              >
                {/* Header: background image or plain */}
                {project.image ? (
                  <div
                    className="relative h-44 cursor-zoom-in bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                    onClick={() => setLightbox(project.image!)}
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                      <div>
                        <h3 className="leading-snug font-semibold text-white">{project.name}</h3>
                        <p className="mt-0.5 text-xs text-white/70">{project.year}</p>
                      </div>
                      <Badge
                        variant={project.status === 'archived' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {STATUS_LABEL[project.status]}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 pt-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="leading-snug font-semibold">{project.name}</h3>
                        <p className="text-muted-foreground mt-0.5 text-xs">{project.year}</p>
                      </div>
                      <Badge
                        variant={project.status === 'archived' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {STATUS_LABEL[project.status]}
                      </Badge>
                    </div>
                  </div>
                )}

                <CardContent className="flex-1 pt-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                  {project.technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="gap-2 pt-4">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                    >
                      <GithubIcon /> Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: 'sm' }))}
                    >
                      <ExternalLink className="mr-1 h-3 w-3" /> Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => scroll('next')}
          aria-label="Next project"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'absolute top-1/2 right-2 z-10 -translate-y-1/2 shadow-md'
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {sorted.length === 0 && (
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-muted-foreground py-12 text-center text-sm">
            No projects match the selected filter.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            className="animate-in zoom-in-90 max-h-[90vh] max-w-[90vw] cursor-zoom-out rounded-xl object-contain shadow-2xl duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

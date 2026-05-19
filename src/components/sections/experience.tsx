import { Badge } from '@/components/ui/badge'
import { getExperiences } from '@/lib/data'
import { formatDate, getDuration } from '@/lib/utils'

export function Experience() {
  const experiences = getExperiences()

  // Sort chronologically descending (most recent first)
  const sorted = [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate))

  return (
    <section id="experience" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Experience</h2>

        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="bg-border absolute top-2 left-[7px] h-full w-px md:left-[calc(50%-1px)]" />

          {sorted.map((exp, i) => (
            <div
              key={`${exp.company}-${exp.startDate}`}
              className={`relative flex gap-6 pb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="bg-background border-primary relative z-10 mt-1.5 h-4 w-4 flex-shrink-0 rounded-full border-2 md:absolute md:left-1/2 md:-translate-x-1/2" />

              {/* Card */}
              <div
                className={`ml-8 w-full md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              >
                <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-sm">
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                          {exp.company} ↗
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{exp.company}</p>
                      )}
                    </div>
                    <Badge variant="outline" className="shrink-0 text-xs capitalize">
                      {exp.type.replace('-', ' ')}
                    </Badge>
                  </div>

                  {/* Dates */}
                  <p className="text-muted-foreground mb-3 text-xs">
                    {formatDate(exp.startDate)} —{' '}
                    {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    <span className="ml-2 opacity-60">
                      ({getDuration(exp.startDate, exp.endDate)})
                    </span>
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech stack */}
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Badge } from '@/components/ui/badge'
import { getExperiences } from '@/lib/data'
import { formatDate, getDuration } from '@/lib/utils'

const CHARS_LIMIT = 200

const getCompactDescription = (bulletPoints: string[]) => {
  if (!bulletPoints.length) return null
  const compactView = bulletPoints.join('<&>').slice(0, CHARS_LIMIT).split('<&>')
  compactView[compactView.length - 1] = compactView[compactView.length - 1] + '...'
  return compactView
}

function ExpandableDescription({ bulletPoints }: { bulletPoints: string[] }) {
  const [expanded, setExpanded] = useState(false)
  if (!bulletPoints.length) return null

  const isLong = bulletPoints.join(' ').length > CHARS_LIMIT
  const visible = expanded ? bulletPoints : getCompactDescription(bulletPoints) || []

  return (
    <div className="mb-4">
      <ul className="text-muted-foreground space-y-1.5 text-sm leading-relaxed">
        {visible.map((point, i) => (
          <li key={i} className="flex gap-2">
            <span className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
            <ReactMarkdown
              components={{
                p: ({ children }) => <span>{children}</span>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:opacity-80"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {point}
            </ReactMarkdown>
          </li>
        ))}
      </ul>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-primary mt-2 cursor-pointer text-xs underline-offset-2 hover:underline"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}

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
                className={`min-w-0 flex-1 md:w-[calc(50%-2rem)] md:flex-none ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
              >
                <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-sm">
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {exp.companyLogo && (
                        <img
                          src={exp.companyLogo}
                          alt={`${exp.company} logo`}
                          className="h-8 w-8 rounded-md object-contain"
                        />
                      )}
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
                  <ExpandableDescription bulletPoints={exp.description} />

                  {/* Tech stack */}
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.sort().map((tech) => (
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

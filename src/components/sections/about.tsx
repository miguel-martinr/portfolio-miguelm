import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getAbout } from '@/lib/data'

export function About() {
  const about = getAbout()

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">About me</h2>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Bio */}
        <div className="space-y-4">
          {about.avatar && (
            <img
              src={about.avatar}
              alt={about.name}
              className="mb-6 h-32 w-32 rounded-full object-cover ring-2 ring-offset-2"
            />
          )}
          <p className="text-muted-foreground leading-relaxed">{about.bio}</p>
          {about.location && <p className="text-muted-foreground text-sm">📍 {about.location}</p>}
        </div>

        {/* Skills */}
        <div className="space-y-6">
          {about.skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Separator className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

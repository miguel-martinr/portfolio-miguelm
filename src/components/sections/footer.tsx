import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { getAbout } from '@/lib/data'

export function Footer() {
  const about = getAbout()
  const year = new Date().getFullYear()

  return (
    <>
      {/* Contact section */}
      <section id="contact" className="bg-muted/30 py-24 text-center">
        <div className="mx-auto max-w-xl space-y-6 px-6">
          <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you have a question, an opportunity, or just want to say hi — my inbox is always
            open.
          </p>
          <a href={`mailto:${about.email}`} className={cn(buttonVariants({ size: 'lg' }))}>
            <Mail className="mr-2 h-4 w-4" />
            {about.email}
          </a>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="border-t py-6 text-center">
        <p className="text-muted-foreground text-xs">
          © {year} {about.name} · Built with React + Vite + shadcn/ui
        </p>
      </footer>
    </>
  )
}

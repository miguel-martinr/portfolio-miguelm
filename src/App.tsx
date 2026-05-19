import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Footer } from '@/components/sections/footer'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

import type { About } from '@/lib/schemas'
import avatar from '@/assets/me_profile_pic.png'

export const data: About = {
  name: 'Miguel Martín',
  title: 'Software Engineer',
  tagline: 'Building products that matter, one line at a time.',
  bio: 'Software engineer passionate about clean architecture, developer experience and building useful things. I enjoy working across the full stack with a focus on TypeScript, React and Node.js.',
  avatar,
  cvUrl: '/cv.pdf',
  email: 'miguel.martinr11@gmail.com',
  location: 'Spain',
  socials: [
    { platform: 'github', url: 'https://github.com/miguel-martinr', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/miguel-martinr', label: 'LinkedIn' },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'AWS', 'GitHub Actions', 'Git'],
    },
  ],
}

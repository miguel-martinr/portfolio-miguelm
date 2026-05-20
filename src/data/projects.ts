import type { Project } from '@/lib/schemas'
import zendaImage from '@/assets/demo_zenda_2.gif'
import carnetlyImage from '@/assets/demo_carnetly.png'
import deepviewImage from '@/assets/demo_deepview.png'
import pyctureImage from '@/assets/demo_pycture.gif'

export const data: Project[] = [
  {
    name: 'Zenda',
    shortDescription:
      'Real estate financial decision simulator. Understand the financial impact of buying, waiting, or investing in alternatives — no spreadsheets required. Compare scenarios side by side and project your net worth over 20 years.',
    featured: true,
    status: 'active',
    year: 2026,
    technologies: ['React', 'Node.js', 'Supabase', 'Docker'],
    demoUrl: 'https://zzenda.duckdns.org/',
    image: zendaImage,
  },
  {
    name: 'Carnetly',
    shortDescription:
      'Digital membership card management platform. Allows organizations to issue and manage digital passes for their members with a clean and simple interface.',
    featured: true,
    status: 'active',
    year: 2026,
    technologies: ['React', 'Node.js', 'NestJS', 'PostgresQL', 'Docker'],
    demoUrl: 'https://carnetly.duckdns.org/',
    image: carnetlyImage,
  },
  {
    name: 'DeepView',
    shortDescription:
      'Web platform for automated biomass detection in underwater images using OpenCV. Built as the research tool behind a published academic paper. Django backend, Dockerized deployment, and a frontend for visualizing detection results.',
    featured: true,
    status: 'archived',
    year: 2022,
    technologies: ['Python', 'Django', 'OpenCV', 'Docker'],
    repoUrl: 'https://github.com/miguel-martinr/DeepView',
    image: deepviewImage,
  },
  {
    name: 'Pycture',
    shortDescription:
      'Desktop image processing application built for the Computer Vision course at ULL. Supports histogram analysis, geometric transformations, linear/non-linear filters, and various image enhancement algorithms with an interactive GUI.',
    featured: false,
    status: 'archived',
    year: 2021,
    technologies: ['Python', 'Qt', 'NumPy', 'SciPy'],
    repoUrl: 'https://github.com/miguel-martinr/Pycture',
    image: pyctureImage,
  },
]

import type { Experience } from '@/lib/schemas'
import eventbriteLogo from '@/assets/eventbrite_logo.png'
import elasticLogo from '@/assets/elastic_logo.png'
import ateneaLogo from '@/assets/atenea_logo.png'
import freshCommerceLogo from '@/assets/fresh_commerce_logo.webp'

export const data: Experience[] = [
  {
    company: 'Elastic',
    companyUrl: 'https://elastic.co',
    companyLogo: elasticLogo,
    role: 'Software Engineer',
    type: 'full-time',
    startDate: '2025-10',
    endDate: null,
    description: [
      'Part of the **Actionable Observability** team at [Elastic](https://elastic.co), building observability products directly within [Kibana](https://www.elastic.co/kibana).',
      'Contributing to the development of **SLO** (Service Level Objectives), **Alerting**, and **Synthetic Monitors** — tools used by engineering teams worldwide to measure and enforce service reliability.',
      'Working on **agentic interfaces** that leverage AI to surface actionable insights from observability data, reducing mean time to detection and resolution.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'Kibana plugin development',
      'Elastic Stack (Elasticsearch, Kibana)',
    ],
    location: 'Remote',
  },
  {
    company: 'Eventbrite',
    companyLogo: eventbriteLogo,
    companyUrl: 'https://eventbrite.com',
    role: 'Software Engineer',
    type: 'full-time',
    startDate: '2023-11',
    endDate: '2025-10',
    description: [
      `Member of the global Ticketing Inventory team at Eventbrite, a leading
        international ticketing and event platform. Our mission as a team was to empower event
        creators worldwide by providing tools to manage ticket availability, pricing, and
        discounts efficiently.`,

      `Led the technical design and low-level implementation of a web application for
        Guest List management, used by event organizers globally to handle exclusive
        access and VIP entry. Worked with a fully serverless architecture based on AWS
        (CDK, Lambda, DynamoDB, API Gateway), and was actively involved in
        requirements refinement, sprint planning, and implementation.`,

      `Collaborated with product managers and engineers across different regions to
        deliver scalable and maintainable solutions aligned with Eventbrite’s global
        standards.`,

      `Contributed to the development and maintenance of internal infrastructure
        libraries, particularly in AWS CDK, streamlining cloud development across the
        company's engineering teams worldwide.`,
    ],
    technologies: [
      'TypeScript',
      'React',
      'CDK',
      'Lambda',
      'DynamoDB',
      'AWS - API Gateway',
      'Serverless architecture',
      'Python',
      'Django',
      'MySQL',
    ],
    location: 'Remote',
  },
  {
    company: 'Atenea Technologies',
    companyUrl: 'https://www.ateneamobility.com/',
    companyLogo: ateneaLogo,
    role: 'Software Engineer', // TODO: actualiza el rol
    type: 'full-time',
    startDate: '2022-08',
    endDate: '2023-10',
    location: 'Remote',
    description: [
      `Boosted service assignment automation from 0% to 41% by designing and
        implementing a machine learning infrastructure in AWS with automated model
        retraining.`,

      `Developed internal billing systems integrating Django apps with SageX3 ERP using
        AWS services.`,

      `Participated in the development of a web-based ERP system for the freight transport sector
        using FastAPI (backend) and Vue.js (frontend).`,

      `Created dashboards and exploratory data analyses (EDAs) to improve Business
        Intelligence workflows using Streamlit, Grafana, and Pandas.`,
    ],
    technologies: [
      'Python',
      'Lambda',
      'API Gateway',
      'S3',
      'Aurora Serverless',
      'SQS',
      'EventBridge',
      'Ruby',
      'XGBoost',
      'FastAPI',
      'Vue.js',
      'Streamlit',
      'Grafana',
      'Pandas',
    ],
  },
  {
    company: 'Universidad de La Laguna',
    companyUrl: 'https://www.ull.es',
    role: 'Research Co-Author',
    type: 'research',
    startDate: '2021-12',
    endDate: '2022-09',
    description: [
      `Designed and developed a custom image analysis tool for biomass estimation in
        underwater images.`,

      `Co-authored [Software Application for Automatic Detection and Analysis of Biomass in Underwater Videos](https://www.mdpi.com/2076-3417/13/19/10870),
        a peer-reviewed scientific article in Applied Sciences detailing the
        tool’s development and use in marine research`,
    ],
    technologies: ['Python', 'Django', 'OpenCV', 'MongoDB', 'React', 'TypeScript'],
    location: 'Tenerife, Spain',
  },
  {
    company: 'Fresh Commerce',
    companyUrl: 'https://freshcommerce.es/en/',
    companyLogo: freshCommerceLogo,
    role: 'Software Engineer Intern', // TODO: actualiza el rol
    type: 'internship',
    startDate: '2022-03',
    endDate: '2022-06',
    description: [
      'Developed PHP modules for Prestashop-based online stores.',
      'Collaborated in the development of desktop applications for multimedia content management in e-commerce stores, built with Electron + React + TypeScript + Redux.',
      'Designed and implemented ETL processes for eCommerce–ERP data synchronisation using Talend Studio for Data Integration.',
      'Developed automation scripts and processes using Python and Docker.',
    ],
    location: 'Tenerife, Spain',
    technologies: [
      'PHP',
      'Prestashop',
      'Electron',
      'React',
      'TypeScript',
      'Redux',
      'Talend',
      'Python',
      'Docker',
    ],
  },
]

import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'litterfree',
    title: 'LitterFree: Automated Litterbox',
    tagline: 'An ESP32-driven IoT capstone that automates litter box cleaning end to end.',
    description:
      'An undergraduate IoT capstone project that automates litter box cleaning using an ESP32, load cells, PIR sensors, and a motorized rake mechanism. The system detects when cleaning is needed, runs an automatic cleaning cycle, and exposes manual override controls, safety interlocks, and real-time monitoring.',
    technologies: ['ESP32', 'C++', 'Load Cells', 'PIR Sensors', 'Motor Control', 'IoT'],
    features: [
      'Automatic cleaning cycle triggered by occupancy and weight sensing',
      'Manual override controls for on-demand cleaning',
      'Safety interlocks to prevent operation while occupied',
      'Real-time monitoring of usage and cleaning cycles',
    ],
    challenges:
      'Synchronizing multiple sensor inputs (load cells and PIR) reliably enough to avoid false triggers, and tuning the rake mechanism\u2019s timing so it cleans thoroughly without disturbing the box between visits.',
    learned:
      'Hands-on experience integrating sensors and actuators around a single microcontroller, writing safety-first embedded logic, and iterating on hardware based on real-world test cycles.',
    metrics: [
      { label: 'Waste removal efficiency', value: '96.1%' },
      { label: 'Cleaning cycle time', value: '19.88s' },
    ],
    githubUrl: 'https://github.com/atarax/LitterFree',
    demoUrl: undefined,
    featured: true,
    image: 'https://lh3.googleusercontent.com/d/1SzNPrDctt-WsQeJ3IoG07FDDRry2430l',
  },
  {
    slug: 'medical-stock-diary',
    title: 'Medical Stock Diary',
    tagline: 'A PHP and MySQL inventory system for tracking medical supplies.',
    description:
      'A web-based inventory management system developed using PHP and MySQL for monitoring medical supplies and maintaining accurate stock records across a facility.',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    features: [
      'Inventory management for medical supplies',
      'Real-time stock monitoring and low-stock visibility',
      'Full CRUD operations for records',
      'Relational database integration for accurate reporting',
    ],
    challenges:
      'Designing a database schema that stays accurate under frequent stock updates, and structuring PHP logic to keep CRUD operations consistent and safe from data entry errors.',
    learned:
      'Practical experience with relational database design, server-side scripting, and building a system meant for real day-to-day use rather than a one-off demo.',
    githubUrl: 'https://github.com/imadoq/MedicalStockDiary',
    demoUrl: undefined,
    featured: true,
    image: 'https://lh3.googleusercontent.com/d/1DbgKw2x0NpNGphedZC4KptEZcaMvgMyA',
  },
  {
    slug: 'agn-crm-dashboard',
    title: 'AGN CRM Workflow Dashboard',
    tagline: 'An automated CRM dashboard workflow built with n8n and Google Sheets.',
    description:
      'A CRM workflow automation project at AGN Networks — designed, automated, and integrated the CRM dashboard to streamline business operations. Built with a partner, the workflow reduced manual tasks and improved operational efficiency by automating data flows between business systems.',
    technologies: ['n8n', 'Google Sheets', 'JavaScript', 'CRM'],
    features: [
      'Automated CRM dashboard data integration',
      'Workflow automation between business systems',
      'Reduced manual data entry and streamlined operations',
      'Collaborative design and integration with a partner',
    ],
    challenges:
      'Designing robust n8n workflows that could handle the variations and edge cases of real business data, and making sure the dashboard reflected accurate, up-to-date information across systems.',
    learned:
      'Real-world experience with automation platforms (n8n), CRM systems, and translating business processes into efficient, maintainable workflows.',
    githubUrl: 'https://github.com/xuxizzz/agn-crm-dashboard',
    demoUrl: undefined,
    featured: false,
    image: 'https://lh3.googleusercontent.com/d/1IhZWRt6MqR_eQkKlN6joFK933QabhAYS',
  },
]

import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'JavaScript', level: 82 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'PHP', level: 78 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: 'LayoutTemplate',
    skills: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
      { name: 'JavaScript', level: 78 },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'PHP', level: 78 },
      { name: 'MySQL', level: 80 },
      { name: 'REST APIs', level: 68 },
    ],
  },
  {
    title: 'Automation & CRM',
    icon: 'Workflow',
    skills: [
      { name: 'n8n', level: 82 },
      { name: 'Google Sheets', level: 80 },
      { name: 'CRM Systems', level: 75 },
      { name: 'Salesforce', level: 65 },
    ],
  },
  {
    title: 'IoT / Embedded Systems',
    icon: 'CircuitBoard',
    skills: [
      { name: 'Arduino', level: 82 },
      { name: 'ESP32', level: 80 },
      { name: 'Sensors', level: 78 },
      { name: 'Microcontrollers', level: 75 },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Agile & Scrum', level: 75 },
      { name: 'DevOps', level: 70 },
      { name: 'Project Management', level: 72 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    title: 'Concepts',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Object-Oriented Programming', level: 82 },
      { name: 'Data Structures & Algorithms', level: 75 },
      { name: 'Database Design', level: 78 },
      { name: 'Human-Computer Interaction', level: 72 },
      { name: 'Software Engineering', level: 75 },
    ],
  },
]

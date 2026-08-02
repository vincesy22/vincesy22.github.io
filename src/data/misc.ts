import type { Achievement, Certificate, ContactLink, EducationItem } from '../types'

export const education: EducationItem[] = [
  {
    school: 'University of Santo Tomas',
    degree: 'Bachelor of Science in Information Technology',
    period: '2022 – 2026',
    status: 'Graduate',
    description:
      'Graduated with a GWA of 1.886. Coursework spanned Cisco fundamentals, object-oriented programming, data structures and algorithms, information management (SQL), software engineering, DevOps, project management, embedded systems, and web development (HTML, CSS, JavaScript, PHP, MySQL).',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'UST BSIT Graduate',
    description:
      'Graduated with a General Weighted Average of 1.886 from the BS Information Technology program.',
    icon: 'GraduationCap',
  },
  {
    title: 'ITPEC TOPCIT Passer',
    description:
      'Passed the TOPCIT examination, demonstrating competency across software development, databases, networking, operating systems, cybersecurity, and problem-solving.',
    icon: 'Award',
  },
  {
    title: 'Capstone Project',
    description:
      'Designed and built LitterFree, an automated litter box achieving 96.1% waste removal efficiency with an average cleaning cycle of 19.88 seconds.',
    icon: 'Cpu',
  },
  {
    title: 'Industry Experience',
    description:
      'Developed automation workflows and integrated business systems as a Software Developer at AGN Networks, using JavaScript and n8n to improve operational efficiency.',
    icon: 'Briefcase',
  },
  {
    title: 'Leadership & Service',
    description:
      'Served as a Grievance Member of the Thomasian Gaming Society, resolving member concerns with transparency and policy compliance.',
    icon: 'Users',
  },
  {
    title: 'Continuous Learning',
    description:
      'Earned 11 certificates covering emerging tech, AI-assisted development, embedded machine learning, cybersecurity, Agile, the Salesforce platform, and English proficiency.',
    icon: 'Sparkles',
  },
]

export const certificates: Certificate[] = [
  {
    title: 'ITPEC TOPCIT Exam Passer',
    issuer: 'Information-technology Promotion Agency (IPA), Japan',
    date: 'October 2025',
    href: 'https://drive.google.com/file/d/1Mdkrf5UKS9Fg5FUzBZvtgOfmzXCVVm_5/view?usp=sharing',
  },
  {
    title: 'IBM Explore Emerging Tech Certificate',
    issuer: 'IBM SkillsBuild',
    date: 'January 2026',
    href: 'https://www.credly.com/badges/6fbd717d-b757-420c-ba6a-ba43658b7995',
  },
  {
    title: 'Agile Fundamentals',
    issuer: 'UST College of Information and Computing Sciences',
    date: 'February 2026',
    href: 'https://drive.google.com/file/d/1naf1UWvL5Wm3Egr1dL0msvl6lkc5iqBv/view',
  },
  {
    title: 'Beyond the Prompt: Vibe Coding with a Foundation',
    issuer: 'UST College of Information and Computing Sciences',
    date: 'March 2026',
    href: 'https://drive.google.com/file/d/1DbYnuaa4gd95G2XmCd6t6NV8_4TgZDAP/view?usp=drive_link',
  },
  {
    title: 'Computer Vision with Embedded Machine Learning Certificate',
    issuer: 'Edge Impulse',
    date: 'March 2026',
    href: 'https://coursera.org/share/0228cd19664230c6fb519ea46265c698',
  },
  {
    title: 'Hack the System: Ethical Hacking 101 Workshop',
    issuer: 'UST College of Information and Computing Sciences',
    date: 'March 2026',
    href: 'https://drive.google.com/file/d/1AA8mBdLaw_8rWQAMRC2lARkTtZuAx8PG/view?usp=sharing_eil&ts=69bbdc2f',
  },
  {
    title: 'Cybersecurity Roadmap: Exploring Career Paths and Specialization',
    issuer: 'UST College of Information and Computing Sciences',
    date: 'April 2026',
    href: 'https://drive.google.com/file/d/1PVNZVfGRmgyulBzc2iUMnl465LSUA8PA/view?usp=sharing',
  },
  {
    title: 'Embedded Ambitions: Hardwiring Your Way into the PH Tech Sector',
    issuer: 'UST College of Information and Computing Sciences',
    date: 'April 2026',
    href: 'https://drive.google.com/file/d/1ykA_4MY6kZCEw0-FOdXcKuTkVMzNp2Um/view?usp=drive_link',
  },
  {
    title: 'Crack the Code: Careers in the IT Industry',
    issuer: 'UST College of Information and Computing Sciences',
    date: 'May 2026',
    href: 'https://drive.google.com/file/d/1gtBKSBS6Ins6Gsf7v2MnSkww7M6Ff7_f/view?usp=sharing',
  },
  {
    title: 'Salesforce Trailhead',
    issuer: 'Salesforce Trailhead',
    date: 'May 2026',
  },
  {
    title: 'EF SET English Certificate (C2 Proficient)',
    issuer: 'EF Standard English Test (EF SET)',
    date: '2026',
    href: 'https://cert.efset.org/PDPQiz',
  },
]

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'vinceemmanuelsy@gmail.com', href: 'mailto:vinceemmanuelsy@gmail.com', icon: 'Mail' },
  { label: 'Phone', value: '+63 962 560 8515', href: 'tel:+639625608515', icon: 'Phone' },
  {
    label: 'GitHub',
    value: 'github.com/vincesy22',
    href: 'https://github.com/vincesy22',
    icon: 'Github',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vince-emmanuel-sy-19b944312',
    href: 'https://www.linkedin.com/in/vince-emmanuel-sy-19b944312',
    icon: 'Linkedin',
  },
  {
    label: 'Facebook',
    value: 'facebook.com/vince.sy.60328',
    href: 'https://www.facebook.com/vince.sy.60328',
    icon: 'Facebook',
  },
]

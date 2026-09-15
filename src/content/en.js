/**
 * English copy. Same keys as nl.js (checked by scripts/check-content.js). Register follows the
 * LinkedIn profile (hyperion-mind assets/copy-v1/linkedin-profile.md): "I", plain, no avoid-list words.
 */

export default {
  meta: {
    title: 'Maarten Schuilenburg | Full-stack developer and requirements engineer for the energy sector',
    description:
      'Maarten Schuilenburg, founder of HyperionMind. Full-stack developer and requirements engineer for energy companies, with eight years in data and analytics.',
  },

  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    ctaShort: 'Book a call',
    switchLabel: 'Schakel naar Nederlands',
  },

  hero: {
    eyebrow: 'Founder of HyperionMind',
    greeting: 'I’m Maarten Schuilenburg',
    role: 'Full-stack developer and requirements engineer for the energy sector',
    tagline:
      'Custom ERP extensions for energy companies. The process that lives in Excel, built properly and visible in your reporting.',
    ctaPrimary: 'Book a process call',
    ctaSecondary: 'Visit HyperionMind',
    ctaNote: '30 minutes, free, through HyperionMind.',
    photoAlt: 'Portrait of Maarten Schuilenburg',
  },

  about: {
    title: 'About me',
    paragraphs: [
      'I live and work in the Arnhem region, in the Netherlands. I have been independent since 2021, trading as HyperionMind. The person in the first meeting is the person who writes the requirements and builds the application.',
      'The energy sector is where my heart is. The energy transition is changing how we generate, meter, distribute and bill, and behind every change sits a process someone has to make work.',
      'That interest started on the technical side. My practical diploma in electrical engineering means I know what happens in the field. As a product manager at an energy company I saw the other side: quotes, contracts, metering data and billing that all have to line up.',
      'My trade is the bridge between business and IT. First talk to the people who do the work, then the requirements, and only then build. Eight years in data and analytics, at Deloitte and KPN among others, is why the reporting is never an afterthought.',
    ],
    stats: {
      years: 'years of experience',
      organisations: 'organisations',
      certifications: 'certifications',
    },
  },

  experience: {
    title: 'Experience',
    now: 'present',
    items: [
      {
        org: 'HyperionMind',
        role: 'Founder',
        period: { from: 2021, to: null },
        text: 'Sole proprietorship in the Arnhem region. Custom applications beside the ERP for energy companies, always starting with a process call. Alongside it, freelance engagements for NBF, KPN, My Jewellery and NTFU, among others.',
      },
      {
        org: 'Kenter Groendus',
        role: 'Product Manager',
        period: { from: 2024, to: 2026 },
        text: 'Product manager on the commercial side of an energy metering company. Owned a Configure-Price-Quote application for quotes, built beside the standard systems, from requirements to go-live.',
      },
      {
        org: 'KPN',
        role: 'Product Owner Finance & HR Analytics (freelance)',
        period: { from: 2023, to: 2024 },
        text: null,
      },
      {
        org: 'Deloitte',
        role: 'Technical Lead, Analytics & Cognitive',
        period: { from: 2017, to: 2021 },
        text: 'Started as a dashboard developer, then technical lead of a team of data analysts. Technical lead on an Azure BI platform through an SAP S/4HANA migration.',
      },
    ],
    organisationsLabel: 'Worked for and with',
  },

  projects: {
    title: 'Projects',
    intro: 'A selection, from custom applications to BI platforms.',
    linkLabel: 'Read the news item (Dutch)',
    items: [
      {
        id: 'nbf',
        title: 'Web application for a core process',
        org: 'NBF, through HyperionMind',
        text: 'Full-stack web application for a core process of the organisation, from requirements through data model, back end and front end to go-live.',
        tags: ['Requirements', 'Full-stack'],
      },
      {
        id: 'cpq',
        title: 'Configure-Price-Quote application',
        org: 'Energy company',
        text: 'A quotation process that had grown up in a spreadsheet, turned into an application beside the standard systems. Owned it as product manager, from requirements to go-live.',
        tags: ['CPQ', 'Energy'],
      },
      {
        id: 'image-review',
        title: 'Web application for image review',
        org: 'Deloitte client',
        text: 'Colleagues trained an image recognition model that flags anomalies in camera footage. I built the web application where users review that footage and record corrective actions, with authentication, a database and notifications.',
        tags: ['Full-stack', 'Computer vision'],
      },
      {
        id: 'pharmalarm',
        title: 'Pharmalarm',
        org: 'Accountability Hack 2019, Dutch House of Representatives',
        text: 'Using open data, we combined medicine prices from six other countries into a web application that lets members of parliament compare medicines and suppliers. Winner of challenge 2, with €20,000 in development budget.',
        tags: ['Hackathon', 'Open data'],
      },
      {
        id: 'my-jewellery',
        title: 'BI platform',
        org: 'My Jewellery, freelance',
        text: 'Co-developed the new BI platform: transformations in dbt on Snowflake, with CI/CD through GitHub Actions.',
        tags: ['dbt', 'Snowflake', 'GitHub Actions'],
      },
      {
        id: 'ntfu',
        title: 'BI platform for membership management',
        org: 'NTFU, freelance',
        text: 'BI platform for the Dutch cycling touring association NTFU, showing how members join and leave.',
        tags: ['BI', 'Membership'],
      },
      {
        id: 'management-dashboards',
        title: 'Management dashboards',
        org: 'Deloitte',
        text: 'Management dashboards in Qlik and Power BI, tested with the end users. Started as a developer, later technical lead of the data analyst team.',
        tags: ['Qlik', 'Power BI'],
      },
      {
        id: 'sustainability',
        title: 'Sustainability dashboard',
        org: 'Deloitte',
        text: 'A team built a blockchain solution for selling CO₂e reduction tokens. I designed and built the React dashboard with the transaction reporting.',
        tags: ['React', 'Blockchain'],
      },
    ],
  },

  education: {
    title: 'Education and certification',
    degreesLabel: 'Education',
    degrees: [
      'MSc Information Management, Tilburg University and University of Turku (double degree)',
      'BSc Business Administration, minor in ERP & Business Intelligence',
      'Practical diploma in electrical engineering (Praktijkdiploma Elektrotechniek)',
    ],
    certificationsLabel: 'Certification',
    coursesLabel: 'Courses',
    courses: [
      'Harvard CS50 Web Programming with Python and JavaScript',
      'The Complete Web Developer: Zero to Mastery',
    ],
  },

  contact: {
    title: 'A process your ERP doesn’t cover?',
    text: 'Book a 30-minute process call through HyperionMind. Afterwards you know whether it is something to build, an ERP setting, or nothing to start on. Prefer to email first? That works too.',
    ctaPrimary: 'Book a process call',
    ctaSecondary: 'Visit HyperionMind',
    emailLabel: 'Email',
    kvkLabel: 'Chamber of Commerce (KvK)',
  },

  footer: {
    hyperionmind: 'HyperionMind, my company',
  },

  common: {
    hyperionmindNote: 'site in Dutch',
  },
}

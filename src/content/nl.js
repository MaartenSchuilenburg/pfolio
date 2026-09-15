/**
 * Dutch copy (default language). Every key here has a twin in en.js; `npm run check:content`
 * fails the build when they drift. Voice: "ik", never "wij"; no avoid-list words (hyperion-mind).
 * A period set to null renders without a date: fill it in once the dates are confirmed.
 */

export default {
  meta: {
    title: 'Maarten Schuilenburg | Full-stack developer en requirements engineer voor de energiesector',
    description:
      'Maarten Schuilenburg, oprichter van HyperionMind. Full-stack developer en requirements engineer voor energiebedrijven, met acht jaar ervaring in data en analytics.',
  },

  nav: {
    about: 'Over mij',
    experience: 'Ervaring',
    projects: 'Projecten',
    education: 'Opleiding',
    contact: 'Contact',
    ctaShort: 'Plan gesprek',
    switchLabel: 'Switch to English',
  },

  hero: {
    eyebrow: 'Oprichter van HyperionMind',
    greeting: 'Ik ben Maarten Schuilenburg',
    role: 'Full-stack developer en requirements engineer voor de energiesector',
    tagline:
      'Ik bouw het proces dat niet in je ERP past: een applicatie naast het ERP dat je al hebt, met de rapportage vanaf dag één.',
    ctaPrimary: 'Plan een procesgesprek',
    ctaSecondary: 'Naar HyperionMind',
    ctaNote: '30 minuten, gratis, via HyperionMind.',
    photoAlt: 'Portret van Maarten Schuilenburg',
  },

  about: {
    title: 'Over mij',
    paragraphs: [
      'Ik woon en werk in de regio Arnhem. Sinds 2021 ben ik zelfstandig, onder de naam HyperionMind. De persoon in het eerste gesprek is de persoon die de requirements schrijft en de applicatie bouwt.',
      'De energiesector is waar mijn hart ligt. De energietransitie verandert hoe we opwekken, meten, verdelen en afrekenen, en achter elke verandering zit een proces dat iemand moet laten werken.',
      'Die interesse begon technisch, met een cursus Elektrotechniek. Als productmanager bij een energiebedrijf zag ik de andere kant: offertes, contracten, meetdata en facturatie die op elkaar moeten aansluiten.',
      'Mijn vak is de brug tussen business en IT. Eerst de mensen spreken die het werk doen, dan de requirements, dan pas bouwen. Door acht jaar data en analytics, onder meer bij Deloitte en KPN, is de rapportage bij mij geen bijzaak.',
    ],
    stats: {
      years: 'jaar ervaring',
      organisations: 'organisaties',
      certifications: 'certificeringen',
    },
  },

  experience: {
    title: 'Ervaring',
    now: 'heden',
    items: [
      {
        org: 'HyperionMind',
        role: 'Oprichter',
        period: { from: 2021, to: null },
        text: 'BV in de regio Arnhem. Maatwerk voor ERP-systemen bij energiebedrijven, altijd beginnend met een procesgesprek.',
      },
      {
        org: 'Kenter Groendus',
        role: 'Productmanager',
        period: { from: 2024, to: 2026 },
        text: 'Productmanager aan de commerciële kant van een energiemeetbedrijf. Eigenaar van een Configure-Price-Quote-applicatie voor offertes, gebouwd naast de standaardsystemen, van requirements tot livegang.',
      },
      {
        org: 'KPN',
        role: 'Product Owner Finance & HR Analytics (freelance)',
        period: { from: 2023, to: 2024 },
        text: null,
      },
      {
        org: 'Deloitte',
        role: 'Technical lead, Analytics & Cognitive',
        period: { from: 2017, to: 2021 },
        text: 'Begonnen als dashboardontwikkelaar, daarna technical lead van een team data-analisten. Technical lead op een Azure BI-platform, door een SAP S/4HANA-migratie heen.',
      },
    ],
    organisationsLabel: 'Gewerkt voor en met',
  },

  projects: {
    title: 'Projecten',
    intro: 'Een selectie, van maatwerkapplicaties tot BI-platforms.',
    items: [
      {
        id: 'nbf',
        linkLabel: 'Bekijk de demo',
        title: 'Webapplicatie voor een kernproces',
        org: 'NBF, via HyperionMind',
        text: 'Full-stack webapplicatie voor een kernproces van de organisatie, van requirements via datamodel, back-end en front-end tot livegang.',
        tags: ['Requirements', 'Full-stack'],
      },
      {
        id: 'cpq',
        linkLabel: null,
        title: 'Configure-Price-Quote-applicatie',
        org: 'Energiebedrijf',
        text: 'Een offerteproces dat in een spreadsheet was gegroeid, als applicatie naast de standaardsystemen. Als productmanager eigenaar van requirements tot livegang.',
        tags: ['CPQ', 'Energie'],
      },
      {
        id: 'image-review',
        linkLabel: null,
        title: 'Webapplicatie voor beeldbeoordeling',
        org: 'Klant van Deloitte',
        text: 'Collega’s trainden een beeldherkenningsmodel dat afwijkingen in camerabeelden signaleert. Ik bouwde de webapplicatie waarin gebruikers die beelden beoordelen en corrigerende acties vastleggen, met authenticatie, database en notificaties.',
        tags: ['Full-stack', 'Computer vision'],
      },
      {
        id: 'pharmalarm',
        linkLabel: 'Lees het nieuwsbericht',
        title: 'Pharmalarm',
        org: 'Accountability Hack 2019, Tweede Kamer',
        text: 'Met open data combineerden we medicijnprijzen uit zes andere landen tot een webapplicatie waarmee Kamerleden medicijnen en leveranciers vergelijken. Winnaar van challenge 2, met €20.000 doorontwikkelbudget.',
        tags: ['Hackathon', 'Open data'],
      },
      {
        id: 'my-jewellery',
        linkLabel: null,
        title: 'BI-platform',
        org: 'My Jewellery, freelance',
        text: 'Mee-ontwikkeld aan het nieuwe BI-platform: transformaties in dbt op Snowflake, met CI/CD via GitHub Actions.',
        tags: ['dbt', 'Snowflake', 'GitHub Actions'],
      },
      {
        id: 'ntfu',
        linkLabel: null,
        title: 'BI-platform voor ledenbeheer',
        org: 'NTFU, freelance',
        text: 'BI-platform voor de Nederlandse Toer Fiets Unie, met inzicht in de in- en uitstroom van leden.',
        tags: ['BI', 'Ledenbeheer'],
      },
      {
        id: 'management-dashboards',
        linkLabel: null,
        title: 'Managementdashboards',
        org: 'Deloitte',
        text: 'Managementdashboards in Qlik en Power BI, getest met de eindgebruikers. Begonnen als ontwikkelaar, later technical lead van het team data-analisten.',
        tags: ['Qlik', 'Power BI'],
      },
      {
        id: 'sustainability',
        linkLabel: null,
        title: 'Duurzaamheidsdashboard',
        org: 'Deloitte',
        text: 'Een team bouwde een blockchainoplossing voor de verkoop van tokens voor CO₂e-reductie. Ik ontwierp en bouwde het React-dashboard met de transactierapportage.',
        tags: ['React', 'Blockchain'],
      },
    ],
  },

  education: {
    title: 'Opleiding en certificering',
    degreesLabel: 'Opleiding',
    degrees: [
      'Master Information Management, Tilburg University en University of Turku (dubbele master)',
      'Bachelor Business Administration, minor ERP & Business Intelligence',
    ],
    certificationsLabel: 'Certificering',
    coursesLabel: 'Cursussen',
    courses: [
      'Cursus Elektrotechniek',
      'Harvard CS50 Web Programming with Python and JavaScript',
      'The Complete Web Developer: Zero to Mastery',
    ],
  },

  contact: {
    title: 'Een proces dat niet in je ERP past?',
    text: 'Plan een procesgesprek van 30 minuten via HyperionMind. Je weet daarna of het een bouwvraag is, een ERP-instelling, of niets om aan te beginnen. Liever eerst mailen kan ook.',
    ctaPrimary: 'Plan een procesgesprek',
    ctaSecondary: 'Naar HyperionMind',
    emailLabel: 'E-mail',
    kvkLabel: 'KvK',
  },

  footer: {
    hyperionmind: 'HyperionMind, mijn bedrijf',
  },

  // hyperionmind.eu is Dutch only; the English page says so next to every link to it.
  common: {
    hyperionmindNote: null,
  },
}

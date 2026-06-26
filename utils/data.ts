import { Education, Certification, Experience, Publication } from "./types"

export type SupportedLocale = 'en' | 'de'

export type PortfolioContent = {
  hero: string[]
  workExperience: Experience[]
  educations: Education[]
  certifications: Certification[]
  publications: Publication[]
}

const certifications: Certification[] = [
  {
    title: 'Spring Framework 5: Beginner to Guru',
    url: 'https://drive.google.com/file/d/1r48p_lY3g5_u6c-UsmNE0kNHo6y2WHko/view?usp=sharing',
    issuedOn: '2023-10-25',
    organization: 'Udemy'
  },
  {
    title: 'Java Programming Masterclass covering Java 11 & Java 17',
    url: 'https://drive.google.com/file/d/1qwzm_jqgQ4h7cdao-xxYgBwdxlHqpjx2/view?usp=sharing',
    issuedOn: '2022-05-01',
    organization: 'Udemy'
  },
  {
    title: 'Linux for Developers',
    url: 'https://drive.google.com/file/d/1ueku1aWAsOdTtEa9KXs-800PrLemVShJ/view?usp=sharing',
    issuedOn: '2021-04-01',
    organization: 'Coursera'
  },
  {
    title: 'Master the Coding Interview: Data Structures + Algorithms',
    url: 'https://drive.google.com/file/d/1IY3bERgnasuYxmhxH4C7m2tXnyCykHXR/view?usp=sharing',
    issuedOn: '2021-01-01',
    organization: 'Udemy'
  },
  {
    title: 'The Complete 2020 Web Development Bootcamp',
    url: 'https://drive.google.com/file/d/1bMyD_QtNX1B9QR-6WrVNW4M-TKD0QO2V/view?usp=sharing',
    issuedOn: '2020-12-01',
    organization: 'Udemy'
  },
  {
    title: 'Java Programming: Solving Problems with Software (with Honors)',
    url: 'https://drive.google.com/file/d/1hBQ584XsfbKDM-ByoQRirJRvQ7CqEmE6/view?usp=sharing',
    issuedOn: '2020-05-01',
    organization: 'Coursera'
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    url: null,
    issuedOn: '2018-04-01',
    organization: 'Cryptus Cyber Security'
  }
]

const publications: Publication[] = [
  {
    citation: 'S. Kumar, S. Dubey, M. Khandelwal and G. Aggarwal, "Design of cloud based video sharing platform using Machine Learning," 2023 13th International Conference on Cloud Computing, Data Science & Engineering (Confluence), Noida, India, 2023, pp. 80-85, doi: 10.1109/Confluence56041.2023.10048833.',
    url: 'https://ieeexplore.ieee.org/document/10048833'
  },
  {
    citation: 'S. Dubey, S. Kumar, M. Khandelwal, N. S. Gupta and G. Aggarwal, "Comparing Deep Learning and Traditional ML for Detecting Spam and Trolls on Video Sharing Sites," 2023 6th International Conference on Contemporary Computing and Informatics (IC3I), Gautam Buddha Nagar, India, 2023, pp. 397-402, doi: 10.1109/IC3I59117.2023.10397835.',
    url: 'https://ieeexplore.ieee.org/document/10397835'
  }
]

export const portfolioContent: Record<SupportedLocale, PortfolioContent> = {
  en: {
    hero: [
      "My passion lies in crafting robust and scalable backend systems that power today's digital landscape.",
      'My journey as a developer has been marked by a relentless pursuit of excellence, especially in the realm of developing applications and system design. I am dedicated to honing my skills continually, striving for mastery.',
      'The main stack of technologies I use:'
    ],
    workExperience: [
      {
        date: 'May 2025 - Present',
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net/',
        position: 'Software Development Engineer - II',
        content: []
      },
      {
        date: 'July 2023 - May 2025',
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net/',
        position: 'Software Development Engineer - I',
        content: []
      },
      {
        date: 'Feb 2023 - June 2023',
        organization: 'Amadeus Labs',
        organizationUrl: 'https://amadeus.com/en',
        position: 'Software Engineer Intern',
        content: []
      },
      {
        date: 'June 2022 - Sep 2022',
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net',
        position: 'Software Engineer Intern',
        content: []
      },
      {
        date: 'Mar 2021 - May 2021',
        organization: 'Checkstyle',
        organizationUrl: 'https://github.com/checkstyle/checkstyle',
        position: 'Contributor',
        content: []
      },
      {
        date: 'July 2016 - June 2019',
        organization: 'YouTube',
        organizationUrl: 'https://www.youtube.com/c/CryptoSingh/',
        position: 'Content Creator',
        content: []
      }
    ],
    educations: [
      {
        duration: '2019 - 2023',
        institute: 'Amity University, Noida',
        degree: 'Bachelor of Technology',
        fieldOfStudy: 'Computer Science & Engineering'
      },
      {
        duration: '2017 - 2019',
        institute: 'Bal Bhavan Public Sr. Sec School',
        degree: 'Intermediate',
        fieldOfStudy: 'Science with CS'
      }
    ],
    certifications,
    publications
  },
  de: {
    hero: [
      'Meine Leidenschaft liegt darin, robuste und skalierbare Backend-Systeme zu entwickeln, die die heutige digitale Welt antreiben.',
      'Mein Weg als Entwickler ist von einem konsequenten Streben nach Exzellenz gepraegt, besonders bei der Entwicklung von Anwendungen und im Systemdesign. Ich arbeite kontinuierlich daran, meine Faehigkeiten weiterzuentwickeln und echte Meisterschaft anzustreben.',
      'Die wichtigsten Technologien, die ich verwende:'
    ],
    workExperience: [
      {
        date: 'Mai 2025 - Heute',
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net/',
        position: 'Softwareentwickler - II',
        content: []
      },
      {
        date: 'Juli 2023 - Mai 2025',
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net/',
        position: 'Softwareentwickler - I',
        content: []
      },
      {
        date: 'Feb 2023 - Juni 2023',
        organization: 'Amadeus Labs',
        organizationUrl: 'https://amadeus.com/en',
        position: 'Praktikant als Softwareentwickler',
        content: []
      },
      {
        date: 'Juni 2022 - Sep 2022',
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net',
        position: 'Praktikant als Softwareentwickler',
        content: []
      },
      {
        date: 'Maerz 2021 - Mai 2021',
        organization: 'Checkstyle',
        organizationUrl: 'https://github.com/checkstyle/checkstyle',
        position: 'Mitwirkender',
        content: []
      },
      {
        date: 'Juli 2016 - Juni 2019',
        organization: 'YouTube',
        organizationUrl: 'https://www.youtube.com/c/CryptoSingh/',
        position: 'Content Creator',
        content: []
      }
    ],
    educations: [
      {
        duration: '2019 - 2023',
        institute: 'Amity University, Noida',
        degree: 'Bachelor of Technology',
        fieldOfStudy: 'Informatik und Ingenieurwesen'
      },
      {
        duration: '2017 - 2019',
        institute: 'Bal Bhavan Public Sr. Sec School',
        degree: 'Oberstufe',
        fieldOfStudy: 'Naturwissenschaften mit Informatik'
      }
    ],
    certifications,
    publications
  }
}

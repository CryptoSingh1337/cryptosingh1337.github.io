import {Certification, Education, Experience, Project, ProjectTechnology, Publication, Skill} from "./types"
import {techIcon} from './techIcons'

export type SupportedLocale = 'en' | 'de'

export type PortfolioContent = {
  hero: string[]
  workExperience: Experience[]
  educations: Education[]
  certifications: Certification[]
  publications: Publication[]
  projects: Project[]
}

const tech = (name: string, iconName?: string): ProjectTechnology => iconName ? {name, iconName} : {name}
const skill = (id: string, name: string, iconName = name): Skill => ({id, name, url: techIcon(iconName)})
const localSkill = (id: string, name: string, url: string): Skill => ({id, name, url})

export const projectYear = (createdAt?: string): string => {
  if (!createdAt) return ''
  const d = new Date(createdAt)
  return isNaN(d.getTime()) ? '' : String(d.getFullYear())
}

export const interestedSkills: Skill[] = [
  localSkill('interested-distributed-systems', 'Distributed Systems', '/icons/skills/distributed-systems.png'),
  localSkill('interested-machine-learning', 'Machine Learning', '/icons/skills/machine-learning.png')
]

export const skills: Skill[] = [
  skill('skill-java', 'Java'),
  skill('skill-spring', 'Spring'),
  skill('skill-hibernate', 'Hibernate'),
  skill('skill-junit', 'JUnit'),
  skill('skill-mysql', 'MySQL'),
  skill('skill-postgres', 'PostgreSQL'),
  skill('skill-redis', 'Redis'),
  skill('skill-mongodb', 'MongoDB'),
  skill('skill-golang', 'Golang'),
  skill('skill-javascript', 'JavaScript'),
  skill('skill-typescript', 'TypeScript'),
  skill('skill-python', 'Python'),
  skill('skill-vue', 'Vue.js'),
  skill('skill-nuxt', 'Nuxt.js'),
  skill('skill-node', 'Node.js'),
  skill('skill-tailwind', 'Tailwind CSS'),
  skill('skill-git', 'Git'),
  skill('skill-githubactions', 'GitHub Actions', 'githubactions'),
  skill('skill-maven', 'Apache Maven', 'Maven'),
  skill('skill-docker', 'Docker'),
  localSkill('skill-aws', 'AWS', '/icons/skills/aws.svg'),
  skill('skill-azure', 'Azure'),
  skill('skill-terraform', 'Terraform'),
  skill('skill-linux', 'Linux'),
  skill('skill-jenkins', 'Jenkins'),
  skill('skill-grafana', 'Grafana'),
  localSkill('skill-newrelic', 'NewRelic', '/icons/skills/newrelic.svg'),
  localSkill('skill-vscode', 'VSCode', '/icons/skills/vscode.svg'),
  localSkill('skill-intellij', 'Intellij IDEA', '/icons/skills/intellij-idea.svg'),
  localSkill('skill-data-structures', 'Data Structures', '/icons/skills/data-structures.svg'),
  localSkill('skill-algorithms', 'Algorithms', '/icons/skills/algorithms.svg')
]

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

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const projectsData: Array<Omit<Project, 'id'>> = [
  {
    title: 'Themis',
    briefInfo: 'Themis is a rule and decision management platform for teams that need to author, review, version, build, and deploy business logic with confidence.',
    githubReadme: 'https://gist.githubusercontent.com/CryptoSingh1337/15016b5c8eff99b179725fb236accd6c/raw/d6f3d84b67baea11df179218ba3c4df43f5f2169/THEMIS-README.md',
    freelance: false,
    urls: [
      // {name: 'live', url: 'https://themis.saransh.pro/'},
      // {name: 'demo', url: 'https://youtu.be/jBWx6UouZow?utm_source=portfolio'}
    ],
    technologies: [tech('Java'), tech('Spring Boot'), tech('Spring AI', 'Spring Boot'), tech('PostgreSQL'), tech('Nuxt.js'), tech('Tailwind CSS'), tech('AWS'), tech('Jenkins'), tech('GitHub Actions', 'githubactions'), tech('Docker'), tech('Drools')],
    createdAt: '2025-11-01'
  },
  {
    title: 'Serpent Clash',
    briefInfo: 'A multiplayer snake game',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/serpent-clash/refs/heads/master/README.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/serpent-clash'},
      {name: 'live', url: 'https://serpent-clash.saransh.pro/'},
      {name: 'demo', url: 'https://www.youtube.com/watch?v=GLIhDvpuB-0&utm_source=portfolio'}
    ],
    technologies: [tech('Golang'), tech('Vue.js'), tech('Pixi.js'), tech('Websocket'), tech('Tailwind CSS')],
    createdAt: '2024-08-01'
  },
  {
    title: 'Automated Caller System',
    briefInfo: 'A flask application to extract data from third party IVR system, integrated twilio API to make calls and extract data in most optimize and cost effective way.',
    freelance: true,
    githubReadme: '',
    urls: [],
    technologies: [tech('Python'), tech('Flask'), tech('Twilio')],
    createdAt: '2024-01-08'
  },
  {
    title: 'URLific',
    briefInfo: 'A proxy URL service that provides permanent links for resources with frequently changing URLs, such as social media profiles.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/urlific/master/Readme.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/urlific'},
      {name: 'live', url: 'https://urlific.onrender.com/'}
    ],
    technologies: [tech('Java'), tech('Spring Boot'), tech('Spring Security', 'Spring'), tech('Thymeleaf'), tech('Tailwind CSS'), tech('MongoDB')],
    createdAt: '2023-06-01'
  },
  {
    title: 'VidFlow',
    briefInfo: 'A video sharing platform, integrates content recommendations and real-time spam filtering.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/vidflow-backend/master/Readme.md',
    urls: [
      {name: 'demo', url: 'https://www.youtube.com/watch?v=WJZyM-X8wAo'},
      {name: 'frontend', url: 'https://github.com/CryptoSingh1337/vidflow-client'},
      {name: 'backend', url: 'https://github.com/CryptoSingh1337/vidflow-backend'}
    ],
    technologies: [tech('Java'), tech('Spring Boot'), tech('Spring WebMvc', 'Spring'), tech('Spring Data MongoDB', 'Spring'), tech('Spring Security', 'Spring'), tech('JavaScript'), tech('Vue'), tech('Nuxt'), tech('Vuetify'), tech('Microsoft Azure', 'Azure'), tech('AWS')],
    createdAt: '2021-10-01'
  },
  {
    title: 'GMoments',
    briefInfo: 'GMoments saves the last few seconds (15-20 sec) gameplay.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/GMoments/master/README.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/GMoments'}
    ],
    technologies: [tech('Python'), tech('D3DShot (Window Desktop Duplication API)'), tech('ffmpeg')],
    createdAt: '2022-01-09'
  },
  {
    title: 'Lexical Analyzer',
    briefInfo: 'A web application to break a C program into tokens',
    freelance: false,
    githubReadme: '',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/lexical-analyzer'},
      {name: 'live', url: 'https://lexical-analyzer.onrender.com/'}
    ],
    technologies: [tech('Java'), tech('Spring Boot'), tech('Thymeleaf'), tech('Tailwind CSS')],
    createdAt: '2022-04-14'
  },
  {
    title: 'Fellowship',
    briefInfo: 'A scholarship aggregator, provides scholarship recommendations based on user profile.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/fellowship-backend/master/README.md',
    urls: [
      {name: 'frontend', url: 'https://github.com/CryptoSingh1337/fellowship-frontend'},
      {name: 'backend', url: 'https://github.com/CryptoSingh1337/fellowship-backend'}
    ],
    technologies: [tech('Java'), tech('Spring Boot'), tech('Spring Security', 'Spring'), tech('Spring Scheduler', 'Spring'), tech('Spring Data Mongo', 'Spring'), tech('Java Mail API', 'Java'), tech('MongoDB'), tech('Amazon SQS', 'AWS'), tech('JavaScript'), tech('Vue'), tech('Nuxt 2', 'Nuxt.js'), tech('Vuetify')],
    createdAt: '2022-08-01'
  },
  {
    title: 'Vue Quiz App',
    briefInfo: 'A customizable multiple choice quiz app.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/vue-quiz-app/master/README.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/vue-quiz-app'},
      {name: 'live', url: 'https://pensive-nightingale-13aa84.netlify.app/'}
    ],
    technologies: [tech('Vue'), tech('Vuex', 'Vue.js'), tech('JavaScript'), tech('WaveUI')],
    createdAt: '2021-10-06'
  },
  {
    title: 'Bloged',
    briefInfo: 'Bloged is a fullstack application created in collaboration with a friend where user can read blogs and can comment on a blog.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/spring-blog-api/master/Readme.md',
    urls: [
      {name: 'frontend', url: 'https://github.com/Adibros/bloged'},
      {name: 'backend', url: 'https://github.com/CryptoSingh1337/spring-blog-api'}
    ],
    technologies: [tech('Spring Boot'), tech('Spring Data Jpa', 'Spring'), tech('Spring Rest Docs', 'Spring'), tech('H2-DB'), tech('React'), tech('Redux'), tech('Router')],
    createdAt: '2021-07-27'
  },
  {
    title: 'Spring Recipe App',
    briefInfo: 'A Spring web application for managing Recipe.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/spring-recipe-app/master/Readme.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/spring-recipe-app'}
    ],
    technologies: [tech('Spring Boot'), tech('Spring WebMvc', 'Spring'), tech('Spring Data JPA', 'Spring'), tech('H2-DB'), tech('Thymeleaf')],
    createdAt: '2021-06-13'
  },
  {
    title: 'CRM system',
    briefInfo: 'A simple Spring application for Customer Relationship Management.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/crm-springmvc-hibernate/master/Readme.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/crm-springmvc-hibernate'}
    ],
    technologies: [tech('Spring'), tech('Spring WebMvc', 'Spring'), tech('Hibernate'), tech('MySQL'), tech('JSP', 'Java')],
    createdAt: '2021-06-03'
  },
  {
    title: 'Minify URL',
    briefInfo: 'A fullstack web application which makes long URLs, shorter.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/minify-url/master/README.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/minify-url'},
      {name: 'live', url: 'https://cryptosingh1337.github.io/minify-url-frontend/'}
    ],
    technologies: [tech('Spring Boot'), tech('Spring WebMvc', 'Spring'), tech('MongoDB'), tech('HTML'), tech('CSS'), tech('Javascript'), tech('Bootstrap')],
    createdAt: '2021-02-22'
  },
  {
    title: 'Notepad',
    briefInfo: 'A simple notepad application (clone of Windows Notepad).',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/Notepad/master/Readme.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/Notepad'},
      {name: 'demo', url: 'https://github.com/CryptoSingh1337/Notepad/releases/tag/2.0'}
    ],
    technologies: [tech('Java'), tech('JavaFX', 'Java')],
    createdAt: '2020-08-28'
  },
  {
    title: 'Todo List',
    briefInfo: 'A Java desktop application for managing todos.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/todo-list/master/README.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/todolist-maven'}
    ],
    technologies: [tech('Java'), tech('JavaFX', 'Java'), tech('CSS')],
    createdAt: '2020-07-19'
  },
  {
    title: 'Password Rack',
    briefInfo: 'A password storing application which stores your multiple passwords and provide you a single password to manage those stored passwords.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/password-rack/master/README.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/password-rack'}
    ],
    technologies: [tech('Java'), tech('Java Swing', 'Java')],
    createdAt: '2020-04-20'
  },
  {
    title: 'Wireless Robotic Hand',
    briefInfo: 'A robotic arm created using Arduino Uno R3 which consists of a receiver and transmitter and communicate to each other using nRF24L01 wireless module.',
    freelance: false,
    githubReadme: 'https://raw.githubusercontent.com/CryptoSingh1337/wireless-robotic-hand/master/README.md',
    urls: [
      {name: 'repo', url: 'https://github.com/CryptoSingh1337/wireless-robotic-hand'}
    ],
    technologies: [tech('Arduino UNO R3', 'Arduino'), tech('nRF24L01')],
    createdAt: '2017-11-15'
  }
]

const projects: Project[] = projectsData.map(project => ({id: slugify(project.title), ...project}))

export const portfolioContent: Record<SupportedLocale, PortfolioContent> = {
  en: {
    hero: [
      "My passion lies in crafting robust and scalable backend systems that power today's digital landscape.",
      'My journey as a developer has been marked by a relentless pursuit of excellence, especially in the realm of developing applications and system design. I am dedicated to honing my skills continually, striving for mastery.',
      'The main stack of technologies I use:'
    ],
    workExperience: [
      {
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net/',
        span: 'Jun 2022 - Present',
        roles: [
          {position: 'Software Development Engineer - II', date: 'May 2025 - Present'},
          {position: 'Software Development Engineer - I', date: 'Jul 2023 - May 2025'},
          {position: 'Software Engineer Intern', date: 'Jun 2022 - Sep 2022'}
        ]
      },
      {
        organization: 'Amadeus Labs',
        organizationUrl: 'https://amadeus.com/en',
        span: 'Feb 2023 - Jun 2023',
        roles: [
          {position: 'Software Engineer Intern', date: 'Feb 2023 - Jun 2023'}
        ]
      },
      {
        organization: 'Checkstyle',
        organizationUrl: 'https://github.com/checkstyle/checkstyle',
        span: 'Mar 2021 - May 2021',
        roles: [
          {position: 'Contributor', date: 'Mar 2021 - May 2021'}
        ]
      },
      {
        organization: 'YouTube',
        organizationUrl: 'https://www.youtube.com/c/CryptoSingh/',
        span: 'Jul 2016 - Jun 2019',
        roles: [
          {position: 'Content Creator', date: 'Jul 2016 - Jun 2019'}
        ]
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
    publications,
    projects
  },
  de: {
    hero: [
      'Meine Leidenschaft liegt in der Entwicklung robuster und skalierbarer Backend-Systeme, die die heutige digitale Landschaft antreiben.',
      'Mein Werdegang als Entwickler war stets von dem unermüdlichen Streben nach Exzellenz geprägt, insbesondere im Bereich der Anwendungsentwicklung und des Systemdesigns. Ich bin bestrebt, meine Fähigkeiten kontinuierlich zu verbessern und Meisterschaft zu erlangen.',
      'Die wichtigsten Technologien, die ich verwende:'
    ],
    workExperience: [
      {
        organization: 'LoadShare Networks',
        organizationUrl: 'https://loadshare.net/',
        span: 'Juli 2023 - Heute',
        roles: [
          {position: 'Softwareentwickler - II', date: 'Mai 2025 - Heute'},
          {position: 'Softwareentwickler - I', date: 'Juli 2023 - Mai 2025'},
          {position: 'Praktikant als Softwareentwickler', date: 'Juni 2022 - Sep 2022'}
        ]
      },
      {
        organization: 'Amadeus Labs',
        organizationUrl: 'https://amadeus.com/en',
        span: 'Feb 2023 - Juni 2023',
        roles: [
          {position: 'Praktikant als Softwareentwickler', date: 'Feb 2023 - Juni 2023'}
        ]
      },
      {
        organization: 'Checkstyle',
        organizationUrl: 'https://github.com/checkstyle/checkstyle',
        span: 'März 2021 - Mai 2021',
        roles: [
          {position: 'Mitwirkender', date: 'Maerz 2021 - Mai 2021'}
        ]
      },
      {
        organization: 'YouTube',
        organizationUrl: 'https://www.youtube.com/c/CryptoSingh/',
        span: 'Juli 2016 - Juni 2019',
        roles: [
          {position: 'Content Creator', date: 'Juli 2016 - Juni 2019'}
        ]
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
        fieldOfStudy: 'Wissenschaft mit Informatik'
      }
    ],
    certifications,
    publications,
    projects
  }
}

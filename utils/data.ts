import { Certification, Experience } from "./types"

export const hero = [
  "My passion lies in crafting robust and scalable backend systems that power today's digital landscape.",
  "My journey as a developer has been marked by a relentless pursuit of excellence, especially in the realm of developing applications and system design. I am dedicated to honing my skills continually, striving for mastery.",
  "In my current work, I proficiently wield a stack of technologies that include:",
  "However, I believe in the importance of forward momentum. Rather than resting on my past accomplishments, I am committed to delving deeper into my chosen path."
]

export const workExperience: Experience[] = [
  {
    date: "July 2023 - Present",
    organization: "LoadShare Networks",
    organizationUrl: "https://loadshare.net/",
    position: "Software Engineer",
    content: [
      "Working on rate rule engine which handles the earnings and revenue.",
      "Working on state machine based Grievance system.",
      "Creating Ticket management system for the Grievance system."
    ]
  },
  {
    date: "Feb 2023 - Jun 2023",
    organization: "Amadeus Labs",
    organizationUrl: "https://amadeus.com/en/bengaluru-labs-india",
    position: "Software Engineer Intern",
    content: [
      "Worked on API Extension project.",
      "Create resources, generate code according to Open API specification.",
      "Deploy that on Azure Function App using GitHub Actions.",
      "Learned about terraform, GitHub Actions, Azure Function and Logic Apps."
    ]
  },
  {
    date: "Jun 2022 - Sep 2022",
    organization: "LoadShare Networks",
    organizationUrl: "https://loadshare.net/",
    position: "Software Engineer Intern",
    content: [
      "Working under the Hyperlocal logistics operations pod.",
      "Created the COD service from scratch (30% more orders).",
      "Created unit tests using JUnit and Mockito.",
      "Learned about Logging, API design, Jenkins, Aws SQS and ECS."
    ]
  },
  {
    date: "Mar 2021 - May 2021",
    organization: "Checkstyle",
    organizationUrl: "https://github.com/checkstyle/checkstyle",
    position: "Contributor",
    content: [
      "Updated existing unit tests to use separate input file.",
      "Updated existing Javadocs and added code examples.",
      "Learned about CI/CD, Apache Maven, Unit testing.",
      "Merged over 35+ pull requests."
    ]
  },
  {
    date: "Jul 2016 - Present",
    organization: "YouTube",
    organizationUrl: "https://www.youtube.com/c/CryptoSingh/",
    position: "Content Creator",
    content: [
      "Created tech and gaming related videos.",
      "Live streamed various games.",
      "Crossed 100k+ views."
    ]
  }
]

export const certifications: Certification[] = [
  {
    title: 'Java Programming Masterclass covering Java 11 & Java 17',
    url: 'https://drive.google.com/file/d/1DpARYUIKYBITomuhNrukw23d5T7cbaXo/view?usp=share_link',
    issuedOn: '2022-05-01',
    organization: 'Udemy'
  },
  {
    title: 'Linux for Developers',
    url: 'https://drive.google.com/file/d/1ihRSSbztsjlV4SokVEGmwX_7TPC4tPce/view?usp=share_link',
    issuedOn: '2021-04-01',
    organization: 'Coursera'
  },
  {
    title: 'Master the Coding Interview: Data Structures + Algorithms',
    url: 'https://drive.google.com/file/d/1c3WgUWvdjRynLsLjM_maLJjOI3XuXMxO/view?usp=share_link',
    issuedOn: '2021-01-01',
    organization: 'Udemy'
  },
  {
    title: 'The Complete 2020 Web Development Bootcamp',
    url: 'https://drive.google.com/file/d/1f0GeEJzd-unvVrWXEXoLYN-9vwhccAc1/view?usp=share_link',
    issuedOn: '2020-12-01',
    organization: 'Udemy'
  },
  {
    title: 'Java Programming: Solving Problems with Software (with Honors)',
    url: 'https://drive.google.com/file/d/1qxRbGtqBzQ_YaSdoqotdRfB-lMWlhf79/view?usp=share_link',
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
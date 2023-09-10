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
    date: "Feb 2023 - June 2023",
    organization: "Amadeus Labs",
    organizationUrl: "https://amadeus.com/en/bengaluru-labs-india",
    position: "Software Engineer Intern",
    content: [
      "Worked on API Extension project.",
      "Used to create resources, generate code according to Open API specification.",
      "Deployed that on Azure Function App using GitHub Actions.",
      "Learned about terraform, GitHub Actions, Azure Function and Logic Apps."
    ]
  },
  {
    date: "June 2022 - Sep 2022",
    organization: "LoadShare Networks",
    organizationUrl: "https://loadshare.net/",
    position: "Software Engineer Intern",
    content: [
      "Worked under the Hyperlocal logistics operations pod.",
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
    date: "July 2016 - Present",
    organization: "YouTube",
    organizationUrl: "https://www.youtube.com/c/CryptoSingh/",
    position: "Content Creator",
    content: [
      "Created Technology and Gaming related videos.",
      "Live streamed various games.",
      "Crossed 100k+ views."
    ]
  }
]

export const certifications: Certification[] = [
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
import { Education, Certification, Experience, Publication } from "./types"

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
      "Developing and maintaining the rate rule engine, pivotal for field executive compensation & company revenue optimisation.",
      "Built a ticket management microservice, enhancing grievance resolution speed.",
      "Introduced operational workflows for non-hyperlocal field executives.",
      "Created a transaction history feature for user financial insights, boosting transparency & trust."
    ]
  },
  {
    date: "Feb 2023 - June 2023",
    organization: "Amadeus Labs",
    organizationUrl: "https://amadeus.com/en",
    position: "Software Engineer Intern",
    content: [
      "Worked on API Extension project.",
      "Used to automate the process of API code generation according to Open API specification.",
      "Deploy that on Azure Function App using GitHub Actions, terraform and terragrunt."
    ]
  },
  {
    date: "June 2022 - Sep 2022",
    organization: "LoadShare Networks",
    organizationUrl: "https://loadshare.net",
    position: "Software Engineer Intern",
    content: [
      "Worked under the Hyperlocal logistics operations pod.",
      "Built a COD microservice, boosting orders by 30%.",
      "Made an API for zone configurations, increasing the operational efficiency by 10%.",
      "Cut Ops team manual work with geo-spatial queries.",
      "Upgraded Spring Boot from 1 to 2, shifted the deployment from WAR to JAR."
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

export const educations: Education[] = [
  {
    duration: '2019 - 2023',
    institute: 'Amity University, Noida',
    degree: 'B. Tech',
    fieldOfStudy: 'Computer Science and Engineering',
    grade: 'CGPA - 8.41 / 10'
  },
  {
    duration: '2017 - 2019',
    institute: 'Bal Bhavan Public Sr. Sec School',
    degree: 'Intermediate',
    fieldOfStudy: 'Science with CS',
    grade: 'Percentage - 75.6 %'
  }
]

export const certifications: Certification[] = [
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

export const publications: Publication[] = [
  {
    citation: 'S. Kumar, S. Dubey, M. Khandelwal and G. Aggarwal, "Design of cloud based video sharing platform using Machine Learning," 2023 13th International Conference on Cloud Computing, Data Science & Engineering (Confluence), Noida, India, 2023, pp. 80-85, doi: 10.1109/Confluence56041.2023.10048833.',
    url: 'https://ieeexplore.ieee.org/document/10048833'
  },
  {
    citation: 'S. Dubey, S. Kumar, M. Khandelwal, N. S. Gupta and G. Aggarwal, "Comparing Deep Learning and Traditional ML for Detecting Spam and Trolls on Video Sharing Sites," 2023 6th International Conference on Contemporary Computing and Informatics (IC3I), Gautam Buddha Nagar, India, 2023, pp. 397-402, doi: 10.1109/IC3I59117.2023.10397835.',
    url: 'https://ieeexplore.ieee.org/document/10397835'
  }
]
export type Skill = {
  id: string,
  name: string,
  url: string
}

export type Link = {
  name: string,
  url: string
}

export type Education = {
  duration: string,
  institute: string,
  degree: string,
  fieldOfStudy: string
}

export type ProjectTechnology = {
  name: string,
  iconName?: string
}

export type Project = {
  id: string,
  title: string,
  briefInfo: string,
  freelance: boolean,
  githubReadme: string,
  urls: Array<Link>,
  technologies: Array<ProjectTechnology>
  createdAt: string
}

export type ExperienceRole = {
  position: string,
  date: string
}

export type Experience = {
  organization: string,
  organizationUrl: string,
  span: string,
  roles: Array<ExperienceRole>
}

export type Certification = {
  title: string,
  url: string | null,
  issuedOn: string,
  organization: string
}

export type Publication = {
  citation: string,
  url: string
}

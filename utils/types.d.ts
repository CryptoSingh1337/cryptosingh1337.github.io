export type Skill = {
  id: string,
  name: string,
  url: string,
  order: number
}

export type Link = {
  name: string,
  url: string
}

export type Education = {
  duration: string,
  institute: string,
  degree: string,
  fieldOfStudy: string,
  grade: string
}

export type Project = {
  id: string,
  title: string,
  briefInfo: string,
  freelance: boolean,
  githubReadme: string,
  urls: Array<Link>,
  technologies: Array<string>
  createdAt: string,
  order: number
}

export type Experience = {
  date: string,
  organization: string,
  organizationUrl: string,
  position: string,
  content: Array<string>
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
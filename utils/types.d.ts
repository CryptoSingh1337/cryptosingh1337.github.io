export type Skill = {
  id: string,
  name: string,
  url: string,
  order: number
}

export type Link = {
  displayName: string,
  link: string,
  color: string
}

export type Project = {
  title: string,
  briefInfo: string,
  githubReadme: string,
  links: Array<Link>,
  technologies: Array<string>
  createdAt: string
}

export type Experience = {
  date: string,
  org: string,
  org_link: string,
  position: string,
  content: Array<string>
}

export type Certification = {
  title: string,
  link: string,
  issuedOn: string,
  organization: string
}
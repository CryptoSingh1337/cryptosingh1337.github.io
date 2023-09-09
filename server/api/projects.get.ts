import { z } from 'zod'
import { Link, Project } from '@/utils/types'
import { baseUrl, projectsQuery } from '@/utils/url'

const schema = z.array(z.object({
  id: z.string(),
  data: z.object({
    title: z.array(z.object({
      text: z.string()
    })),
    briefInfo: z.array(z.object({
      text: z.string()
    })),
    githubReadme: z.object({
      url: z.string()
    }),
    repo: z.object({
      url: z.optional(z.string())
    }),
    live: z.object({
      url: z.optional(z.string())
    }),
    demo: z.object({
      url: z.optional(z.string())
    }),
    frontend: z.object({
      url: z.optional(z.string())
    }),
    backend: z.object({
      url: z.optional(z.string())
    }),
    technologies: z.array(z.object({
      text: z.string()
    })),
    createdAt: z.string()
  })
}))

export default defineEventHandler(async () => {
  let response: any = await $fetch(`${baseUrl}&${projectsQuery}`)
  const parsedResponse = schema.parse(response.results)
  const projects: Array<Project> = []
  parsedResponse.forEach(project => {
    const links: Array<Link> = [];
    if (project.data.repo.url) {
      links.push({
        name: 'repo',
        url: project.data.repo.url
      })
    }
    if (project.data.live.url) {
      links.push({
        name: 'live',
        url: project.data.live.url
      })
    }
    if (project.data.demo.url) {
      links.push({
        name: 'demo',
        url: project.data.demo.url
      })
    }
    if (project.data.frontend.url) {
      links.push({
        name: 'frontend',
        url: project.data.frontend.url
      })
    }
    if (project.data.backend.url) {
      links.push({
        name: 'backend',
        url: project.data.backend.url
      })
    }
    projects.push({
      id: project.id,
      title: project.data.title[0].text,
      briefInfo: project.data.briefInfo[0].text,
      githubReadme: project.data.githubReadme.url,
      urls: links,
      technologies: project.data.technologies.map(v => v.text),
      createdAt: project.data.createdAt
    })
  })
  console.log(projects);

  return projects
})
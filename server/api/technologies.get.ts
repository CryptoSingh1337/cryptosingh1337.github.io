import { z } from 'zod'
import { Skill } from '@/utils/types'
import { baseUrl, technologiesQuery } from '@/utils/url'

const schema = z.array(z.object({
  id: z.string(),
  data: z.object({
    name: z.array(z.object({
      text: z.string()
    })),
    url: z.object({
      url: z.string()
    }),
    order: z.array(z.object({
      text: z.string().transform(Number)
    }))
  })
}))

export default defineEventHandler(async () => {
  let response: any = await $fetch(`${baseUrl}&${technologiesQuery}`)
  const parsedResponse = schema.parse(response.results)
  const skills: Array<Skill> = []
  parsedResponse.forEach(skill => {
    skills.push({
      id: skill.id,
      name: skill.data.name[0].text,
      url: skill.data.url.url,
      order: skill.data.order[0].text
    })
  })
  skills.sort((a, b) => a.order - b.order)
  return skills
})
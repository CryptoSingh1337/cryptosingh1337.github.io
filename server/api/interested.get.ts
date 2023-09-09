import { z } from 'zod'
import { Skill } from '@/utils/types'
import { baseUrl, interestedTechnologiesQuery } from '@/utils/url'

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
      text: z.string()
    }))
  })
}))

export default defineEventHandler(async () => {
  let response: any = await $fetch(`${baseUrl}&${interestedTechnologiesQuery}`)
  const parsedResponse = schema.parse(response.results)
  const interestedSkill: Array<Skill> = []
  parsedResponse.forEach(skill => {
    interestedSkill.push({
      id: skill.id,
      name: skill.data.name[0].text,
      url: skill.data.url.url,
      order: Number(skill.data.order[0].text)
    })
  })
  return interestedSkill
})
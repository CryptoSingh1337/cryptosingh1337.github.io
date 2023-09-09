export const baseUrl = `${process.env.NUXT_PRISMIC_BASE_URL}documents/search?ref=${process.env.NUXT_PRISMIC_REF}&access_token=${process.env.NUXT_PRISMIC_ACCESS_TOKEN}`
export const interestedTechnologiesQuery = 'q=[[at(document.tags, ["interested"])]]&orderings=[my.skill.order]#format=json'
export const technologiesQuery = 'q=[[at(document.tags, ["skill"])]]&orderings=[my.skill.order]#format=json'
export const projectsQuery = 'q=[[at(document.tags, ["project"])]]&orderings=[my.project.createdAt desc]#format=json'
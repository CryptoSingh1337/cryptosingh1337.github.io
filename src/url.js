export default {
    baseUrl: `${process.env.VUE_APP_ENDPOINT}documents/search?ref=${process.env.VUE_APP_REF}&access_token=${process.env.VUE_APP_ACCESS_TOKEN}&`,
    resume: `q=[[at(document.tags, ["resume"])]]#format=json`,
    interested: `q=[[at(document.tags, ["interested"])]]&orderings=[my.skill.order]#format=json`,
    technologies: `q=[[at(document.tags, ["skill"])]]&orderings=[my.skill.order]#format=json`,
    projects: `q=[[at(document.tags, ["project"])]]&orderings=[my.project.createdat desc]#format=json`,
}
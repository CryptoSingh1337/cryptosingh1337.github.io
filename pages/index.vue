<template>
  <div>
    <About :interested="interested" />
    <Content :technologies="technologies" :projects="projects" />
  </div>
</template>

<script>
import Url from "@/utils/urls";
import About from "@/components/about/About.vue";
import Content from "@/components/content/Content.vue";

export default {
  name: "App",
  components: {
    About,
    Content,
  },
  async asyncData({ $axios }) {
    let response = await $axios.get(Url.baseUrl + Url.interested);
    let data = await response.data.results;
    const interested = [];
    await data.forEach((interest) => {
      interested.push({
        id: interest.id,
        title: interest.data.name[0].text,
        source: interest.data.url.url,
        order: interest.data.order[0].text,
      });
    });

    response = await $axios.get(Url.baseUrl + Url.technologies);
    data = await response.data.results;
    const technologies = [];
    await data.forEach((tech) => {
      technologies.push({
        id: tech.id,
        title: tech.data.name[0].text,
        source: tech.data.url.url,
        order: tech.data.order[0].text,
      });
    });

    response = await $axios.get(Url.baseUrl + Url.projects);
    data = await response.data.results;
    const projects = [];
    data.forEach((project) => {
      projects.push({
        title: project.data.title[0].text,
        info: project.data.info[0].text,
        repo: project.data.repo.url,
        live: project.data.demo.url,
        frontendRepo: project.data.frontendrepo.url,
        backendRepo: project.data.backendrepo.url,
        technologies: project.data.technologies,
      });
    });
    return { interested, technologies, projects };
  },
};
</script>

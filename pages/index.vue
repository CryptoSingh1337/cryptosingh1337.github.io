<template>
  <div>
    <About :interested="interested" :stack="stack" />
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
    const _stack = new Set(["Java", "Spring", "Vue"]);
    let response = await $axios.get(Url.baseUrl + Url.interested);
    let data = await response.data.results;
    const interested = [];
    const stack = [];
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
      const name = tech.data.name[0].text;
      if (_stack.has(name)) {
        stack.push({
          id: tech.id,
          title: name,
          source: tech.data.url.url,
          order: tech.data.order[0].text,
        });
      }
      technologies.push({
        id: tech.id,
        title: name,
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
    return { stack, interested, technologies, projects };
  },
};
</script>

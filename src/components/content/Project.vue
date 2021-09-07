<template>
  <section class="projects">
    <h3 class="projects-title">Projects</h3>
    <Loader v-if="loading" />
    <ul class="projects-list">
      <li v-if="!loading" class="projects-item projects-item--headings">
        <span>Title</span>
        <span>Links</span>
        <span>Description</span>
        <span>Technologies</span>
      </li>
      <ProjectBlock
        :key="project.title"
        v-for="project in projects"
        :title="project.title"
        :info="project.info"
        :repo="project.repo"
        :live="project.live"
        :frontendRepo="project.frontendRepo"
        :backendRepo="project.backendRepo"
        :technologies="project.technologies"
      />
    </ul>
  </section>
</template>

<script>
import axios from "axios";
import Url from "../../url";
import Loader from "../Loader.vue";
import ProjectBlock from "./ProjectBlock.vue";

export default {
  name: "Project",
  components: {
    Loader,
    ProjectBlock,
  },
  data() {
    return {
      loading: true,
      projects: [],
    };
  },
  methods: {
    getProjects() {
      axios
        .get(Url.baseUrl + Url.projects)
        .then((response) => response.data.results)
        .then((results) => {
          results.forEach((result) => {
            this.projects.push({
              title: result.data.title[0].text,
              info: result.data.info[0].text,
              repo: result.data.repo.url,
              live: result.data.demo.url,
              frontendRepo: result.data.frontendrepo.url,
              backendRepo: result.data.backendrepo.url,
              technologies: result.data.technologies,
            });
          });
          this.loading = false;
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<style>
.projects {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}
.projects-title {
  margin-bottom: var(--space-4);
}
.projects-item {
  display: grid;
  grid-column-gap: var(--space-4);
  grid-row-gap: var(--space-4);
  grid-template-columns: repeat(2, 1fr);
}
.projects-item--headings {
  display: none;
}
.projects-item--info {
  padding: var(--space-3) 0;
  font-size: 0.75rem;
}
.projects-item span:nth-child(2) {
  justify-content: end;
  justify-self: end;
}
.projects-item span:nth-child(3),
.projects-item span:nth-child(4) {
  grid-column: 1 / 3;
}
.projects-item:not(:last-child) {
  border-bottom: 1px solid var(--primary-200);
}
.projects-item-title {
  color: var(--gray-500);
  transition: var(--transition-time-base);
  font-weight: 500;
  font-size: 0.875rem;
}
@media screen and (min-width: 640px) {
  .projects-item--headings {
    display: grid;
    padding-bottom: var(--space-3);
    color: var(--primary-400);
    font-weight: 600;
  }
  .projects-item {
    grid-template-columns: 1fr 1fr 3fr 2fr;
    align-items: center;
  }
  .projects-item-link {
    color: var(--gray-500);
    transition: var(--transition-time-base);
    font-weight: 400;
  }
  .projects-item span:nth-child(2) {
    justify-self: center;
    justify-content: center;
  }
  .projects-item span:nth-child(3) {
    grid-column: 3;
  }
  .projects-item span:nth-child(4) {
    grid-column: 4;
    text-align: right;
  }
}
@media screen and (min-width: 1280px) {
  .projects {
    margin-left: 0;
  }
}
</style>

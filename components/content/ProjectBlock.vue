<template>
  <li class="projects-item projects-item--info">
    <span class="projects-item-title">{{ title }}</span>
    <span class="projects-item-preview">
      <a v-if="repo !== undefined" :href="repo" target="_blank"
        ><span class="projects-item-repo">Repo</span></a
      >
      <a v-if="live !== undefined" :href="live" target="_blank"
        ><span class="projects-item-live">Live</span></a
      >
      <a v-if="frontendRepo !== undefined" :href="frontendRepo" target="_blank"
        ><span class="projects-item-repo">Frontend</span></a
      >
      <a v-if="backendRepo !== undefined" :href="backendRepo" target="_blank"
        ><span class="projects-item-repo">Backend</span></a
      >
    </span>
    <span>{{ info }}</span>
    <span>{{ technologiesString }}</span>
  </li>
</template>

<script>
import Link from "@/components/Link.vue";

export default {
  name: "ProjectBlock",
  props: {
    title: String,
    info: String,
    repo: String,
    live: String,
    frontendRepo: String,
    backendRepo: String,
    technologies: Array,
  },
  components: {
    Link,
  },
  data() {
    return {
      technologiesString: "",
    };
  },
  methods: {
    createTechnologiesString() {
      let i = 0;
      this.technologies.forEach((tech) => {
        if (i === this.technologies.length - 1)
          this.technologiesString += tech.text;
        else this.technologiesString += tech.text + ", ";
        i++;
      });
    },
  },
  created() {
    this.createTechnologiesString();
  },
};
</script>

<style scoped>
.project-link {
  color: var(--gray-500);
}
.projects-item--info {
  padding: var(--space-3) 0;
  font-size: 0.75rem;
}
.projects-item-live,
.projects-item-repo {
  padding: 0 var(--space-2);
  color: var(--gray-900);
  border-radius: var(--space-2);
  margin: var(--space-1);
}
.projects-item-repo {
  background-color: var(--success-100);
}
.projects-item-live {
  background-color: var(--success-200);
}
.projects-item-preview {
  display: flex;
  flex-wrap: wrap;
}
.projects-item-preview a {
  color: var(--gray-900);
  /* transition: var(--transition-time-base); */
}
</style>

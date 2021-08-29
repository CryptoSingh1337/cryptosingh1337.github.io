<template>
  <section class="technologies">
    <h3 class="technologies-title">Technologies and skills</h3>
    <Loader v-if="loading" />
    <div class="technologies-block">
      <Skill
        :key="tech.id"
        v-for="tech in technologies"
        :title="tech.title"
        :source="tech.source"
        :isSkill="true"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Url from "../../url";
import Skill from "../skill/Skill.vue";
import Loader from "../Loader.vue";

export default {
  name: "Technologies",
  components: {
    Skill,
    Loader,
  },
  data() {
    return {
      technologies: [],
      loading: true,
    };
  },
  methods: {
    getTechnologies() {
      axios
        .get(Url.baseUrl + Url.technologies)
        .then((response) => {
          response.data.results.forEach((tech) => {
            this.technologies.push({
              id: tech.id,
              title: tech.data.name[0].text,
              source: tech.data.url.url,
              order: tech.data.order[0].text,
            });
          });
          this.technologies.sort((a, b) => a.order - b.order);
          this.loading = false;
        })
        .catch((err) => {
          throw err;
        });
    },
  },
  created() {
    this.getTechnologies();
  },
};
</script>

<style scoped>
.technologies-title {
  margin-bottom: var(--space-4);
}
.technologies-block {
  display: grid;
  grid-column-gap: var(--space-4);
  grid-row-gap: var(--space-4);
  justify-self: center;
  grid-template-columns: repeat(auto-fill, minmax(2.5rem, 1fr));
}
@media screen and (min-width: 768px) {
  .technologies {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 1280px) {
  .technologies {
    width: 16rem;
    margin-bottom: var(--space-6);
    margin-right: 0;
  }
}
</style>

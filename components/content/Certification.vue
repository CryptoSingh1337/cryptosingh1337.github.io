<template>
  <section class="certification content-certification">
    <h3 class="title certification-title">Certifications</h3>
    <p class="certification-info" :key="i" v-for="(c, i) in certificates">
      <span class="education-details">
        <a
          v-if="c.link"
          class="certification-link"
          :href="c.link"
          target="_blank"
        >
          {{ c.title }} <Link />
        </a>
        <div v-else class="certification-link">
          {{ c.title }}
        </div>
      </span>
    </p>
  </section>
</template>

<script>
import { certifications } from "@/utils/data";
import Link from "@/components/Link.vue";
export default {
  name: "Certification",
  components: {
    Link,
  },
  data() {
    return {
      certificates: certifications,
    };
  },
  created() {
    this.certificates.sort((a, b) => {
      return new Date(b.issuedOn) - new Date(a.issuedOn);
    });
  },
};
</script>

<style scoped>
.certification {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}
.content-certification {
  grid-column: 1/2;
}
.certification-info {
  display: grid;
  grid-row-gap: 0rem;
  margin-bottom: var(--space-3);
}
.certification-info:last-child {
  margin-bottom: 0;
}
.certification-title {
  margin-bottom: var(--space-4);
}
.certification-subtitle {
  display: inline-block;
  color: var(--primary-400);
  font-weight: 600;
}
.certification-details {
  display: grid;
  grid-template-columns: -webkit-max-content;
  grid-template-columns: max-content;
}
.certification-link {
  color: var(--gray-500);
  transition: var(--transition-time-base);
}
@media screen and (min-width: 768px) {
  .certification-info {
    grid-template-columns: 16rem auto 16rem;
    grid-column-gap: var(--space-6);
  }
}
@media screen and (min-width: 1280px) {
  .certification {
    width: 16rem;
    margin-bottom: var(--space-6);
    margin-right: 0;
  }
  .certification-info {
    grid-template-columns: 16rem;
  }
}
</style>

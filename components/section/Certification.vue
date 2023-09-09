<template>
  <section class="certification content-certification">
    <h3 class="title certification-title">Certifications</h3>
    <Certification :key="certification.title" v-for="certification in certifications" :certification="certification" />
  </section>
</template>

<script setup lang="ts">
import { certifications } from "@/utils/data";
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

.certification-title {
  margin-bottom: var(--space-4);
}

@media screen and (min-width: 1280px) {
  .certification {
    width: 16rem;
    margin-bottom: var(--space-6);
    margin-right: 0;
  }
}
</style>
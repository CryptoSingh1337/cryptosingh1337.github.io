<template>
  <section class="m-8 mt-0 xl:ml-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white">Work Experience</h3>
    <div class="work-experience--branches">
      <Experience :key="experience.organization" v-for="(experience, idx) in workExperience" :experience="experience"
        :is-left="(idx & 1) === 0" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { workExperience } from "@/utils/data"
</script>

<style scoped>
.work-experience--branches {
  position: relative;
  padding-right: var(--space-2);
}

.work-experience--branches::after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  left: auto;
  width: 8px;
  height: 100%;
  background: var(--primary-300);
}

@media screen and (min-width: 640px) {
  .work-experience--branches {
    display: grid;
    grid-template-columns: 50% 50%;
    padding-right: 0;
  }

  .work-experience--branches::after {
    right: 50%;
    left: 50%;
  }
}
</style>
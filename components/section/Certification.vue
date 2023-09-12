<template>
  <section class="m-8 xl:w-64 xl:mr-0 mt-0 ">
    <h3 class="mb-4 font-bold text-base text-black dark:text-white">Certifications</h3>
    <Certification :key="certification.title" v-for="certification in certifications" :certification="certification" />
  </section>
</template>

<script setup lang="ts">
import { certifications } from "@/utils/data";
</script>

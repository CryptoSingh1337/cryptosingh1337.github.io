<template>
  <section class="mx-8 xl:ml-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">Publications</h3>
    <div class="divide-y divide-solid divide-primary-200">
      <Publication :key="idx" v-for="(publication, idx) in publications" :publication="publication" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { publications } from "@/utils/data";
</script>
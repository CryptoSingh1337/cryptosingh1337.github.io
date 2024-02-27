<template>
  <section class="m-8 xl:w-64 xl:mr-0 mt-0 ">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">Courses</h3>
    <ul class="pl-0 text-xs md:text-sm xl:hidden">
      <div class="sm:divide-y divide-solid divide-primary-200">
        <li class="grid gap-4 grid-cols-[1fr_1fr_3fr] items-center pb-3 text-primary-400 font-semibold">
          <span>Date</span>
          <span class="text-center">Organization</span>
          <span class="text-right">Name</span>
        </li>
        <div class="divide-y divide-solid divide-primary-200">
          <Certification :key="certification.title" v-for="certification in certifications" :certification="certification"
            :show-table="true" />
        </div>
      </div>
    </ul>
    <Certification class="hidden xl:block" :key="certification.title" v-for="certification in certifications"
      :certification="certification" :show-table="false" />
  </section>
</template>

<script setup lang="ts">
import { certifications } from "@/utils/data";
</script>

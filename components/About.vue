<template>
  <section class="md:flex mt-0 mx-8 mb-8">
    <picture>
      <img class="float-left w-[7.5rem] h-[7.5rem] mb-2 mr-4 md:float-none md:min-w-[16rem] md:h-64 md:mb-4 md:mr-8"
        src="/profile/img.jpg" alt="profile-img" />
      <div class="text-black hidden md:block">
        <h3 class="mb-4 font-bold text-base text-black dark:text-white">Résumé</h3>
        <a class="no-underline" :href="resume" target="_blank" download>
          <button
            class="inline-flex bg-primary-500 border-0 rounded-md py-1 px-3 items-center transition-colors ease-in-out duration-300 hover:bg-primary-600 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download"
              viewBox="0 0 16 16">
              <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            <span class="ml-2">Download</span>
          </button>
        </a>
      </div>
    </picture>
    <p class="mb-4 md:mb-0">
      <span class="text-primary-400 font-bold">&#60;Hello, world! &#47;&#62;</span>
      <span class="block mt-4">
        I am
        <span class="text-primary-400">Saransh</span>
        and a <!-- seasoned -->
        <span>
          <span class="text-primary-400">Backend</span> Developer
        </span>
        hailing from India!
      </span>
      <span class="block mt-4" :key="i" v-for="(l, i) in hero">
        {{ l }}
        <span class="grid grid-cols-autofill gap-4 mt-4" v-if="i === 2">
          <Technology :key="skill.id" v-for="skill in stack" :skill="skill" :isSkill="false" />
        </span>
      </span>
      <span class="block mt-4">Presently, my keen interest is focused on:</span>
      <span class="grid grid-cols-autofill gap-4 mt-4">
        <Technology :key="skill.id" v-for="skill in interested" :skill="skill" :isSkill="false" />
      </span>
    </p>
    <div class="text-black block md:hidden">
      <h3 class="mb-4 font-bold text-base text-black dark:text-white">Résumé</h3>
      <a class="no-underline" :href="resume" target="_blank" download>
        <button
          class="inline-flex bg-primary-500 border-0 rounded-md py-1 px-3 items-center transition-colors ease-in-out duration-300 hover:bg-primary-600 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download"
            viewBox="0 0 16 16">
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
          <span class="ml-2">Download</span>
        </button>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { hero } from '@/utils/data'
import { Skill } from '@/utils/types'

defineProps<{
  stack: Array<Skill>,
  interested: Array<Skill>
}>()

const resume = useRuntimeConfig().public.resume as string
</script>

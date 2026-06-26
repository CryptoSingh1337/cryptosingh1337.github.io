<template>
  <section class="xl:flex mt-0 mx-8 mb-8">
    <picture>
      <img class="float-left w-[7.5rem] h-[7.5rem] mb-2 mr-4 xl:float-none md:min-w-[16rem] md:h-64 md:mb-4 md:mr-8"
        src="/favicon.png" :alt="t('about.profileAlt')" />
    </picture>
    <p class="mb-4 xl:mb-0">
      <span class="text-primary-400 font-bold duration-300">{{ `<${t('about.hello')} />` }}</span>
      <span class="block mt-4">
        {{ t('about.introPrefix') }}
        <span class="text-primary-400 duration-300">Saransh</span>
        {{ t('about.introMiddle') }}
        <span>
          <span class="text-primary-400 duration-300">{{ t('about.role') }}</span>
        </span>
        {{ t('about.introSuffix') }}
      </span>
      <span class="block mt-4" :key="i" v-for="(l, i) in content.hero">
        {{ l }}
        <span class="grid grid-cols-autofill gap-4 mt-4 md:ml-[41%] xl:ml-0" v-if="i === 2">
          <Technology :key="skill.id" v-for="skill in stack" :skill="skill" :isSkill="false" />
        </span>
      </span>
      <span class="block mt-4">{{ t('about.interests') }}</span>
      <span class="grid grid-cols-autofill gap-4 mt-4">
        <Technology :key="skill.id" v-for="skill in interested" :skill="skill" :isSkill="false" />
      </span>
    </p>
  </section>
</template>

<script setup lang="ts">
import { Skill } from '@/utils/types'

const { t } = useI18n()
const content = usePortfolioContent()

defineProps<{
  stack: Array<Skill>,
  interested: Array<Skill>
}>()
</script>

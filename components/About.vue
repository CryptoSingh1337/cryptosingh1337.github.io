<template>
  <section class="xl:flex mt-0 mx-8 mb-8">
    <picture>
      <img :alt="t('about.profileAlt')"
           class="float-left w-[7.5rem] h-[7.5rem] mb-2 mr-4 xl:float-none md:min-w-[16rem] md:h-64 md:mb-4 md:mr-8" src="/favicon.png"/>
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
      <span v-for="(l, i) in content.hero" :key="i" class="block mt-4">
        {{ l }}
        <span v-if="i === 2" class="grid grid-cols-autofill gap-4 mt-4 md:ml-[41%] xl:ml-0">
          <Technology v-for="skill in stack" :key="skill.id" :isSkill="false" :skill="skill"/>
        </span>
      </span>
      <span class="block mt-4">{{ t('about.interests') }}</span>
      <span class="grid grid-cols-autofill gap-4 mt-4">
        <Technology v-for="skill in interested" :key="skill.id" :isSkill="false" :skill="skill"/>
      </span>
    </p>
  </section>
</template>

<script lang="ts" setup>
import {Skill} from '@/utils/types'

const {t} = useI18n()
const content = usePortfolioContent()

defineProps<{
  stack: Array<Skill>,
  interested: Array<Skill>
}>()
</script>

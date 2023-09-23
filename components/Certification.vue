<template>
  <div class="grid gap-0 mb-3 md:grid-cols-[16rem_auto_16rem] xl:grid-cols-[16rem]">
    <div class="text-primary-400 font-semibold text-sm">
      <span class="block">{{ certification.issuedOn }}</span>
      <span class="block">{{ certification.organization }}</span>
    </div>
    <div>
      <a v-if="certification.url" class="hover:underline" :href="certification.url" target="_blank">
        {{ certification.title }}
        <svg class="inline" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24"
          style="fill: var(--dark)">
          <path
            d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z" />
        </svg>
      </a>
      <div v-else>
        {{ certification.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Certification } from "@/utils/types";

defineProps<{
  certification: Certification
}>()
</script>

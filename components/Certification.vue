<template>
  <div class="certification-info">
    <div class="certification-header">
      <span class="certification-subtitle">{{ certification.issuedOn }}</span>
      <span class="certification-subtitle">{{ certification.organization }}</span>
    </div>
    <div class="education-details">
      <a v-if="certification.url" class="certification-link" :href="certification.url" target="_blank">
        {{ certification.title }}
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24"
          style="fill: var(--dark)">
          <path
            d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z" />
        </svg>
      </a>
      <div v-else class="certification-link">
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

<style scoped>
.certification-info {
  display: grid;
  grid-row-gap: 0rem;
  margin-bottom: var(--space-3);
}

.certification-info:last-child {
  margin-bottom: 0;
}

.certification-header {
  color: var(--primary-400);
  font-weight: 600;
  font-size: small;
}

.certification-title {
  margin-bottom: var(--space-4);
}

.certification-subtitle {
  display: block
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

  .certification-info {
    grid-template-columns: 16rem;
  }
}
</style>
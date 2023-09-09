<template>
  <div :class="['work-experience-block', isLeft ? classLeft[0] : classRight[0]]">
    <span :class="['work-experience-period', isLeft ? classLeft[1] : classRight[1]]">{{ experience.date }}</span>
    <div :class="['work-experience-info', isLeft ? classLeft[2] : classRight[2]]">
      <a class="work-experience-link" :href="experience.organizationUrl" target="_blank">
        <h3>
          {{ experience.organization }}
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24"
            style="fill: var(--dark)">
            <path
              d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z" />
          </svg>
        </h3>
      </a>
      <span class="work-experience-position">{{ experience.position }}</span>
      <div class="work-experience-content">
        <span :key="i" v-for="(c, i) in experience.content">{{ c }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Experience } from '@/utils/types';

defineProps<{
  experience: Experience,
  isLeft: boolean
}>()

const classLeft = [
  "work-experience-block--left",
  "work-experience-period--left",
  "work-experience-info--left",
]
const classRight = [
  "work-experience-block--right",
  "work-experience-period--right",
  "work-experience-info--right",
]
</script>

<style scoped>
.work-experience-block--left,
.work-experience-block--right {
  margin-bottom: var(--space-4);
  text-align: right;
}

.work-experience-period--left,
.work-experience-period--right {
  padding-right: var(--space-4);
}

.work-experience-block--left {
  min-height: 6rem;
}

.work-experience-block--right:not(:last-child) {
  min-height: 6rem;
}

.work-experience-period {
  color: var(--primary-400);
  font-weight: 600;
  border-bottom: 4px solid var(--primary-300);
}

.work-experience-info {
  display: flex;
  flex-direction: column;
  margin-top: var(--space-3);
}

.work-experience-info--left,
.work-experience-info--right {
  padding-right: var(--space-4);
}

.work-experience-position {
  color: var(--gray-500);
  margin-bottom: var(--space-3);
}

.work-experience-link {
  color: var(--gray-500);
  transition: var(--transition-time-base);
}

.work-experience-content span {
  display: block;
}

@media screen and (min-width: 640px) {
  .work-experience-block--left:not(:last-child) {
    margin-bottom: 8rem;
  }

  .work-experience-block--right {
    text-align: left;
    margin-top: 10rem;
    margin-bottom: 0;
  }

  .work-experience-period--left {
    padding-right: var(--space-4);
  }

  .work-experience-period--right {
    padding-left: var(--space-4);
    padding-right: 0;
  }

  .work-experience-info {
    display: flex;
    flex-direction: column;
    margin-top: var(--space-3);
  }

  .work-experience-info--left {
    padding-right: var(--space-4);
  }

  .work-experience-info--right {
    padding-left: var(--space-4);
    padding-right: 0;
  }
}

@media screen and (min-width: 1280px) {
  .work-experience {
    margin-left: 0;
  }
}
</style>
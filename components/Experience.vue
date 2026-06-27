<template>
  <div class="exp">
    <div class="exp-date">{{ company.span }}</div>
    <div class="exp-rail" aria-hidden="true">
      <span class="exp-dot"></span>
    </div>
    <div class="exp-body">
      <a class="exp-org hover:underline" :href="company.organizationUrl" target="_blank" rel="noopener">
        {{ company.organization }}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
          <path
            d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z" />
        </svg>
      </a>

      <div v-if="!multi" class="exp-single">{{ company.roles[0].position }}</div>

      <ol v-else class="exp-roles">
        <li v-for="(role, i) in company.roles" :key="i" class="exp-role">
          <span class="exp-subdot" aria-hidden="true"></span>
          <div class="exp-pos">{{ role.position }}</div>
          <div class="exp-rdate">{{ role.date }}</div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Experience } from '@/utils/types'

const props = defineProps<{
  company: Experience
}>()

const multi = computed(() => props.company.roles.length > 1)
</script>

<style scoped>
.exp {
  display: flex;
  align-items: stretch;
}

.exp-date {
  flex: none;
  width: 9.5rem;
  text-align: right;
  padding-right: var(--space-3);
  padding-top: 1px;
  color: var(--primary-400);
  font-weight: 600;
  font-size: 0.78rem;
  line-height: 1.35;
  white-space: nowrap;
}

.exp-rail {
  flex: none;
  width: 1.4rem;
  position: relative;
}

.exp-rail::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: var(--primary-300);
}

.exp-dot {
  position: absolute;
  left: 50%;
  top: 3px;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-500);
  box-shadow: 0 0 0 4px var(--background);
}

.exp-body {
  flex: 1;
  min-width: 0;
  padding-left: var(--space-3);
  padding-bottom: var(--space-5);
}

.exp-org {
  font-weight: 700;
  font-size: 1rem;
  transition: var(--transition-time-base);
}

.exp-org svg {
  display: inline;
  fill: var(--dark);
}

.exp-single {
  color: var(--gray-500);
  margin-top: var(--space-1);
}

.exp-roles {
  list-style: none;
  margin: var(--space-3) 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.exp-role {
  position: relative;
  padding-left: var(--space-4);
}

.exp-subdot {
  position: absolute;
  left: 0;
  top: 0.42rem;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--background);
  border: 2px solid var(--primary-400);
}

.exp-pos {
  font-weight: 600;
}

.exp-rdate {
  color: var(--gray-500);
  font-size: 0.8rem;
  margin-top: 0.05rem;
}

@media screen and (max-width: 680px) {
  .exp {
    flex-direction: column;
    border-left: 2px solid var(--primary-300);
    padding-left: var(--space-4);
    margin-left: 5px;
  }

  .exp-date {
    width: auto;
    text-align: left;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: var(--space-1);
  }

  .exp-rail {
    display: none;
  }

  .exp-body {
    padding-left: 0;
  }
}
</style>

<template>
  <section class="work-experience">
    <h3 class="work-experience-title">Work Experience</h3>
    <ExperienceBlock />
  </section>
</template>

<script>
import ExperienceBlock from "@/components/content/ExperienceBlock.vue";

export default {
  name: "Experience",
  components: {
    ExperienceBlock,
  },
};
</script>

<style scoped>
.work-experience {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}
.work-experience-title {
  margin-bottom: var(--space-4);
}
.work-experience--branches {
  position: relative;
  padding-right: var(--space-2);
}
.work-experience--branches::after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  left: auto;
  width: 8px;
  height: 100%;
  background: var(--primary-300);
}
@media screen and (min-width: 640px) {
  .work-experience--branches {
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: 50% 50%;
    padding-right: 0;
  }
  .work-experience--branches::after {
    right: 50%;
    left: 50%;
  }
}
@media screen and (min-width: 1280px) {
  .work-experience {
    margin-left: 0;
  }
}
.work-experience--branches {
  position: relative;
  padding-right: var(--space-2);
}
.work-experience--branches::after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  left: auto;
  width: 8px;
  height: 100%;
  background: var(--primary-300);
}
@media screen and (min-width: 640px) {
  .work-experience--branches {
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: 50% 50%;
    padding-right: 0;
  }
  .work-experience--branches::after {
    right: 50%;
    left: 50%;
  }
}
@media screen and (min-width: 1280px) {
  .work-experience {
    margin-left: 0;
  }
}
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
    margin-top: 8rem;
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
</style>

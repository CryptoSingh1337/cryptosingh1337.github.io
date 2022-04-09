<template>
  <div class="work-experience--branches">
    <div
      :class="[
        'work-experience-block',
        (i & 1) === 0 ? class_left[0] : class__right[0],
      ]"
      :key="i"
      v-for="(w, i) in work"
    >
      <span
        :class="[
          'work-experience-period',
          (i & 1) === 0 ? class_left[1] : class__right[1],
        ]"
        >{{ w.date }}</span
      >
      <div
        :class="[
          'work-experience-info',
          (i & 1) === 0 ? class_left[2] : class__right[2],
        ]"
      >
        <a class="work-experience-link" :href="w.org_link" target="_blank"
          ><h3>{{ w.org }} <Link /></h3></a
        ><span class="work-experience-position">{{ w.position }}</span>
        <div class="work-experience-content">
          <span :key="i" v-for="(c, i) in w.content">{{ c }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { work_experience } from "@/utils/data";
import Link from "@/components/Link.vue";

export default {
  name: "ExperienceBlock",
  components: {
    Link,
  },
  data() {
    return {
      work: work_experience,
      class_left: [
        "work-experience-block--left",
        "work-experience-period--left",
        "work-experience-info--left",
      ],
      class__right: [
        "work-experience-block--right",
        "work-experience-period--right",
        "work-experience-info--right",
      ],
    };
  },
};
</script>

<style scoped>
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

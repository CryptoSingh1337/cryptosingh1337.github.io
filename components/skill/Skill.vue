<template>
  <span
    :class="['icon', 'tooltip', isSkill ? 'icon-size-x2h' : 'icon-size-x1h']"
  >
    <img :src="source" :alt="title" />
    <span class="tooltip-title">{{ title }}</span>
  </span>
</template>

<script>
export default {
  name: "Skill",
  props: {
    source: String,
    title: String,
    isSkill: Boolean,
  },
};
</script>

<style scoped>
span {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
}
.icon-size-x1h {
  width: 1.5rem;
  height: 1.5rem;
}
.icon-size-x2h {
  width: 2.5rem;
  height: 2.5rem;
}
</style>

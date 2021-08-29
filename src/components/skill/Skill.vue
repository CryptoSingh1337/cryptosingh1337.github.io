<template>
  <span class="icon tooltip icon-size-x2h">
    <img :src="source" />
    <span class="tooltip-title">{{ title }}</span>
  </span>
</template>

<script>
export default {
  name: "Skill",
  props: {
    source: String,
    title: String,
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
  max-width: 2rem;
  max-height: 2rem;
}
</style>

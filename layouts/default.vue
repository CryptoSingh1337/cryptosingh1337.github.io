<script lang="ts" setup>
</script>
<template>
  <div
    class="bg-default min-w-[320px] max-w-3xl xl:max-w-7xl my-8 mx-auto py-8 px-0 shadow-2xl dark:shadow-none text-black dark:text-white">
    <div class="content-info flex flex-col overflow-x-hidden overflow-y-scroll">
      <slot/>
    </div>
    <ClientOnly>
      <div class="switches">
        <LanguageToggleButton/>
        <ThemeToggleButton/>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
.content-info::-webkit-scrollbar {
  display: none;
}

.content-info {
  height: calc(100vh - calc((var(--space-6) * 4)));
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.switches {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  position: fixed;
  top: var(--space-2);
  right: var(--space-4);
}
</style>

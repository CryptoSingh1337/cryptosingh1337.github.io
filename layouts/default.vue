<template>
  <div
    class="bg-default min-w-[320px] max-w-3xl xl:max-w-7xl my-8 mx-auto py-8 px-0 shadow-2xl dark:shadow-none text-black dark:text-white">
    <div class="content-info flex flex-col overflow-x-hidden overflow-y-scroll">
      <slot />
    </div>
    <ThemeToggleButton />
  </div>
</template>

<style>
/* TODO: Make this style tag scoped */
.content-info::-webkit-scrollbar {
  display: none;
}

.content-info {
  height: calc(100vh - calc((var(--space-6) * 4)));
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.list,
.certificates-list,
.certificates-resourse-list,
.certificates-year-list,
.contacts-list,
.projects-list {
  list-style: none;
  padding-left: 0;
}

.icon {
  display: block;
  text-align: center;
}

.technologies {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}

.title {
  transition: var(--transition-time-base);
}

.link {
  color: var(--gray-500);
}

@media screen and (min-width: 768px) {
  .content-details {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (min-width: 1280px) {
  .content-details {
    flex-direction: row;
  }
}
</style>
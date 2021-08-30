<template>
  <div class="content">
    <div class="content-info">
      <About />
      <div class="content-details">
        <Content />
      </div>
    </div>
    <Switches />
  </div>
</template>

<script>
import About from "./components/about/About.vue";
import Content from "./components/content/Content.vue";
import Switches from "./components/Switches.vue";

export default {
  name: "App",
  components: {
    About,
    Content,
    Switches,
  },
};
</script>

<style>
.content {
  min-width: 320px;
  max-width: 768px;
  margin: var(--space-6) auto;
  padding: var(--space-6) 0;
  box-shadow: 0 8px 16px rgba(110, 120, 130, 0.12),
    0 -8px 16px rgba(110, 120, 130, 0.12);
  background: var(--light);
}
.content::-webkit-scrollbar {
  display: none;
}
.content-info {
  display: flex;
  flex-direction: column;
  height: calc(100vh - calc((var(--space-6) * 4)));
  overflow-x: hidden;
  overflow-y: scroll;
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
.tooltip {
  position: relative;
}
.tooltip .tooltip-title {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 1;
  top: calc(100% + var(--space-1));
  color: var(--gray-900);
  text-align: center;
  font-size: 0.75rem;
  background-color: var(--primary-100);
  border-radius: var(--space-2);
  padding: 0 var(--space-2);
  transition: opacity var(--transition-time-base);
  left: 0;
}
.tooltip:hover .tooltip-title {
  visibility: visible;
  opacity: 1;
}
.technologies {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}
@media screen and (min-width: 768px) {
  .content {
    max-width: 1280px;
  }
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

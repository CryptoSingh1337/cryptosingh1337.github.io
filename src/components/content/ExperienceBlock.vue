<template>
  <div class="work-experience-block work-experience-block--left">
    <span class="work-experience-period work-experience-period--left"
      >Sept 2021 - Present</span
    >
    <div class="work-experience-info work-experience-info--left">
      <a
        class="work-experience-link"
        href="https://www.girlscript.tech"
        target="_blank"
        ><h3>GirlScript Winter of Contributing</h3></a
      ><span class="work-experience-position">Contributor</span>
      <div class="work-experience-content">
        <span>Contributing to Back-end development with Java project.</span>
      </div>
    </div>
  </div>
  <div class="work-experience-block work-experience-block--right">
    <span class="work-experience-period work-experience-period--right"
      >Mar 2021 – May 2021</span
    >
    <div class="work-experience-info work-experience-info--right">
      <a
        class="work-experience-link"
        href="https://github.com/checkstyle/checkstyle"
        target="_blank"
        ><h3>Checkstyle</h3></a
      >
      <span class="work-experience-position">Contributor</span>
      <div class="work-experience-content">
        <span>Updated existing unit tests to use separate input file.</span>
        <span>Updated existing Javadocs and added code examples.</span>
        <span>Merged over 35+ pull requests.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceBlock",
};
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

<template>
  <section class="education content-education">
    <h3 class="title education-title">Education</h3>
    <p class="education-info">
      <span class="education-subtitle"
        >Amity University, Noida <br />(2019 - 2023)</span
      >
      <span class="education-details">
        <span class="education-subtitle">Degree:</span>
        B. Tech
      </span>
      <span class="education-details">
        <span class="education-subtitle">Field Of Study:</span>
        Computer Science and Engineering
      </span>
    </p>
    <p class="education-info">
      <span class="education-subtitle"
        >Bal Bhavan Public Sr. Sec School <br />(2017 - 2019)</span
      >
      <span class="education-details">
        <span class="education-subtitle">Degree:</span>
        Intermediate
      </span>
      <span class="education-details">
        <span class="education-subtitle">Field Of Study:</span>
        Science with CS
      </span>
    </p>
  </section>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
.education {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}
.content-education {
  grid-column: 1/2;
}
.education-info {
  display: grid;
  grid-row-gap: 1rem;
  margin-bottom: var(--space-6);
}
.education-info:last-child {
  margin-bottom: 0;
}
.education-title {
  margin-bottom: var(--space-4);
}
.education-subtitle {
  display: inline-block;
  color: var(--primary-400);
  font-weight: 600;
}
.education-details {
  display: grid;
  grid-template-columns: -webkit-max-content;
  grid-template-columns: max-content;
}
@media screen and (min-width: 768px) {
  .education-info {
    grid-template-columns: 16rem auto 16rem;
    grid-column-gap: var(--space-6);
  }
}
@media screen and (min-width: 1280px) {
  .education {
    width: 16rem;
    margin-bottom: var(--space-6);
    margin-right: 0;
  }
  .education-info {
    grid-template-columns: 16rem;
  }
}
</style>

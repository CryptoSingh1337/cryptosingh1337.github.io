<template>
  <section class="about">
    <picture>
      <img src="/profile/img.jpg" alt="profile-img" />
      <div class="resume about-resume-desktop">
        <h3 class="about-resume-title" v-text="`R${e[0]}sum${e[0]}`"></h3>
        <a :href="resumeLink" target="_blank" download>
          <button class="download-resume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
              />
              <path
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
              /></svg
            ><span>Download</span>
          </button></a
        >
      </div>
    </picture>
    <p>
      <span class="title welcome">&#60;Hello, world! &#47;&#62;</span>
      <span class="about-text">
        My name is
        <span class="about-text--primary">Saransh</span>
        and I'm a
        <span>
          <span class="about-text--primary">final year</span>
          undergrad</span
        >
        from India!
      </span>
      <span class="about-text" :key="i" v-for="(l, i) in line">
        {{ l }}
        <span class="about-interests" v-if="i === 2">
          <Skill
            :key="s.id"
            v-for="s in stack"
            :title="s.title"
            :source="s.source"
            :isSkill="false"
          />
        </span>
      </span>
      <span class="about-text">At the moment I'm interested in</span>
      <span class="about-interests">
        <Skill
          :key="skill.id"
          v-for="skill in interested"
          :title="skill.title"
          :source="skill.source"
          :isSkill="false"
        />
      </span>
    </p>
    <div class="resume about-resume-mobile">
      <h3 class="about-resume-title">Résumé</h3>
      <a :href="resumeLink" target="_blank"
        ><button class="download-resume">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
            /></svg
          ><span>Download</span>
        </button></a
      >
    </div>
  </section>
</template>

<script>
import { line } from "@/utils/data";
import Skill from "@/components/skill/Skill.vue";

export default {
  name: "About",
  components: {
    Skill,
  },
  props: {
    stack: Array,
    interested: Array,
  },
  data() {
    return {
      resumeLink: process.env.VUE_APP_RESUME,
      e: ["é"],
      line: line,
    };
  },
};
</script>

<style scoped>
.welcome {
  color: var(--primary-400);
  font-weight: 700;
}
.about {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}
img {
  height: 7.5rem;
  width: 7.5rem;
  margin-bottom: var(--space-2);
  margin-right: var(--space-4);
  float: left;
}
.about-resume-title {
  margin-bottom: var(--space-4);
}
.about-text {
  display: block;
  margin-top: var(--space-4);
}
.about-text--primary {
  color: var(--primary-400);
}
.about-interests {
  grid-template-columns: repeat(auto-fill, minmax(1.5rem, 1fr));
  margin-top: var(--space-4);
  display: grid;
  grid-column-gap: var(--space-4);
  grid-row-gap: var(--space-4);
}
.download-resume {
  padding: var(--space-1) var(--space-3);
  background-color: var(--primary-500);
  border: 0px;
  border-radius: 5px;
  transition: all ease-in-out 350ms;
  display: inline-flex;
  align-content: center;
}
.download-resume span {
  margin-left: 8px;
}
.download-resume:hover {
  background-color: var(--primary-600);
  cursor: pointer;
}
.resume a {
  text-decoration: none;
}
@media screen and (max-width: 480px) {
  .about-resume-desktop {
    display: none;
  }
  .about-resume-mobile {
    display: block;
  }
  .about p {
    margin-bottom: var(--space-4);
  }
}
@media screen and (min-width: 768px) {
  .about-resume-mobile {
    display: none;
  }
  .about-resume-desktop {
    display: block;
  }
  img {
    min-width: 16rem;
    height: 16rem;
    margin-bottom: var(--space-4);
    margin-right: var(--space-6);
    float: none;
  }
  .about {
    display: flex;
  }
}
</style>

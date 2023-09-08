<template>
  <div class="switches">
    <label :class="['toggle', 'toggle--type', $colorMode.value === 'dark' ?
      'toggle--off-theme toggle--off switches-theme' : 'toggle--on-theme toggle--on switches-theme',]"
      @click="handleClick"></label>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function changeTheme() {
  const body = document.querySelector('body')
  if (body) {
    if (colorMode.preference === 'dark') {
      body.classList.add('theme--dark')
      body.classList.remove('theme--light')
    } else {
      body.classList.add('theme--light')
      body.classList.remove('theme--dark')
    }
  }
}

function handleClick() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  changeTheme()
}

onBeforeMount(() => {
  changeTheme()
})
</script>

<style scoped>
.switches {
  display: flex;
  position: fixed;
  top: var(--space-2);
  right: var(--space-4);
}

.switches-theme {
  margin-right: 0;
}

.toggle {
  position: relative;
  display: block;
  width: 34px;
  height: 14px;
  border-radius: 7px;
  cursor: pointer;
}

.toggle--on,
.toggle--on:focus,
.toggle--off,
.toggle--off:focus {
  background: var(--gray-100);
}

.toggle::before {
  content: "";
  position: absolute;
  top: -3px;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid transparent;
  border-radius: 50%;
  transition: right ease var(--transition-time-base);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.5);
}

.toggle--off::before {
  right: calc(34px - 20px);
  background-color: var(--gray-500);
}

.toggle--on::before {
  right: 0;
  background-color: var(--primary-500);
}

.toggle--type::before {
  border-color: #fff;
  background-color: #fff;
}

.toggle--off-theme::before {
  background-image: url("/theme-dark.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.toggle--on-theme::before {
  background-image: url("/theme-light.svg");
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (min-width: 1280px) {
  .switches-theme {
    margin-right: var(--space-5);
  }
}
</style>
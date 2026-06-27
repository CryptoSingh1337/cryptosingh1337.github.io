<template>
  <button
    :aria-label="buttonLabel"
    :class="['toggle', 'toggle--type', isGerman ? 'toggle--on-language toggle--on' : 'toggle--off-language toggle--off']"
    :title="buttonLabel"
    type="button"
    @click="toggleLocale"></button>
</template>

<script lang="ts" setup>
const {locale, setLocale, t} = useI18n()

const isGerman = computed(() => locale.value === 'de')
const buttonLabel = computed(() => isGerman.value ? t('controls.switchToEnglish') : t('controls.switchToGerman'))

function toggleLocale() {
  setLocale(isGerman.value ? 'en' : 'de')
}
</script>

<style scoped>
.toggle {
  position: relative;
  display: block;
  width: 34px;
  height: 14px;
  padding: 0;
  border: 0;
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
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
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

.toggle--off-language::before {
  background-image: url('/icons/flag-en.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 18px 18px;
}

.toggle--on-language::before {
  background-image: url('/icons/flag-de.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 18px 18px;
}
</style>

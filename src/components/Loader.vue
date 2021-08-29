<template>
  <div class="loader">
    <div class="loader--dot"></div>
    <div class="loader--dot"></div>
    <div class="loader--dot"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loader {
  text-align: center;
  width: 100%;
}
.loader--dot {
  -webkit-animation: dot-keyframes 1.5s infinite ease-in-out;
  animation: dot-keyframes 1.5s infinite ease-in-out;
  background-color: var(--gray-500);
  border-radius: 10px;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 var(--space-1);
}
.loader--dot:nth-child(2) {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.loader--dot:nth-child(3) {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
@-webkit-keyframes dot-keyframes {
  0% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }
  100% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
}
@keyframes dot-keyframes {
  0% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }
  100% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
}
</style>

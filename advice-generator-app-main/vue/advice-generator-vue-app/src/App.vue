<script setup>
  import Advice from './components/Advice.vue';  
</script>

<template>
  <main>
    <Advice />
  </main>
</template>

<style lang="scss">
@import "./assets/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family;
}

#app {
  background-color: $dark-blue;
  color: $light-cyan;
}

main {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
}

button {
  background-color: $neon-green;
  border-radius: 50%;
  padding: 15px 16px 12px;
  border: 0;
  cursor: pointer;
  margin: 0 auto -80px;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 30px $neon-green;
  }
}
</style>

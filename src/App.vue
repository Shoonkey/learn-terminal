<template>
  <div id="app">
    <terminal />
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue';

export default {
  name: 'App',
  components: {
    Terminal
  }
}
</script>


<style lang="sass" scoped>
#app
  display: flex
  box-sizing: border-box
  background: lightblue
  min-height: 100vh
  padding: .8em
</style>
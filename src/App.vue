<template>
  <div id="app">
    <terminal />
  </div>
</template>

<script>
import Terminal from './components/Terminal';

export default {
  name: 'App',
  components: {
    Terminal
  }
}
</script>


<style lang="sass">
#app
  display: flex
  box-sizing: border-box
  background: lightblue
  min-height: 100vh
  padding: .8em

::selection
  background: #41ff33
  color: #1b1b1b

::-moz-selection
  background: #41ff33
  color: #1b1b1b
</style>
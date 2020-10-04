<template>
  <div class="terminal">
    <div class="window-action-bar">
      <p class="title">Terminal</p>
    </div>
    <main class="content-area">
    </main>
  </div>
</template>

<script>
export default {
  name: 'Terminal'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.terminal
  display: flex
  flex-direction: column
  flex-grow: 1
  font-family: "Fira Code", monospace
  letter-spacing: 1.3px
  background: #1b1b1b
  color: #41ff33

  .window-action-bar
    display: inherit
    background: #4b4b4b
    align-items: center
    .title
      margin: 0
      padding: .5em 0 .5em 1em
      font-weight: bold
  
  .content-area
    background: inherit
    flex-grow: 1
</style>

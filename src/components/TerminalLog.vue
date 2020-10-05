<template>
  <div class="terminal-log-container">
    <div v-for="(log, idx) in content" :key="'log-'+idx" class="terminal-log">
      <terminal-input 
        v-if="log.type === 'COMMAND'"
        disabled 
        :path="log.path"
        :value="log.text" 
      />
      <p v-if="log.type === 'COMMAND_OUTPUT'">{{log.text}}</p>
    </div>
  </div>
</template>

<script>
import TerminalInput from './TerminalInput';
export default {
  name: "terminal-log",
  components: { TerminalInput },
  props: {
    content: Array
  }
}
</script>

<style lang="sass" scoped>
.terminal-log
  .terminal-input, p
    margin: 0
    white-space: pre-wrap
</style>
<template>
  <div class="terminal" @click="focusTerminalInput()">
    <div class="window-action-bar">
      <p class="title">Terminal</p>
    </div>
    <main class="content-area" ref="terminal-content">
      <terminal-log :content="log" />
      <terminal-input 
        v-if="runningCommand == null" 
        ref="terminal-input"
        :path="path"
        @submit="runCommand" 
      />
    </main>
  </div>
</template>

<script>
import TerminalInput from './TerminalInput';
import TerminalLog from './TerminalLog';

export default {
  name: 'terminal',
  components: { TerminalInput, TerminalLog },
  data: () => ({
    log: [
      { 
        type: 'COMMAND_OUTPUT', 
        text: 
          "\tThis is a simulation of a terminal where you can learn basic terminal " +
          "functionalities.\n" +
          "\tHere you can learn how to create folders, move through them, look at files, run " +
          "programs and all sorts of stuff. There's a lot that can be done through the " +
          "terminal!\n" +
          "\tTo learn more, type 'start' down below and press Enter."
      }
    ],
    path: "C:/Users/You",
    input: "",
    runningCommand: null
  }),
  methods: {
    focusTerminalInput(){
      const terminalInput = this.$refs["terminal-input"].$refs.input;
      terminalInput.focus();
    },
    scrollToBottom(){
      const terminalContent = this.$refs["terminal-content"];
      terminalContent.scrollTo(0, terminalContent.scrollHeight);
    },
    addLog(type, text, args){
      this.log.push({ path: this.path, type, text, args });
    },
    buildShell(){
      return {
        getPath: () => this.path,
        setPath: newPath => this.path = newPath,
        print: text => this.addLog('COMMAND_OUTPUT', text),
        clear: () => this.log.splice(0, this.log.length)
      }
    },
    runCommand(input){

      const [command, ...args] = input.split(' ');

      this.addLog('COMMAND', input);
      this.runningCommand = command;

      try {
        const commandFn = require("../commands/" + command).default;
        commandFn(this.buildShell(), args);
      } catch (e){
        console.error(e);
        this.addLog('COMMAND_OUTPUT', `Command "${command}" not found.`);
      }
      
      this.runningCommand = null;

      // wait until DOM updates with the new terminal logs and then scroll to bottom.
      // This ensures that if a command makes content overflow the terminal container, the
      // user doesn't need to scroll manually to the bottom of it, which is default behavior in the
      // terminal as far as I've seen
      this.$nextTick(this.scrollToBottom);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.terminal
  display: flex
  flex-direction: column

  flex-grow: 1

  font-family: "Fira Code", monospace
  font-size: 1em
  letter-spacing: 1.3px
  
  background: #1b1b1b
  color: #e2e2e2

  .window-action-bar
    display: inherit
    background: #4b4b4b
    align-items: center
    .title
      color: #41ff33
      margin: 0
      padding: .5em 0 .5em 1em
      font-weight: bold
  
  .content-area
    display: flex
    flex-direction: column
    flex-grow: 1
    max-height: 90vh
    overflow-y: auto
    font-size: .8em
    background: inherit
    padding: .5em 1em
    white-space: pre-wrap
</style>

<template>
  <div class="terminal-input">
    <p class="input-preffix">{{path}}&gt;</p>
    <textarea 
      ref="input" 
      :disabled="disabled"
      autofocus
      rows="1" 
      resize="none" 
      :value="input" 
      @keydown="preventDefaultOnEnter($event)"
      @input="updateInput($event)" 
      :style="`height: ${height}`"
    />
  </div>
</template>

<script>
export default {
  name: "terminal-input",
  props: {
    path: String,
    value: String,
    disabled: Boolean
  },
  data(){
    return {
      input: this.value || "",
      height: "auto"
    };
  },
  mounted(){
    window.addEventListener("resize", this.resizeToRemoveScrollbar);
  },
  beforeDestroy(){
    window.removeEventListener("resize", this.resizeToRemoveScrollbar);
  },
  methods: {
    preventDefaultOnEnter(event){
      if (event.key === 'Enter'){
        event.preventDefault();
        this.$emit("submit", this.input);
        this.input = "";
      }
    },
    resizeToRemoveScrollbar(){

      let textarea = this.$refs.input;

      // Resets height to "auto" so that textarea can go back to default behavior (adding vertical
      // scrollbar on text overflow), then waiting for DOM to update so that the element can resize
      // to its ideal height, without a scrollbar. This allows the resizing to happen both by adding
      // height when content is overflowing *and* removing some height when content is taken away
      this.height = "auto";
      this.$nextTick(() => {
        this.height = textarea.scrollHeight + "px";
      });

    },
    updateInput(event){
      this.input = event.target.value;
      this.resizeToRemoveScrollbar();
    }
  }
}
</script>

<style scoped lang="sass">
.terminal-input
  display: flex
  align-items: baseline
  .input-preffix
    color: #70f1ff
    margin: 0 4px 0 0
  textarea
    box-sizing: border-box
    width: 100%
    resize: none
    font-family: inherit
    font-size: inherit
    color: inherit
    background: none
    outline: none
    border: none
</style>
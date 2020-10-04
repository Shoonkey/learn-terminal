- Figure out how to create a entertaining but still believable command prompt experience, as this would be a tool for terminal beginners.
  - Maybe add some preliminar text to simulate some loading and preparing; maybe actually have some preparing done on some sort of back-end.
  
- How to implement the terminal look, still allowing for user input in an accessible way? Inline inputs with no styling, text areas or a big `contenteditable` box?
  - Probably inline inputs with no styling so as to make use of the accessibility tools already present in the browser for them. There'd just be a need for some tweaks, like submitting on Enter instead of a button click and stuff like that.

- How to build it in such a way that it has an API of its own so that other coders can easily contribute with more commands to add to the learning process?
  - It'd probably need to be divided into sorts of terminal, because of differences between Bash, Command Prompt and PowerShell, for example.
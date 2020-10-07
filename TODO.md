- Figure out how to create a entertaining but still believable command prompt experience, as this would be a tool for terminal beginners.
  - Maybe add some preliminar text to simulate some loading and preparing; maybe actually have some preparing done on some sort of back-end.

- How to build it in such a way that it has an API of its own so that other coders can easily contribute with more commands to add to the learning process?
  - It'd probably need to be divided into sorts of terminal, because of differences between Bash, Command Prompt and PowerShell, for example.
  
- Pending fixes
  - Selecting a text in the terminal does not have default behavior. Instead of staying selected after releasing the mouse button, the focus is taken back to the terminal input
  - With the new file system update, trying to cd into a file results in an infinite loop at exactly the reassignment of the current working directory
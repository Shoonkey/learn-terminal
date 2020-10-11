export default function start(shell, args){

  if (args[0] == '/?'){
    shell.print(
      "\tThis is the first command of the tutorial. Running it will take you to the very start!"
    );
    return;
  }

  shell.print(
    "\tEverything you write into a terminal is a command, that is processed once you press " +
    "Enter.\n" +
    "\tThe terminal is essentially an access to the command center of your operating system; " +
    "on Linux, it's called Bash, on Mac it's called Terminal and on Windows there are the " +
    "Command Prompt (the most famous one) and PowerShell. There are other options but these are " +
    "the main native ones.\n" +
    "\tEach one of them has its peculiarities as to how things are written and processed, but " +
    "they all allow you to navigate through the system at the most basic level, usually without " +
    "any UI at all, just through commands. 'tutorial' itself was a command you just typed into " +
    "the terminal, with 'start' as an argument. An argument is a piece of information that gives " +
    "more context to a command; in this case, it told the tutorial to start from the beginning.\n" +
    "\tEnter 'tutorial dir' to continue.\n"
  );

}
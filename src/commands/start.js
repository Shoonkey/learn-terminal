export default function help(shell){

  shell.print(
    "\tEverything you write into a terminal is a command, that is processed once you press " +
    "Enter.\n" +
    "\tSo, the terminal is essentially an access to the command center of your operating system; " +
    "on Linux, it's called Bash, on Mac it's called Terminal and on Windows there are two " +
    "options: Command Prompt and PowerShell.\n" +
    "\tEach one of them has its peculiarities as to how things are written and processed, but " +
    "they all allow you to navigate through the system at the most basic level, usually without " +
    "any UI at all, just through commands. 'help' itself was a command you just typed into the " +
    "terminal!\n" +
    "\tSo let's begin the journey by taking a look at some commands. The first one will be " +
    "'dir'. Try typing it down below. Can you figure out what it does?\n" +
    "\tWhen you're done, you can type the command 'dir /?' to continue."
  );

}
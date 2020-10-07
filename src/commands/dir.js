export default function dir(shell, args){

  if (args[0] === "/?"){
    shell.print(
      "\t'dir' is a command that's responsible for listing the [dir]ectories (folders) and files " +
      "inside the folder you're currently in, which is indicated by the text before '>' in the " +
      "terminal.\n\n" +
      "\tWhat you just did was you ran the 'dir' command with '/?' as an argument for it. This " +
      "is usually how you get to see a command explained specifically on Windows. Using Bash on " +
      "Linux, for example, you'd type 'ls' for the same effect as 'dir', and 'ls --help' for the " +
      "same effect as 'dir /?' on Windows.\n" +
      "\tNow let's take a look at 'cd'. It's a very useful command that allows us to navigate " +
      "through our files. Combining 'dir' and 'cd' can make for an experience pretty much like a " +
      "file explorer in its simplest form. Essentially, this command lets you [c]hange the " +
      "[d]irectory you're in, allowing you to go back to previous (parent) directories or " +
      "deeper into inner folders.\n"
    );
    return;
  }

  const cwdItems = shell.getFileSystem().getContentList();
  shell.print(cwdItems.map(item => `\t${item}`).join('\n'));

}
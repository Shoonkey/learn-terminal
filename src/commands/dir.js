export default function dir(shell, args){

  if (args[0] === "/?" || args[0] == '--help'){
    shell.print(
      "\t'dir' (or 'ls' in Bash) is a command responsible for listing information about the " +
      "current [dir]ectory (folder), which is indicated by the text before '>' in the terminal. " +
      "Beyond listing the names of files and folders within the current folder, it can also list " +
      "the time of the last update, file size and things like that.\n" +
      "\tYou'll usually see '.' and '..' listed among the folders and files. These have to do with " +
      "how the structure is defined. '..' is the parent directory, the folder that contains the " +
      "one you're currently in, and '.' is a reference to the current directory itself. These " +
      "symbols are useful when dealing with relative paths, which is a concept that will be " +
      "explained in the next lesson."
    );
    return;
  }

  const cwdItems = shell.getFileSystem().getContentList();
  shell.print(cwdItems.map(item => `\t${item}`).join('\n'));

}
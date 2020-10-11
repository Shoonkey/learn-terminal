export default function cd(shell, args){

  if (args[0] === '/?' || args[0] == '--help'){
    shell.print(
      "\t'cd' is a useful command for switching between directories. Using it you can go back up " +
      "to parent directories or keep going further down the file system.\n"
    );
    return;
  }

  // const targetPath = args[0];
  // shell.getFileSystem().moveTo(targetPath);

  shell.print("\tcd not yet implemented");

}
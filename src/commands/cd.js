export default function cd(shell, args){

  if (args[0] === '/?'){
    shell.print(
      "\t'cd' is a useful command for switching between directories. Using it you can go back up " +
      "to parent directories or keep going further down the file system.\n"
    );
    return;
  }

  const targetPath = args[0];

  // TODO: Validate if target path is reachable from the current shell path.
  // This will probably be a good excuse to build a procedural fake filesystem generator that
  // changes the disposition of folders and files inside the terminal every session and is
  // navigatable (i.e. every file has no children and thus is not cd-able into, every folder has at
  // least an empty set associated to it so it is cd-able into)

  // TODO: Ensure path is readable (remove trailing slashes, properly calculate '..'s in path etc.)

  shell.setPath(shell.getPath() + targetPath);

}
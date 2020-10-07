

class FileSystem {

  constructor(rootFolder){
    this.root = rootFolder;
    this.cwd = rootFolder;
  }

  // This backtracks from the current working directory node up to the root to calculate the whole
  // path that is shown in the terminal. It's needed because each node only contains its name, 
  // content and a parent reference; adding the path from root to each node would greatly increase
  // how much storage this file system abstraction would take
  getCurrentPosition(){
    let node = this.cwd;
    let str = node.name;

    while (node.parent != null){
      node = node.parent;
      str = node.name + "/" + str;
    }
    
    return str;
  }

  moveTo(path){

    
    // If the folder at `path` does exist
    const folderAtPath = this.cwd.getItem(path);

    // TODO: Prevent this assignment from creating an infinite loop
    if (folderAtPath)
      this.cwd = folderAtPath;
  }

  getContentList(){
    return this.cwd.content;
  }

}

export default FileSystem;
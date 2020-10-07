export function capitalized(string){
  return string[0].toUpperCase() + string.substring(1);
}

export function validateItemType(type){
  if (["folder", "file"].indexOf(type) === -1)
    throw new Error(`Invalid item type "${type}"`);
}

export function validateFolderName(folderName){
  if (folderName.indexOf("/") !== -1)
    throw new Error("Folder names cannot contain slashes (/)");
}

// Makes sure the format of paths are uniform across functions. Transforms paths with folders to be
// "folder1/folder2/folder3" (no slash in the beginning or in the end; slashes are separators)
export function formatPath(path){

  const firstSlashIdx = path.indexOf("/");

  // If there's no slash, 
  if (firstSlashIdx === -1)
    return path;
  
  if (path[0] === '/')
    path = path.substring(1);
  if (path[path.length - 1] === '/')
    path = path.substring(0, path.length - 1);

  return path;

}
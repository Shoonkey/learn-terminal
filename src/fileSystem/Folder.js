import Item from './Item';
import { formatPath, validateFolderName } from './util';

class Folder extends Item {

  constructor(folderName){
    validateFolderName(folderName);
    super("folder", folderName, []);
  }

  toString(){
    return this.name + "/";
  }

  addItem(item){
    this.content.push(item);
    item.parent = this;
  }
  
  getItem(itemPath){
    
    itemPath = formatPath(itemPath);

    const firstSlashIdx = itemPath.indexOf("/");

    // The path indicates nested content. That means that even though we may be looking for a file,
    // at the current level of depth we're looking for a folder
    if (firstSlashIdx !== -1){
      const folderToLookFor = itemPath.substring(0, firstSlashIdx);
      return this.getItem(folderToLookFor);
    }

    const item = this.content
      .find(item => item.name === itemPath);

    if (!item)
      throw new Error(`Item "${itemPath}" does not exist in ${this.name}/`);
    
    return item;

  }

  removeItem(itemName){

    const targetFileIdx = this.content
      .findIndex(item => item.name === itemName);

    if (targetFileIdx === -1)
      throw new Error(`Item "${itemName}" not found`);
    
    this.content.splice(targetFileIdx, 1);
  
  }

}

export default Folder;
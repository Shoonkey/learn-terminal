import Item from './Item';

class File extends Item {

  constructor(filename, content = ""){
    super("file", filename, content);
  }

}

export default File;
class Item {
  constructor(type, name, content){
    this.type = type;
    this.name = name;
    this.content = content;
    this.parent = null;
  }

  toString(){
    return this.name;
  }

}

export default Item;
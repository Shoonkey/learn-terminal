import Folder from './Folder';
import File from './File';
import FileSystem from './FileSystem';

const root = new Folder("C:");

// Adding some basic Win-style files
["Program Files", "Program Files (x86)", "temp", "ProgramData", "Windows"]
  .forEach(folderName => root.addItem(new Folder(folderName)))

const easterEggFile = new File("potato.txt", "You have found an easter egg. Congrats! :D");

const yourFolder = new Folder("You");
yourFolder.addItem(easterEggFile);

const usersFolder = new Folder("Users");
usersFolder.addItem(yourFolder);

root.addItem(usersFolder);

const fs = new FileSystem(root);
// fs.moveTo("/Users/You");

export default fs;
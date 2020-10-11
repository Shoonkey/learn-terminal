function getPromptCommand(command){
  switch (command){
    case "clear":
      return "cls";
    case "ls":
      return "dir";
    default:
      return command;
  }
}

export function runCommandModule(command, shellInstance, args){

  let promptCommand = getPromptCommand(command);

  try {
    const { default: commandModule } = require("../commands/" + promptCommand);
    commandModule(shellInstance, args);
  } catch (e) {
    throw new Error(`Unable to find command module for "${command}"`);
  }

}
export default function tutorial(shell, args){

  if (args[0] === '/?' || args[0] == '--help'){
    shell.print(
      "\t'tutorial' is the command used to move through the tutorial lessons, usually alongside " +
      "a few parameters to define on which step you are :D"
    );
    return;
  }

  const [command, ...commandArgs] = args;

  try { 
    const { default: commandFunction } = require("./" + command); 
    commandFunction(shell, commandArgs);
  } catch (e){
    console.error(e);
    shell.print(`"${command}" does not match any tutorial step`);
  }

}
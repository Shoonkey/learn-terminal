export default function clear(shell, args){

  if (args[0] === "/?"){
    shell.print(
      "\t'clear' is a command responsible for clearing the terminal screen. It's useful to get a " +
      "fresh space to work from without restarting the whole terminal program."
    );
    return;
  }

  shell.clear();

}
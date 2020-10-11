export default function cls(shell, args){

  if (args[0] === "/?" || args[0] == '--help'){
    shell.print(
      "\t'cls' (or 'clear' in Bash) is a command responsible for [cl]earing the terminal " + 
      "[s]creen. It's useful to get a fresh space to work from without restarting the whole " + 
      "terminal program."
    );
    return;
  }

  shell.clear();

}
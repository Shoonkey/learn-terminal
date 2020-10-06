export default function cls(shell, args){

  if (args[0] === "/?"){
    shell.print(
      "\t'cls' is a command responsible for [cl]earing the terminal [s]creen. It's useful to get " +
      "a fresh space to work from without restarting the whole terminal program. In Bash, the " +
      "equivalent command is 'clear'"
    );
    return;
  }

  shell.clear();

}
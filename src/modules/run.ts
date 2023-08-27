import { CommandCaller, hookOptions } from "./command";
import { spawn } from "child_process";

export default async (command: CommandCaller) => {
  if (typeof command === "function") return await command();
  if (typeof command !== "string")
    return console.error(
      `command must be a function or a string.  Recieved type ${typeof command}`
    );

  await new Promise(() => {
    spawn(command, {
      shell: true,
      stdio: "inherit",
    });
  });
};

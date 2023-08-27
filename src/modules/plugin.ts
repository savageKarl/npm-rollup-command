import type { InputOptions } from "rollup";
import { dataTypes } from "savage-data-types";

import { hookOptions, CommandCaller, defaultHookOptions } from "./command";
import run from "./run";

export const rollupCommand = (
  command: CommandCaller | CommandCaller[],
  options?: hookOptions
) => {
  options = Object.assign({}, defaultHookOptions, options);

  const runCommand = () => {
    if (Array.isArray(command)) {
      command.forEach((v) => {
        run(v);
      });
    } else {
      run(command);
    }
  };

  return {
    name: "savage-rollup-command",
    options(o: InputOptions) {
      runCommand();
      options?.options(o);
      return o;
    },
    buildStart() {
      runCommand();
      options?.buildStart();
    },
    buildEnd() {
      runCommand();
      options?.buildEnd();
    },
  };
};

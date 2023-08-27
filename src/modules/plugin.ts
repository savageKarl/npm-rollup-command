import type { InputOptions } from "rollup";

import { hookOptions, defaultHookOptions } from "./command";
import { runCommand } from "./run";

export const rollupCommand = (options?: hookOptions) => {
  options = Object.assign({}, defaultHookOptions, options);

  return {
    name: "savage-rollup-command",
    options(o: InputOptions) {
      options?.options(o, runCommand);
      return o;
    },
    buildStart() {
      options?.buildStart(runCommand);
    },
    buildEnd() {
      options?.buildEnd(runCommand);
    },
  };
};

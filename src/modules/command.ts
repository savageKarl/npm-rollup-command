import type { InputOptions } from "rollup";

import { Run } from "./run";

export type CommandCaller = string | Function;
/** rollup插件的构建阶段执行的钩子 */
export type hookOptions = {
  options?: (options: InputOptions, run: Run) => InputOptions | null;
  buildStart?: (run: Run) => void;
  buildEnd?: (run: Run) => void;
};

export const defaultHookOptions: hookOptions = {
  options(options) {
    return options;
  },
  buildStart() {},
  buildEnd() {},
};

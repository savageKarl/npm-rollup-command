import type { InputOptions } from "rollup";

export type CommandCaller = string | Function;
export type hookOptions = {
  options: (options: InputOptions) => InputOptions | null;
  buildStart: () => void;
  buildEnd: () => void;
};

export const defaultHookOptions: hookOptions = {
  options(options) {
    return options;
  },
  buildStart() {},
  buildEnd() {},
};

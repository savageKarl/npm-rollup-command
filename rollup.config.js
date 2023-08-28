import pkg from "./package.json" assert { type: "json" };

import { getRollupConfig } from "savage-rollup-config";

export default getRollupConfig(pkg, function (options) {
  // The project uses a unified savage-rollup-config configuration, which imports the current plugin by default. Therefore, the default configuration for this development plugin project needs to be excluded
  const currentPluginIndex = options[0].plugins.findIndex((v, i) => {
    return v.name === "savage-rollup-command";
  });
  options[0].plugins.splice(currentPluginIndex, 1);

  return options;
});

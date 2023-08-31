import type { InputOptions, OutputOptions, OutputChunk } from "rollup";

import del from "del";

import { hookOptions, defaultHookOptions, IContext } from "./command";
import { runCommand } from "./run";

const context: IContext = {
	run: runCommand,
	del,
};

export const rollupCommand = (hookOptions?: hookOptions) => {
	const mergedOptions = Object.assign(
		{},
		defaultHookOptions,
		hookOptions
	) as Required<hookOptions>;

	return {
		name: "savage-rollup-command",
		options(options: InputOptions) {
			mergedOptions.options(context, options);
			return options;
		},
		buildStart() {
			mergedOptions.buildStart(context);
		},
		buildEnd() {
			mergedOptions.buildEnd(context);
		},
		outputOptions(options: OutputOptions) {
			mergedOptions.outputOptions(context, options);
		},
		renderStart(outputOptions: OutputOptions, inputOptions: InputOptions) {
			mergedOptions.renderStart(context, outputOptions, inputOptions);
		},
		writeBundle(options: OutputOptions, bundle: OutputChunk) {
			mergedOptions.writeBundle(context, options, bundle);
		},
		closeBundle() {
			mergedOptions.closeBundle(context);
		},
	};
};

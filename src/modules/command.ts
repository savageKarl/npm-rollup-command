import type { InputOptions, OutputOptions, OutputChunk } from "rollup";

import del from "del";

import { Run } from "./run";

export type CommandCaller = string | Function;

/** provide some powerful api */
export interface IContext {
	/** be use to execute command by custom */
	run: Run;
	/** be use to del any file or folder by del lib */
	del: typeof del;
}

export type hookOptions = {
	/** build phase: the fist running hook */
	options?: (context: IContext, options: InputOptions) => void;
	/** build phase: the second running hook */
	buildStart?: (context: IContext) => void;
	/** build phase: the last running hook */
	buildEnd?: (context: IContext) => void;

	/** Output Generation phase: the fist running hook */
	outputOptions?: (context: IContext, options: OutputOptions) => void;
	/** Output Generation phase: the second running hook */
	renderStart?: (
		context: IContext,
		outputOptions: OutputOptions,
		inputOptions: InputOptions
	) => void;
	/** Output Generation phase: the penultimate running hook */
	writeBundle?: (
		context: IContext,
		options: OutputOptions,
		bundle: OutputChunk
	) => void;
	/** Output Generation phase: the last running hook */
	closeBundle?: (context: IContext) => void;
};

export const defaultHookOptions: hookOptions = {
	options() {},
	buildStart() {},
	buildEnd() {},
	outputOptions() {},
	renderStart() {},
	writeBundle() {},
	closeBundle() {},
};

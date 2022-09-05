import { dimension } from "./dimension";

export interface IChair {
	name: string;
	width: number;
	height: number;
	depth: number;
	getDimensions(): dimension;
}

export default class Chair implements IChair {
	name = "";
	width = 0;
	height = 0;
	depth = 0;

	getDimensions(): dimension {
		return {
			width: this.width,
			height: this.height,
			depth: this.depth,
		};
	}
}

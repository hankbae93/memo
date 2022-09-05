import Chair from "./Chair";

export default class BigChair extends Chair {
	constructor() {
		super();
		this.width = 80;
		this.height = 80;
		this.depth = 80;
	}
}

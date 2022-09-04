import SmallChair from "./small-chair";
import BigChair from "./big-chair";
import MediumChair from "./medium-chair";
import Chair from "./chair";

type ChairType = "Big" | "Medium" | "Small" | "";

export default class ChairFactory {
	static getChair(chair: ChairType): Chair {
		switch (chair) {
			case "Big":
				return new BigChair();
			case "Medium":
				return new MediumChair();
			case "Small":
				return new SmallChair();

			default:
				return new Chair();
		}
	}
}

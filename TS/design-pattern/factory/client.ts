import ChairFactory from "./chair-factory";

const CHAIR = ChairFactory.getChair("");
const BIG_CHAIR = ChairFactory.getChair("Big");
console.log(CHAIR.getDimensions()); // { width: 0, height: 0, depth: 0 }
console.log(BIG_CHAIR.getDimensions()); // { width: 80, height: 80, depth: 80 }

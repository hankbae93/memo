export class Singleton {
	static instance: Singleton;
	id: number;

	constructor(id: number) {
		this.id = id;
		if (Singleton.instance) {
			return Singleton.instance;
		}
		Singleton.instance = this;
	}
}

const OBJECT1 = new Singleton(1);
const OBJECT2 = new Singleton(2);

console.log(OBJECT1 === OBJECT2);
console.log(OBJECT1.id); // returns 1
console.log(OBJECT2.id); // returns 1

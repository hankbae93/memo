import { FactoryA, IProductA } from "./factory-a";
import { FactoryB, IProductB } from "./factory-b";

interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
	static createObject(factory: string): IProduct | undefined {
		try {
			if (["aa", "ab", "ac"].some((factoryType) => factoryType === factory)) {
				return FactoryA.getObject(factory[1]);
			}
			if (["ba", "bb", "bc"].some((factoryType) => factoryType === factory)) {
				return FactoryB.getObject(factory[1]);
			}
			throw new Error("No Factory Found");
		} catch (e) {
			console.log(e);
		}
	}
}

let product = AbstractFactory.createObject("ab");
console.log(product);

product = AbstractFactory.createObject("bc");
console.log(product);

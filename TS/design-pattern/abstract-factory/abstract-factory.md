# abstract-factory

추상 팩토리 패턴은 여러 다른 생성 패턴 구현 위에 추상화 계층을 추가합니다.

우선은 `Factory`를 반환할 수 있는 Factory라고 생각하면 됩니다.

## `Concepts`

```ts
export interface IProductA {
	name: string;
}

class ConcreteProduct implements IProductA {
	name = "";
}

class ConcreteProductA extends ConcreteProduct {
	constructor() {
		super();
		this.name = "FactoryA:ConcreteProductA";
	}
}

class ConcreteProductB extends ConcreteProduct {
	constructor() {
		super();
		this.name = "FactoryA:ConcreteProductB";
	}
}

class ConcreteProductC extends ConcreteProduct {
	constructor() {
		super();
		this.name = "FactoryA:ConcreteProductC";
	}
}

export class FactoryA {
	static getObject(some_property: string): IProductA {
		try {
			if (some_property === "a") {
				return new ConcreteProductA();
			} else if (some_property === "b") {
				return new ConcreteProductB();
			} else if (some_property === "c") {
				return new ConcreteProductC();
			} else {
				throw new Error("Class Not Found");
			}
		} catch (e) {
			console.log(e);
		}
		return new ConcreteProduct();
	}
}
```

팩토리 패턴의 class로 A 공장, B 공장을 생성하였습니다.

```ts
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
console.log(product); // ConcreteProductB { name: 'FactoryA:ConcreteProductB' }

product = AbstractFactory.createObject("bc");
console.log(product); // ConcreteProductC { name: 'FactoryB:ConcreteProductC' }
```

첫글자가 a면 FactoryA 공장에서 객체를 요청하고 b면 FactoryB 공장에서 요청할 것입니다.

## `Case`

인터페이스는 같지만 다른 역할들의 객체들을 요청한다면 공장을 한번 더 추상화해서

공장을 요청할 공장을 만들어내어 역할을 담당하게 하는 것도 괜찮습니다.

여기서 `Abstract Factory`는 꼭 팩토리패턴의 모듈일 필요는 없습니다. 유연하게 다른 패턴을 반환하는데에도 사용됩니다.

```ts
// 의자 공장
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

// 테이블 공장
export default class TableFactory {
	static getTable(table: string): ITable {
		if (table === "BigTable") {
			return new BigTable();
		} else if (table === "MediumTable") {
			return new MediumTable();
		} else if (table === "SmallTable") {
			return new SmallTable();
		} else {
			throw new Error("No Table Found");
		}
	}
}
```

여기 같은 인터페이스지만 다른 객체인 공장이 두개 있습니다. 이제 의자, 테이블을 요청할 가구 공장을 작성해보겠습니다.

```ts
// Abstract Furniture Factory

import { IChair } from "./chair";
import ChairFactory from "./chair-factory";
import { ITable } from "./table";
import TableFactory from "./table-factory";

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory {
	static getFurniture(furniture: string): IFurniture | undefined {
		try {
			if (
				["SmallChair", "MediumChair", "BigChair"].some(
					(furnitureName) => furnitureName === furniture
				)
			) {
				return ChairFactory.getChair(furniture);
			}
			if (
				["SmallTable", "MediumTable", "BigTable"].some(
					(furnitureName) => furnitureName === furniture
				)
			) {
				return TableFactory.getTable(furniture);
			}
			throw new Error("No Factory Found");
		} catch (e) {
			console.log(e);
		}
	}
}
```

```ts
import FurnitureFactory from "./furniture-factory";

let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
/*
SmallChair
{ width: 40, height: 40, depth: 40 }
*/

FURNITURE = FurnitureFactory.getFurniture("MediumTable");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
/*
MediumTable
{ width: 60, depth: 60, height: 60 } 
*/
```

# factory 패턴

코드를 개발할 때 메서드나 클래스에서 직접 개체를 인스턴스화할 수 있습니다. 또한

개체 생성과 프로젝트에서 사용되는 위치 그 사이에 추가 추상화를 추가할 수 있습니다.

예를 들어 `Card`라는 객체가 있습니다.

```ts
interface Card {
	att: number;
	hp: number;
	name: string;
}

const Human: Card = {
	att: 10,
	hp: 100,
	name: "닝겐",
};
const Human2: Card = {
	att: 14,
	hp: 100,
	name: "닝겐2",
};
const Human3: Card & { skill: () => void } = {
	att: 12,
	hp: 100,
	name: "닝겐3",
	skill: () => console.log("매혹"),
};
```

직접 생성을 하면 카드의 기능이 추가될수록 만들기 어려워지는 걸 느낄 수 있습니다.

우리는 생성자의 역할을 담당하는 클래스를 만들어 생성자에게 객체를 요청하기만 하면 됩니다.

## factory concept

```ts
interface IProduct {
	name: string;
}

class ConcreteProduct implements IProduct {
	name = "";
}

class ConcreteProductA extends ConcreteProduct {
	constructor() {
		super();
		this.name = "ConcreteProductA";
	}
}
class ConcreteProductB extends ConcreteProduct {
	constructor() {
		super();
		this.name = "ConcreteProductB";
	}
}
class ConcreteProductC extends ConcreteProduct {
	constructor() {
		super();
		this.name = "ConcreteProductC";
	}
}

class Creator {
	static createObject(someProperty: string): IProduct {
		if (someProperty === "a") {
			return new ConcreteProductA();
		} else if (someProperty === "b") {
			return new ConcreteProductB();
		} else {
			return new ConcreteProductC();
		}
	}
}

const PRODUCT = Creator.createObject("b");
console.log(PRODUCT.name);
```

이제 클라이언트에서 직접 생성하지 않고 대신 공장에게 객체를 요청합니다.

## `case`

```ts
interface IChair {
	width: number;
	height: number;
	depth: number;
}

export default class Chair implements IChair {
	width = 0;
	height = 0;
	depth = 0;
}
```

의자를 생성하는 공장을 만들어보려합니다. 의자의 width, height, depth를 객체로 저장하고 리턴할 class입니다.

```ts
import Chair from "./Chair";

export default class BigChair extends Chair {
	constructor() {
		super();
		this.width = 80;
		this.height = 80;
		this.depth = 80;
	}
}
```

큰의자, 작은의자, 중간의자 3가지로 자주 쓰인다고 생각하여 Chair를 상속받는 클래스들을 작성합니다.

```ts
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
```

이제 의자를 생성하는 공장 클래스를 만들어 사용자가 의자타입만 입력한다면

의자를 마음껏 생산할 수 있게 됐습니다.

```ts
import { dimension } from "./dimension";

export interface IChair {
	width: number;
	height: number;
	depth: number;
	getDimensions(): dimension;
}

export default class Chair implements IChair {
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
```

```ts
import ChairFactory from "./chair-factory";

const CHAIR = ChairFactory.getChair("");
const BIG_CHAIR = ChairFactory.getChair("Big");
console.log(CHAIR.getDimensions()); // { width: 0, height: 0, depth: 0 }
console.log(BIG_CHAIR.getDimensions()); // { width: 80, height: 80, depth: 80 }
```

## `summary`

> The Factory Pattern defers the creation of the final object to a subclass.

> The Factory pattern is about inserting another layer/abstraction between instantiating an object and where in your code it is actually used.

> It is unknown what or how many objects you will need to be created until runtime.

> You want to localize knowledge of the specifics of instantiating a particular object to the subclass so that the client doesn't need to be concerned about the details.

> You want to create an external framework, that an application can import/reference, and hide the details of the specifics involved in creating the final object/product.

> The unique factor that defines the Factory pattern, is that your project now defers the creation of objects to the subclass that the factory had delegated it to.

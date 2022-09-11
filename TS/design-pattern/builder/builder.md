# Builder 패턴

빌더 패턴은 동일한 구성 프로세스를 사용하여 다른 표현을 생성할 수 있도록 복잡한 객체의 구성을 해당 표현과 분리하는 것을 목적으로 하는 생성 패턴입니다.

- 어떻게 클래스가 복잡한 객체를 다양하고 명시적인 표현으로 만들 수 있을까
- 어떻게 해야 클래스가 복잡한 객체를 만드는 과정을 단순하게 직관적이게 할 수 있을까

```ts
const a = new CharacterBuilder()
	.buildName("Hank")
	.buildSkill(() => console.log("샷건"))
	.build();
// { name: 'Hank', skill: () => console.log("샷건")}
```

빌더와 팩토리 패턴은 둘 다 런타임에 새 객체를 인스턴스화한다는 점에서 매우 유사합니다.

```ts
class CharacterDirector {
	static hankBuilder() {
		// 행크 빌더 디렉터
		return new CharacterBuilder()
			.buildName("Hank")
			.buildSkill(() => console.log("샷건 ==> DEATH"))
			.build();
	}
}

const HANK = CharacterDirector.hankBuilder();
console.log(HANK); // Character { name: 'Hank', skill: [Function (anonymous)] }

HANK.skill(); // 샷건 ==> DEATH
```

그리고 이 빌더 패턴은 위 코드와 같이 디렉터 패턴으로 한번 더 추상화해줄 수 있습니다.

## 사용 사례

```ts
export default class House {
	doors = 0;
	windows = 0;
	wallMaterial = "";
	buildingType = "";

	construction(): string {
		return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`;
	}
}
```

이런 형태의 객체 구조를 가진 House를 토대로 빌더를 만들어 다양한 집을 표현해보려고 합니다.

```ts
import House from "./house";

interface IHouseBuilder {
	house: House;
	setBuildingType(buildingType: string): this;
	setWallMaterial(wallMaterial: string): this;
	setNumberDoors(number: number): this;
	setNumberWindows(number: number): this;
	getResult(): House;
}

export default class HouseBuilder implements IHouseBuilder {
	house: House;

	constructor() {
		this.house = new House();
	}

	setBuildingType(buildingType: string): this {
		this.house.buildingType = buildingType;
		return this;
	}

	setWallMaterial(wallMaterial: string): this {
		this.house.wallMaterial = wallMaterial;
		return this;
	}

	setNumberDoors(number: number): this {
		this.house.doors = number;
		return this;
	}

	setNumberWindows(number: number): this {
		this.house.windows = number;
		return this;
	}

	getResult(): House {
		return this.house;
	}
}
```

빌더가 작성되었으니 이제 추상화에 맞춰 적절한 디렉터를 작성해줍시다.

```ts
import House from "./house";
import HouseBuilder from "./house-builder";

export default class HouseBoatDirector {
	static construct(): House {
		return new HouseBuilder()
			.setBuildingType("House Boat")
			.setWallMaterial("Wood")
			.setNumberDoors(6)
			.setNumberWindows(8)
			.getResult();
	}
}
```

```ts
// House Builder Example Code

import IglooDirector from "./igloo-director";
import CastleDirector from "./castle-director";
import HouseBoatDirector from "./houseboat-director";

const IGLOO = IglooDirector.construct();
const CASTLE = CastleDirector.construct();
const HOUSEBOAT = HouseBoatDirector.construct();

console.log(IGLOO.construction());
console.log(CASTLE.construction());
console.log(HOUSEBOAT.construction());
```

## 단점이나 고려해야 할 점

- 빌더를 활용함에 있어서 필수적인 요소나 옵셔널한 요소를 구분해주는 게 좋을 수 있습니다. 아니면 강제적으로 필수요소를 입력하게 하는 것도 구현해야 될 수 있습니다.

- 디자인패턴은 기본적으로 trade-off입니다. 추상화가 되어지고 관심사 분리가 되어질수록 파일이 늘어나는 것은 피할 수 없습니다.

- 위 디렉터 파일을 생산해내는 `Abstract Factory`를 추가하여 한번 더 추상화할 수 있습니다.

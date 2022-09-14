# Prototype 패턴

새로운 객체를 생성할 때 사용하고 싶거나 사용 가능한 것보다 더 많은 리소스가 필요할 때 유용합니다.

예를 들어 JavaScript에는 `Arrays`, `Dictionaries`, `Sets` 및 사용자가 생성한 모든 사용자 정의 개체 와 같은 변경 가능한 개체가 있습니다.

얕은 복사를 하면 메모리에 개체의 새로운 복사본을 만들지만 기본 데이터(배열의 요소들)은 복사되는 원래 배열/개체와 동일한 메모리 위치를 가리킵니다.

그래서 배열의 요소를 변경하면 원본이 바뀌어버립니다.

# Concept

```ts
interface IPrototype {
	clone(): this;
}

class MyClass implements IPrototype {
	field: number[];

	constructor(field: number[]) {
		this.field = field;
	}

	clone(): this {
		return Object.assign({}, this);
	}
}
```

기본적으로 복제를 요청한 개체를 얕은 복사합니다. MyClass 에서는 얕은 복사를 하는 clone 메소드를 구현해놨습니다.

```ts
// The Client
const OBJECT1 = new MyClass([1, 2, 3, 4]);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`); // OBJECT1: {"field":[1,2,3,4]}

const OBJECT2 = OBJECT1.clone(); // Clone
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`); // OBJECT2: {"field":[1,2,3,4]}

OBJECT2.field[1] = 101;

console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`);
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`);
/*
OBJECT2: {"field":[1,101,3,4]}
OBJECT1: {"field":[1,101,3,4]}
*/
```

얕은 복사가 필요한지 깊은 복사가 필요한지는 상황에 따라 다릅니다. 다만 한 개체에서

계속 새로운 개체를 생성하고 그 데이터와 메소드를 사용할 수 있으며 리소스도 아낄 수 있다는 것이 중요합니다.

전체를 깊은 복사하려면 `JSON.parse(JSON.stringify(this))`하면 되지만 개체가 복잡하고 클 수록 휠씬 느려질 수 있습니다.

## 사용 사례

```ts
import Document from "./document";

export default interface IProtoType {
	clone(mode: number): Document;
}
```

```ts
import ProtoType from "./iprototype";

export default class Document implements ProtoType {
	name: string;
	array: [number[], number[]];

	constructor(name: string, array: [number[], number[]]) {
		this.name = name;
		this.array = array;
	}

	clone(mode: number): Document {
		let array;
		if (mode === 2) {
			array = JSON.parse(JSON.stringify(this.array));
		} else {
			array = Object.assign([], this.array);
		}

		return new Document(this.name, array);
	}
}
```

name은 생성할 때 고유한 값을 갖고 array의 경우에는 계속 기존 개체를 참조하도록 설계되어 있습니다.

```ts
import Document from "./document";

const ORIGINAL_DOCUMENT = new Document("Original", [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
]);

console.log(ORIGINAL_DOCUMENT);
/*
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
}
*/

const copy1 = ORIGINAL_DOCUMENT.clone(1); // 얕은 복사
copy1.name = "Copy 1";
copy1.array[1][2] = 200;
console.log(copy1);
console.log(ORIGINAL_DOCUMENT);
/*
Document {
  name: 'Copy 1',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
*/

const copy2 = ORIGINAL_DOCUMENT.clone(1); // shallow copy
copy2.name = "Copy 2";
copy2.array[1] = [9, 10, 11, 12];
console.log(copy2);
console.log(ORIGINAL_DOCUMENT);
/*
array[1]의 원본 데이터를 아예 바꾸어버렸기 때문에 mode 1에서는 더이상 원본의 array[1]에 영향을 끼치지 않습니다.
Document {
  name: 'Copy 2',
  array: [ [ 1, 2, 3, 4 ], [ 9, 10, 11, 12 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
*/
const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2); // deep copy
DOCUMENT_COPY_3.name = "Copy 3";
DOCUMENT_COPY_3.array[1][0] = 1234;
console.log(DOCUMENT_COPY_3);
console.log(ORIGINAL_DOCUMENT);
/*
Document {
  name: 'Copy 3',
  array: [ [ 1, 2, 3, 4 ], [ 1234, 6, 200, 8 ] ]
}
Document {
  name: 'Original',
  array: [ [ 1, 2, 3, 4 ], [ 5, 6, 200, 8 ] ]
}
*/
```

- 다른 생성 패턴과 마찬가지로 Prototype은 런타임에 객체를 생성하는 데 사용됩니다.
- 특정 클래스를 호출하는 대신 기존 개체를 클래스 템플릿으로 사용하여 새 개체를 생성한다고 상상해 보십시오.
- 프로토타입을 생성하는 기능은 특정 개체 조합에 대해 많은 클래스를 생성할 필요가 없다는 것을 의미합니다. 특정 구성이 있는 하나의 개체를 만든 다음 복제하고 일부 요소를 변경한 다음 이 변경된 구성에서 다른 복제본을 만들고 계속해서 서로 약간 다른 많은 개체를 만들 수 있습니다.
- 프로토타입은 개체의 복사본을 만들고 싶지만 해당 복사본을 만드는 데 리소스가 많이 필요할 때도 유용합니다. 예를 들어 빌더 예제에서 새 하우스보트를 만들거나 이미 메모리에 있는 하우스보트에서 기존 하우스보트를 복제할 수 있습니다.
- 방법을 설계할 때 clone()얕은 복사 또는 전체 복사를 수행할 요소를 고려해야 합니다.

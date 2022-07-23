# any 타입 지양하기

```ts
let age: number;

age = "12" as any;
```

타입스크립트의 타입시스템은 코드에 타입을 조금씩 추가할 수 있으며 언제든지 타입 체커를 해제할 수 있습니다.

이 기능들의 핵심은 `any`타입입니다.

그러나 일부 특별한 경우를 제외하고는 any를 사용한다면 타입스크립트의 장점을 누릴 수 없습니다.

<br />

## `any 타입에는 타입 안전성이 없다.`

```ts
let age: number;

age = "12" as any;

age += 1;

console.log(age); // 121
```

`as any`를 사용하면 위 코드와 같이 string 타입을 할당하면서 타입체커는 number 타입으로 판단하는 일도 생겨버립니다.

<br />

## `any는 함수 시그니처를 무시한다.`

```ts
function calcAge(birthDate: Date): number {
	return birthDate.getTime();
}

let birthday: any = "1990-01-19";
console.log(calcAge(birthday));
// ~~ runtime 에러
// TypeError: birthDate.getTime is not a function
```

함수를 작성할 때는 약속된 타입의 입출력을 제공하고 반환합니다. 그러나 any 타입을 사용하면

시그니처를 무시하게 됩니다.

<br />

## `any 타입은 인텔리센스(언어 서비스)를 제공할 수 없다.`

```ts
let person: any = { first: "Hank", last: "Schrader" };

person. // 자동완성으로 속성이 나오지 않습니다.
```

```ts
interface Person {
	// first: string
	// 해당 인터페이스의 속성을 first에서 firstName으로 일괄 수정할때
	firstName: string;
	last: string;
}

const formatName = (p: Person) => `${p.firstName} ${p.last}`; // 적용
const formatNameAny = (p: any) => `${p.first} ${p.last}`; // 미적용
```

타입스크립트의 모토는 **확장 가능한 자바스크립트**입니다. 확장의 가장 중요한 부분은

언어서비스이지만 any 타입은 그런 부분을 적용할 수 없습니다.

<br />

## `any 타입은 리팩토링 때 버그를 감춥니다.`

```ts
interface ComponentProps {
	onSelectItem: (item: any) => void;
}

function renderSelector(props: ComponentProps) {
	return props.onSelectItem;
}

let selectedId: number = 0;

function handleSelectItem(item: any) {
	selectedId = item.id;
}

console.log(renderSelector({ onSelectItem: handleSelectItem }));
```

props로 넘겨줄 `onSelectItem` 함수를 리팩토링하려 합니다.

```ts
interface ComponentProps {
	onSelectItem: (item: number) => void;
}
```

selectedId에 저장하지 않고 item의 id를 바로 넘기게 변경했습니다.

`onSelectItem`의 매개변수는 number가 됐지만 `handleSelectItem`의 매개변수는 any라 타입체커를 통과하게 됩니다.

해당 에러는 런타임때나 되서야 발견될 것입니다.

<br/>

## `any 타입은 타입 설계 또한 감춥니다.`

때때로 객체의 수많은 속성 타입을 적기 귀찮아 any로 떼우게 된다면 앞으로 설계가 잘 되었는지 확인할 수 없게 됩니다..

또한 보통은 타입 체커가 실수를 잡아주어 코드의 신뢰도가 높아지는데

any로 인해 타입의 속성과 값과 타입을 개발자가 기억해야하는 불상사가 생길 것입니다.

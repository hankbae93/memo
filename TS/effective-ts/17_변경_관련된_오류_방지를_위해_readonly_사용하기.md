# 변경 관련된 오류 방지를 위해 readonly 사용하기

## `readonly`

```ts
const a: number[] = [1, 2, 3];
const b: readonly number[] = a;
const c: number[] = b;
// ~~ 'readonly number[]' 형식은 'readonly'이며 변경 가능한 형식 'number[]'에 할당할 수 없습니다.ts(4104)
```

- 배열의 요소를 읽을 수 있지만, 쓸 수는 없습니다.

- length를 읽을 수 있지만, 바꿀 수 없습니다.

- 배열을 변경하는 pop을 비롯한 다른 메서드를 호출할 수 없습니다.

readonly number[]는 number[]의 서브타입입니다.

변경 가능한 배열을 할당하는 것은 가능하지만 반대로 readonly 타입의 값을 할당하는 것은 불가능합니다.

<br/>

## `매개변수를 readonly로 선언할 때`

```ts
function arraySum(arr: readonly number[]) {
	let sum = 0,
		num;
	while ((num = arr.pop()) !== undefined) {
		// ~~ 'readonly number[]' 형식에 'pop' 속성이 없습니다.ts(2339)
		sum += num;
	}
	return sum;
}
```

타입스크립트는 매개 변수가 함수 내에서 변경이 일어나는지 체크합니다.

`호출하는 쪽에서는 함수가 매개변수를 변경하지 않는다는 보장을 받게 됩니다.`

또한 readonly를 사용하면 지역 변수와 관련된 모든 변경 오류를 방지할 수 있습니다.

<br />

## 유의할 점

```ts
interface Outer {
	inner: {
		x: number;
	};
}

const o: Readonly<Outer> = { inner: { x: 0 } };
o.inner = { x: 1 }; // ~~ 읽기 전용 속성이므로 'inner'에 할당할 수 없습니다.ts(2540)
o.inner.x = 2;
```

readonly는 `Readonly` 제네릭을 포함해서 객체의 깊은 복사는 지원되지 않습니다.

만들어 써도 되지만 `ts-essentials`에서 지원하는 DeepReadonly 제너릭을 사용하는 것을 추천합니다.

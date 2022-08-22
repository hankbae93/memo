# number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기

```ts
const x = {};
//Type 'number[]' cannot be used as an index type.
x[[1, 2, 3]] = 2;
console.log(x); // { '1,2,3': 2 }
```

배열은 객체이므로 키는 숫자가 아니라 문자열입니다. 자바스크립트 런타임은

속성이름으로 숫자를 사용해도 문자열로 변환합니다.

타입스크립트는 이러한 혼란을 바로잡기 위해 숫자 키를 허용하고

문자열 키와 다르게 인식합니다.

```ts
// [n: number]: T;
const a: Array<any> = [];

const b: ArrayLike<string> = ["1", "2", "3"];
const c: ArrayLike<string> = {
	0: "1",
	1: "2",
	2: "3",
	length: 3,
};
```

그래서 인덱스 시니쳐가 `number`로 표현되어 있다면 입력한 값도 number이여야겠지만

실제 런타임에서는 `string` 타입입니다.

보통은 Array, tuple, ArrayLike 등으로 대체합니다.

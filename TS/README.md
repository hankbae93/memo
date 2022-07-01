# parameter default

```ts
const addStrings = (str1: string, str2: string = ""): string =>
	`${str1} ${str2}`;
console.log(addStrings("HANKK"));
//
```

상황에 따라 옵셔널로 표시하지말고 확실한 기본값을 주는 것이 결과값에 영향을 안 끼칠 수 있다...

```ts
export const addStrings = (str1: string, str2?: string): string =>
	`${str1} ${str2}`;
console.log(addStrings("HANKK"));
//hakk undefined
```

예상치못한 결과가 나올 수 있다.

<br />

# Record

```ts
const ids: Record<number, string> = {
	10: "a",
	20: "b",
};

ids[30] = "c";
```

<br />

# Runtime vs CompileTime

```ts
export function getName(user: { first: string; last: string }): string {
	return `${user.first} ${user.last}`;
}
console.log(getName());
```

이 파일을 JS로 컴파일하고 실행하면 런타임에서 이런 에러를 확인할 수 있다.

```js
function getName(user) {
	return "".concat(user.first, " ").concat(user.last);
}
//  Cannot read properties of undefined (reading 'first')
```

타입스크립트는 결국 자바스크립트이기때문에 런타임에서 생기는 에러는 잡을 수 없다.

```ts
export function getName(user: { first: string; last: string }): string {
	return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
```

# 토스에서 보는 분리 요소 3가지

> 토스ㅣSLASH 22 - Effective Component 지속 가능한 성장과 컴포넌트

1. Headless 기반의 추상화

- 변하는 것과 변하지 않는 것

2. 한 가지 역할만 하기

- 또는 한가지의 역할만 하는 컴포넌트로 조합해서 구성하기

3. 도메인 분리하기

- 도메인을 포함하는 컴포넌트와 그렇지 않은 컴포넌트 분리하기

<br />

# 1. Headless 기반의 추상화

<img src="../../../docsImg/toss1.png" />

<br />

## `데이터 추상화`

```tsx
const Calendar = () => {
	const { headers, body } = useCalendar();
	// 달력 데이터에 관한 계산이나 read는 hooks로 분리

	return (
		// JSX에서는 순수하게 UI와 렌더링만
		<table>
			<thead>
				<tr>
					{headers.map((v, i) => (
						<th key={v + i}>{v}</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr>
					{body.map((v) => {
						return <td>{v}</td>;
					})}
				</tr>
			</tbody>
		</table>
	);
};

export default Calendar;
```

위 코드처럼 한 컴포넌트에서도 데이터에만 집중해서 그 부분을 모듈화하고 UI를 관심사에서 분리할 수 있다.

이런 패턴을 Headless라고 표현한다.

<br />

## `동작 추상화`

```tsx
function useAmazingButton() {
	return {
		onKeyDown: (e: React.KeyboardEvent) => console.log("onKeyDown"),
		onKeyUp: (e: React.KeyboardEvent) => console.log("onKeyUp"),
		onMouseDown: (e: React.MouseEvent) => console.log("onMouseDown"),
		onCilck: (e: React.MouseEvent) => console.log("onCilck"),
	};
}

const AmazingButton = () => {
	const amazingProps = useAmazingButton();

	return <Button {...amazingProps} />;
};

export default AmazingButton;
```

이번에도 hooks로 해당 동작들을 모듈화했다. 앞으로도 해당 액션들이 필요할 때는 어디서든 쓸 수 있을 것이다.

<br />

# 2. 한 가지 역할만 하기 [`Composition`]

<img src="../../../docsImg/toss2.png" />

```tsx

```

# Component Pattern

리액트 컴포넌트 하나에는 3가지 요소가 들어있다. 패턴들은 이 세가지 요소를 어떻게 다루는지에 관한 방법론들이다.

1. 사용자의 상효작용을 처리하는 UI 기능 개발(JS 등)
2. 데이터나 상호작용 결과를 시각화하는 렌더링 처리(마크업, CSS 등)
3. 비즈니스 로직, UI 기능, 렌더링 처리의 통합(React, Redux 등)

# `VAC`

    View Asset Component

View 컴포넌트에서 JSX 영역을 Props Object로 추상화하고, JSX를 VAC로 분리해서 개발하는 설계 방법

예시를 VAC 패턴으로 작성하는 방법을 봅시당.

```tsx
export default function Spinner() {
	const [value, setValue] = useState(0);

	return (
		<div>
			<button onClick={() => setValue(value - 1)}>-</button>
			<span>{value}</span>
			<button onClick={() => setValue(value + 1)}>+</button>
		</div>
	);
}
```

<br/>

## 1. Props Object 정의

```tsx
export default function Spinner() {
	const [value, setValue] = useState(0);
	// JSX를 추상화한 Props Object
	const props = {
		value,
		onDecrease: () => setValue(value - 1),
		onIncrease: () => setValue(value + 1),
	};

	// JSX의 유무는 중요하지 않음
	return <div></div>;
}
```

<br/>

## 2. JSX를 VAC로 분리

```tsx
import { SpinBoxViewPropsTypes } from "./vacTypes";

const SpinBoxView = ({
	value,
	onIncrease,
	onDecrease,
}: SpinBoxViewPropsTypes) => {
	return (
		<div>
			<button onClick={onDecrease}>-</button>
			<span>{value}</span>
			<button onClick={onIncrease}>+</button>
		</div>
	);
};
export default SpinBoxView;
```

그리고 부모컴포넌트에는 해당 props만 전달해준다.

```tsx
const Spinner = () => {
	const [value, setValue] = useState<number>(0);

	const props = {
		value,
		onDecrease: () => setValue(value - 1),
		onIncrease: () => setValue(value + 1),
	};

	return <SpinBoxView {...props} />;
};

export default Spinner;
```

<br/>

## 3. Props Object를 사용하는 이유

Props Object와 VAC를 사용하지 않고 직접 변수를 선언해 JSX 영역에서 UI 기능의 의존성을 줄이는 것도 가능합니다.

**`예상 단점`**

- UI 기능이 복잡해서 변수나 hook이 많을 때 어떤 것을 JSX에서 사용하는지 한눈에 파악하기가 어렵고 디버깅 하기가 번거롭다.

- View 컴포넌트 내에서 JSX를 관리하고 있어서 간단한 상태처리의 경우 무의식중에 JSX에서 바로 적용할 가능성이 있다.

`그럼에도 매력적인 것은 UI 개발자와 FE 개발자가 협업을 할 때 같은 파일을 건드리지 않기 때문에 서로 충돌이 나지 않는다는 점이다 `

```tsx
const SpinBox = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<button onClick={() => setValue(Math.max(value - 1, 0))}>-</button>
			// FE 개발자는 onDecrease의 로직을 바꿨고
			<span>{value}</span>
			<button className='round' onClick={() => setValue(value + 1)}>
				+
			</button>
			// UI 개발자는 버튼에 클래스를 추가햇다.
		</div>
	);
};
```

> 예상 결과는 당연 git conflict !! ☠️ !!

```tsx
// VAC 패턴
const Spinner = () => {
	const [value, setValue] = useState<number>(0);

	const props = {
		value,
		onDecrease: () => setValue(Math.max(value - 1, 0)), // 깔끔
		onIncrease: () => setValue(value + 1),
	};

	return <SpinBoxView {...props} />;
};
```

```tsx
const SpinBoxView = ({
	value,
	onIncrease,
	onDecrease,
}: SpinBoxViewPropsTypes) => {
	return (
		<div>
			<button onClick={onDecrease}>-</button>
			<span>{value}</span>
			<button className='round'// 깔끔 onClick={onIncrease}>
				+
			</button>
		</div>
	);
};
export default SpinBoxView;
```

그리고 이 부분은 테스팅 코드를 짜면서도 큰 도움이 될것이라고 예상됩니다.
예로 들어 UI가 잘 동작하는지 확인할 때 테스팅 코드에서 Props Object만 목킹해서 Props로 전달하기만 하면 될 것입니다.

<br />

## **4. 잘못된 VAC 적용 예시**

```tsx
const SpinBox = () => {
	const [value, setValue] = useState(0);

	const props = {
		value,
		step: 1,
		handleClick: (n) => setValue(n),
	};

	// VAC에서 value를 제어하는 행위에 관여
	return <SpinBoxView {...props} />;
};
```

```tsx
// VAC
const SpinBoxView = ({ value, step, handleClick }) => (
	<div>
		<button onClick={() => handleClick(value - step)}>-</button>
		<span>{value}</span>
		<button onClick={() => handleClick(value + step)}>+</button>
	</div>
);
```

다음과 같이 View 컴포넌트의 기능이나 상태 제어에 VAC가 관여해서는 안됩니다.

그러나 이런 케이스가 꽤나 있기 때문에 Hooks나 useCallback을 활용하는 것을 추천드립니다.

```tsx
const Spinner = () => {
	const [value, setValue] = useState<number>(0);
	const step = useRef<number>(1);

	const handleClick = (n: number) => setValue(n);

	const onDecrease = useCallback(() => {
		handleClick(value - step.current);
	}, [value]);

	const onIncrease = useCallback(() => {
		handleClick(value + step.current);
	}, [value]);

	const props = {
		value,
		onDecrease,
		onIncrease,
	};

	return <SpinBoxView {...props} />;
};

export default Spinner;
```

<br/>

## 5. 렌더링에 직관적인 상태 관리

SpinBox 기능이 0 ~ 10 범위만 사용하도록 증가 감소 버튼의 disabled 상태를 처리한다고 가정해봅시다.

```tsx
const SpinBox = () => {
	const [value, setValue] = useState(0);

	const props = {
		value,
		disabledDecrease: value < 1,
		disabledIncrease: value > 9,
		onDecrease: () => setValue(value - 1),
		onIncrease: () => setValue(value + 1),
	};

	// JSX를 VAC로 교체
	return <SpinBoxView {...props} />;
};
```

```tsx
const SpinBoxView = ({
	value,
	disabledDecrease,
	disabledIncrease,
	onIncrease,
	onDecrease,
}) => (
	<div>
		<button disabled={disabledDecrease} onClick={onDecrease}>
			-
		</button>
		<span>{value}</span>
		<button disabled={disabledIncrease} onClick={onIncrease}>
			+
		</button>
	</div>
);
```

<br />

## 6. Presentational 컴포넌트와 VAC

**Presentational 컴포넌트**

- 비즈니스 로직과 View의 관심사 분리가 목적
- Container 컴포넌트에서 비즈니스 로직을 관리하고 Presentational 컴포넌트를 제어
- `Presentational 컴포넌트는 View 로직(UI 기능, 상태 관리)과 렌더링을 담당`

**VAC**

- `View 로직(UI 기능, 상태 관리)과 렌더링(JSX)의 관심사 분리가 목적`
- View 컴포넌트가 VAC의 Container 컴포넌트 역할을 하며 JSX를 추상화한 Props Object를 관리하여 VAC를 제어
- VAC는 JSX, Style을 관리하여 렌더링 처리

[참고자료](https://wit.nts-corp.com/2021/08/11/6461)

<br/>

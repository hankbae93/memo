# React의 `Memoization`?

    메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때,
    이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여
    프로그램 실행 속도를 빠르게 하는 기술이다.
    동적 계획법의 핵심이 되는 기술이다. 메모이제이션이라고도 한다

React에서 컴포넌트가 렌더링하는 규칙에는 크게 세 가지가 존재한다.

- state나 props가 변경되었을 때
- 부모 컴포넌트가 렌더링 되었을 때
- forceUpdate()를 실행했을 때

React는 얕은 비교를 하기 때문에 원시 타입은 판단 가능하지만,
참조 타입은 렌더가 될 때마다 참조 메모리 주소가 달라진다.
따라서 우리가 보기에는 같은 값이더라도, React는 다른 값으로 인지하여 렌더를 일으킨다.

<br />

# `useCallback`

```ts
const memoizedCallback = useCallback(() => {
	doSomething(a, b);
}, [a, b]);
```

## spec

메모제이션된 콜백을 반환합니다.

메모제이션된 버전은 콜백의 의존성이 변경되었을 때만 변경합니다.

주로 Props로 자식컴포넌트에게 콜백을 전달할 때

참조의 동일성에 의존적인 최적화를 위해 사용합니다.

## 주의할점

- 의존성 값의 배열이 콜백의 인자로 전달하지 않는다.

- `useCallback(fn, deps)`은 `useMemo(() => fn, deps)`와 같습니다.

<br />

# useMemo

```ts
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## spec

메모제이션된 값을 반환합니다.

의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다.

이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.

## 주의할 점

    useMemo로 전달된 함수는 렌더링 중에 실행된다는 것을 기억하세요.
    통상적으로 렌더링 중에는 하지 않는 것을 이 함수 내에서 하지 마세요.
    예를 들어, 사이드 이펙트(side effects)는 useEffect에서 하는 일이지 useMemo에서 하는 일이 아닙니다.

- 배열이 없는 경우 매 렌더링 때마다 새 값을 계산하게된다.

#

- https://www.howdy-mj.me/react/memoization/
- https://kentcdodds.com/blog/usememo-and-usecallback

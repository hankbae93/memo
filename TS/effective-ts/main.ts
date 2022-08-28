interface Outer {
	inner: {
		x: number;
	};
}

const o: Readonly<Outer> = { inner: { x: 0 } };
o.inner = { x: 1 }; // ~~ 읽기 전용 속성이므로 'inner'에 할당할 수 없습니다.ts(2540)
o.inner.x = 2;

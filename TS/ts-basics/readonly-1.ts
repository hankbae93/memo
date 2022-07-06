interface Cat {
	readonly name: string;
	breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
	return {
		name,
		breed,
	};
}

const usul = makeCat("Usul", "Tabby");
// usul.name = 'redot';
//읽기 전용 속성이므로 'name'에 할당할 수 없습니다.ts(2540)

function makeCoordinate(
	x: number,
	y: number,
	z: number
): readonly [number, number, number] {
	return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50;

const reallyConst = [1, 2, 3] as const;
// reallyConst[0] = 50;
// type const = readonly [1, 2, 3]

interface NamedVetor {
	name: string;
	x: number;
	y: number;
}

interface Vetor2D {
	x: number;
	y: number;
}
function calcLength(v: Vetor2D) {
	return Math.sqrt(v.x * v.x + v.y * v.y);
}

const v = { x: 3, y: 4, name: "Zee" };
const z = { x: 3, y: 4, name: "Zee", 1: "SPSPSPSP" };
console.log(calcLength(v));
console.log(calcLength(z));

interface Vector3D {
	x: number;
	y: number;
	z: number;
}

function normalize(v: Vector3D) {
	// const length = calcLength(v);
	const length = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);

	return {
		x: v.x / length,
		y: v.y / length,
		z: v.z / length, // 왜 이게 1이 나와야하는지 이해가 안되네;;
	};
}

// console.log(normalize({ x: 3, y: 4, z: 5 }));

function calcLength1(v: Vector3D) {
	let length = 0;

	for (const axis of Object.keys(v)) {
		const coord = v[axis];
		length += Math.abs(coord);
	}
	return length;
}

console.log(calcLength1({ x: 3, y: 4, z: 5 }));
class C {
	foo: string;
	constructor(foo: string) {
		this.foo = foo;
	}
}

const c = new C("instance of C");

const d: C = { foo: "object literal" };

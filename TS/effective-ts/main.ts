interface Vector3 {
	x: number;
	y: number;
	z: number;
}

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
	return vector[axis];
}

const x = {
	a: 12 as const,
	b: "Name",
};

let vec = { x: 10, y: 10, z: 10 };
// getComponent(vec, x);

const a2 = [1, 2, 3] as const; // as: readonly [1, 2, 3]

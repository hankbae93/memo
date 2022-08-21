type Vec3D = Record<"x" | "y" | "z", number>;

const vec3D: Vec3D = {
	x: 1,
	y: 2,
	z: 3,
};

type ABC = { [k in "a" | "b" | "c"]: k extends "b" ? string : number };

const abc: ABC = {
	a: 1,
	b: "String",
	c: 2,
};

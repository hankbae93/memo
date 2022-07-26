class Cylinder {
	radius = 1;
	height = 1;
}

function caculateVolume(shape: unknown) {
	if (shape instanceof Cylinder) {
		console.log(shape.radius);
	}
}

const d: Cylinder = { radius: 2, height: 10 };

const v = typeof Cylinder; // function
type T = typeof Cylinder;

declare let fn: T;
const c = new fn();

type C = InstanceType<typeof Cylinder>; // Cylinder

interface Person {
	first: string;
	last: string;
}

const p: Person = { first: "Hankk", last: "sure" };

const first: Person["first"] = p["first"];

// function email(options: { person: Person, subject: string, body: string}) {}

function email({ person, email, body }) {}

type T1 = "string literal";
const v1 = "string literal";

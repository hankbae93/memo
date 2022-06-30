let userName: string = "HANKK";
let hasLoggedIn: boolean = false;

// hasLoggedIn += " SUREEEE";
// "false SUREEEE" js
// Type 'string' is not assignable to type 'boolean'. ts

userName += " SUREEEE";
console.log(userName);

let myRegex = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
	first: string;
	last: string;
}

const myPerson: Person = {
	first: "Hankkk",
	last: "SuREEE",
};

// type Record<KEY extends string | number | symbol, VALUE> = { [P in K]: T; }
const ids: Record<number, string> = {
	10: "a",
	20: "b",
};

ids[30] = "c";

if (ids[30] === "D") {
}

for (let i = 0; i < 10; i++) {
	console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out = [4, 5, 6].map((v) => v * 10);

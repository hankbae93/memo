interface Person {
	name: string;
}

const alice: Person = { name: "Alice" };
const bob = { name: "bob", occupation: "dd" } as Person;

const b = 1 as Person;

const people = ["alice", "bok", "jane"].map((name): Person => ({ name }));

document.querySelector("#myButton").addEventListener("click", (e) => {
	e.currentTarget; // EventTarget
	const button = e.currentTarget as HTMLButtonElement;
});

const elNull = document.getElementById("Foo");

elNull.getAnimations();

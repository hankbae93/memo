const jackson5 = ["Jackie", "Tito", "Manson", "Hank"];
const members = ["Kanh", "Manson"].map((who) =>
	jackson5.find((n) => n === who)
);
// .filter((who) => who !== undefined);
console.log(members);

function isDefined<T>(x: T | undefined): x is T {
	return x !== undefined;
}

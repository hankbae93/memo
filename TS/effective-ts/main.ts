function add(a: number, b: number): string;
function add(a: number, b: string): number;
function add(a: number, b: unknown): string | number {
	if (typeof b === "number") {
		return `${a + b}`;
	}
	if (typeof b === "string") {
		return Number(a + b);
	}
}
console.log(add(1, 2));
console.log(add(1, "2"));

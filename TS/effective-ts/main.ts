type BinaryFn = (a: number, b: number) => number;

const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;

declare function fetch(
	input: RequestInfo,
	init: RequestInit
): Promise<Response>;

const checkedFetch: typeof fetch = async (input, init) => {
	const response = await fetch(input, init);
	if (!response.ok) {
		throw new Error("Request failed: " + response.status);
	}
	return response;
};

function simpleStringState(
	initial: string
): [() => string, (v: string) => void] {
	let str: string = initial;
	return [
		() => str,
		(v: string) => {
			str = v;
		},
	];
}

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
	let val: T = initial;

	return [
		() => val,
		(v: T) => {
			val = v;
		},
	];
}

const [str1getter, str1setter] = simpleState(234);

console.log(str1getter());
str1setter(12);
console.log(str1getter());

const [str2getter, str2setter] = simpleState<null | string>(null);

console.log(str2getter());
str2setter("stre");
console.log(str2getter());
// let _val;

// function useState<T>(initial: T): [T, (v: T) => void] {
// 	let val: T = initial || _val;

// 	return [
// 		(function () {
// 			return val;
// 		})(),
// 		(v: T) => {
// 			val = v;
// 		},
// 	];
// }

// const [state, setState] = useState<number>(0);

// console.log(state);
// setState(12);
// console.log(state);
// function ranker

function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
	items.reduce((a, v) => {
		forEachFunc(v);
		return undefined;
	}, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));

// function myFilter<K>(items: K[], filterFunc: (v: K) => boolean): K[] {
// 	// return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), []);
// 	return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), []);
// }

// myFilter([1, 2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0);

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
	return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0));

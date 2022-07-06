function pluck<DataType, KeyType extends keyof DataType>(
	items: DataType[],
	key: KeyType
): DataType[KeyType][] {
	return items.map((item) => item[key]);
}

const dogs = [
	{ name: "Mimi", age: 12 },
	{ name: "LG", age: 13 },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
	time: number;
	user: string;
}

interface EventMap {
	// BaseEvent에 더하기 타입
	addToCart: BaseEvent & { quantity: number; productID: string };
	checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
	name: Name,
	data: EventMap[Name]
): void {
	console.log([name, data]);
}

sendEvent("addToCart", {
	quantity: 21,
	productID: "UXD_12",
	user: "RALF",
	time: new Date().getTime(),
});

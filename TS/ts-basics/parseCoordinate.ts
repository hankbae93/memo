interface Coordinate {
	x: number;
	y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
	return {
		...obj,
	};
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
	return {
		x,
		y,
	};
}

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
	let coord: Coordinate = {
		x: 0,
		y: 0,
	};  
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach(str => )
  }

	else if (typeof arg1 === "object") {
		coord = {
			...(arg1 as Coordinate),
		};
	} else {
		coord = {
			x: arg1 as number,
			y: arg2 as number,
		};
	}

	return coord;
}

console.log(parseCoordinate("12"));
console.log(parseCoordinate(12, 34));
console.log(parseCoordinate({ x: 52, y: 61 }));

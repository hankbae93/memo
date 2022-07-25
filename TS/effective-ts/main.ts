type C = { c: string };
type D = { c: number; d?: string };
type F = { f: object };

type U2 = keyof (C | D); // "c"
type U3 = keyof (C & D); // "c" | "d"
type U4 = keyof (C | F); // never
type U5 = keyof (C & F); // "c" | "f"

type EE = C | F;
interface Person {
	name: string;
}

interface Lifespan {
	birth: Date;
	detath?: Date;
}

type PersonSpan = Person & Lifespan;
type DD = Person | Lifespan;

const 김치: DD = {
	birth: new Date(),
	name: "dd",
	detath: new Date(),
};

const 김치2: PersonSpan = {
	birth: new Date(),
	name: "dd",
	detath: new Date(),
};

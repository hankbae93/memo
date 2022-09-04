interface Card {
	att: number;
	hp: number;
	name: string;
}

const Human: Card = {
	att: 10,
	hp: 100,
	name: "닝겐",
};
const Human2: Card = {
	att: 14,
	hp: 100,
	name: "닝겐2",
};
const Human3: Card & { skill: () => void } = {
	att: 12,
	hp: 100,
	name: "닝겐3",
	skill: () => console.log("매혹"),
};

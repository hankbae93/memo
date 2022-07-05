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

interface Rank<RankItem> {
	item: RankItem;
	rank: number;
}

function ranker<RankItem>(
	items: RankItem[],
	rank: (v: RankItem) => number
): RankItem[] {
	const ranks: Rank<RankItem>[] = items.map((item) => ({
		item,
		rank: rank(item),
	}));

	ranks.sort((a, b) => a.rank - b.rank);

	return ranks.map((rank) => rank.item);
}

interface Pokemon {
	name: string;
	hp: number;
}

const pokemon: Pokemon[] = [
	{
		name: "BBUUB",
		hp: 20,
	},
	{
		name: "DDBV",
		hp: 41,
	},
	{
		name: "ACA",
		hp: 12,
	},
];

const ranks = ranker(pokemon, ({ hp }) => hp);

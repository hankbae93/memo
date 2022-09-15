# Singleton Pattern

인스턴스가 하나만 있는 응용 프로그램에 개체가 필요한 경우가 있습니다.

클래스를 만들고 싱글톤 패턴을 따르면 인스턴스가 몇개가 생성되더라도 여전히 원래 클래스를 참조하도록 강제할 수 있습니다.

- 하나의 인스턴스만 할당함으로 메모리 낭비 방지.
- 코드 전체에 로그를 추가하는 등 싱글톤이면 간단하게 해결할 수 있습니다.

## concept

```ts
export class Singleton {
	static instance: Singleton;
	id: number;

	constructor(id: number) {
		this.id = id;
		if (Singleton.instance) {
			return Singleton.instance;
		}
		Singleton.instance = this;
	}
}

const OBJECT1 = new Singleton(1);
const OBJECT2 = new Singleton(2);

console.log(OBJECT1 === OBJECT2); // true
```

처음 생성할 때 이후부터는 메모리에서 실제로 인스턴스화되지 않고 같은 OBJECT1을 가리키는 것을 알 수 있습니다.

## 사용 사례

```ts
export default class Leaderboard {
	static instance: Leaderboard;
	#table: { [id: number]: string } = {};

	constructor() {
		if (Leaderboard.instance) {
			return Leaderboard.instance;
		}
		Leaderboard.instance = this;
	}

	public addWinner(position: number, name: string): void {
		this.#table[position] = name;
	}

	public print(): void {
		console.log("-----------Leaderboard-----------");
		for (const key in this.#table) {
			console.log(`|\t${key}\t|\t${this.#table[key]}\t|`);
		}
	}
}
```

하나의 리더보드를 공유하는 세 개의 게임을 생성해보려고 합니다. 모두 자체 클래스에서 생성된 다른 인스턴스이지만

동일한 리더보드를 공유합니다. 게임이 생성된 위치나 참조하는 방법은 중요하지 않으며 항상 싱글톤입니다.

```ts
import IGame from "./igame";
import Leaderboard from "./leaderboard";

export class Game1 implements IGame {
	leaderboard: Leaderboard;

	constructor() {
		this.leaderboard = new Leaderboard();
	}

	addWinner(position: number, name: string): void {
		this.leaderboard.addWinner(position, name);
	}
}
```

각 게임은 독립적으로 승자를 추가하며 모든 게임은 업데이트된 게임에 관계없이 변경된 리더보드를 읽을 수 있습니다.

```ts
import { Game1 } from "./game1";
import { Game2 } from "./game2";
import { Game3 } from "./game3";

const GAME1 = new Game1();
const GAME2 = new Game2();
const GAME3 = new Game3();

GAME2.addWinner(12, "Hank");
GAME1.addWinner(2, "Loddi");
GAME3.addWinner(1, "Walter");

GAME1.leaderboard.print();
/*
-----------Leaderboard-----------
|       1       |       Walter  |
|       2       |       Loddi   |
|       12      |       Hank    |
*/
```

## 고려할 점

- 멀티 프로세스 상황에서 인스턴스 공유 시 동시성을 고려해야함

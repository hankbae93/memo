// 원형이지만 누구도 수정할 수 없음
abstract class StreetFighter {
	constructor() {}

	move() {}

	fight() {
		console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
	}

	abstract getSpecialAttack(): string; // 상속받는클래스들이 구현해줘야함
	abstract get name(): string;
}

class Ryu extends StreetFighter {
	getSpecialAttack(): string {
		return "아도겐";
	}
	get name(): string {
		return "Ryu";
	}
}

class ChunLi extends StreetFighter {
	getSpecialAttack(): string {
		return "라이트닝 킥";
	}
	get name(): string {
		return "ChunLi";
	}
}

const ryu = new Ryu();
const chunLi = new ChunLi();
// console.log(ryu.getSpecialAttack());
ryu.fight();
chunLi.fight();

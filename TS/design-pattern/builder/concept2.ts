class Character {
	name: string;
	skill: () => any;
}

interface ICharacterBuilder {
	buildName(name: string): this;
	buildSkill(skill: () => any): this;
	build(): Character;
}

class CharacterBuilder implements ICharacterBuilder {
	character: Character;

	constructor() {
		this.character = new Character();
	}

	buildName(name: string): this {
		this.character.name = name;
		return this;
	}

	buildSkill(skill: () => any): this {
		this.character.skill = skill;
		return this;
	}

	build(): Character {
		return this.character;
	}
}

class CharacterDirector {
	static hankBuilder() {
		// 행크 빌더 디렉터
		return new CharacterBuilder()
			.buildName("Hank")
			.buildSkill(() => console.log("샷건 ==> DEATH"))
			.build();
	}
}

const HANK = CharacterDirector.hankBuilder();
console.log(HANK);

HANK.skill();

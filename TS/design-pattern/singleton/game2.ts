import IGame from "./igame";
import Leaderboard from "./leaderboard";

export class Game2 implements IGame {
	leaderboard: Leaderboard;

	constructor() {
		this.leaderboard = new Leaderboard();
	}

	addWinner(position: number, name: string): void {
		this.leaderboard.addWinner(position, name);
	}
}

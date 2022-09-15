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

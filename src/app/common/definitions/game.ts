import { GameStatus } from './game-status';

export interface Game {
  word: string;
  usedLetters: Array<string>;
  status: GameStatus;
}

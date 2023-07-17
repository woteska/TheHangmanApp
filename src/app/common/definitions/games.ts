import { Game } from './game';
import { GameId } from './game-id';

export interface Games {
  [id: GameId]: Game;
}

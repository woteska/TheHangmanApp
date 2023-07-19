import { createAction, props } from '@ngrx/store';
import { GameId } from '../../definitions/game-id';
import { GameStatus } from '../../definitions/game-status';
import { NumberOfLetters } from '../../definitions/number-of-letters';

const prefix = '[Games]';

export const init = createAction(`${prefix} Init`);
export const clear = createAction(`${prefix} Clear`);

export const startNewGame = createAction(`${prefix} Start New Game`,
  props<{ id: GameId; numberOfLetters: NumberOfLetters; word: string; }>());

export const updateUsedLetters = createAction(`${prefix} Update Used Letters`,
  props<{ id: GameId; letter: string; }>());

export const updateStatus = createAction(`${prefix} Update Status`,
  props<{ id: GameId; status: GameStatus; }>());

export const endGame = createAction(`${prefix} End Game`,
  props<{ id: GameId; }>());

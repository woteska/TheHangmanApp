import { createAction, props } from '@ngrx/store';
import { GameId } from '../../definitions/game-id';
import { NumberOfLetters } from '../../definitions/number-of-letters';

const prefix = '[Games]';

export const init = createAction(`${prefix} Init`);
export const clear = createAction(`${prefix} Clear`);

export const startNewGame = createAction(`${prefix} Start New Game`,
  props<{ id: GameId; numberOfLetters: NumberOfLetters; word: string; }>());

export const updateUsedLetters = createAction(`${prefix} Update Used Letters`,
  props<{ id: GameId; letter: string; }>());

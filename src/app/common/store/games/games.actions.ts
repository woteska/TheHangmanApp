import { createAction, props } from '@ngrx/store';
import { GameId } from '../../definitions/game-id';

const prefix = '[Games]';

export const init = createAction(`${prefix} Init`);
export const clear = createAction(`${prefix} Clear`);

export const startNewGame = createAction(`${prefix} Start New Game`,
  props<{ id: GameId; numberOfLetters: number; word: string; }>());
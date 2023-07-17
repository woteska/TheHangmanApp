import { createReducer, on } from '@ngrx/store';
import { Games } from '../../definitions/games';
import * as GamesActions from './games.actions';

export const name = 'games';

export interface GamesState {
  games: Games;
}

export const initialState: Readonly<GamesState> = {
  games: {}
};

export const reducer = createReducer(
  initialState,
  on(GamesActions.clear, (_): GamesState => (initialState)),
  on(GamesActions.startNewGame, (state, { id, word }): GamesState => ({
    ...state,
    games: {
      ...state.games,
      [id]: {
        word: word,
        usedLetters: []
      }
    }
  }))
);

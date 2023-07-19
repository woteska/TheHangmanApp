import { createReducer, on } from '@ngrx/store';
import { GameStatus } from '../../definitions/game-status';
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
        usedLetters: [],
        status: GameStatus.Pending
      }
    }
  })),
  on(GamesActions.updateUsedLetters, (state, { id, letter }): GamesState => ({
    ...state,
    games: {
      ...state.games,
      [id]: {
        ...state.games[id],
        usedLetters: Array.from(new Set([...state.games[id].usedLetters, letter]))
      }
    }
  })),
  on(GamesActions.updateStatus, (state, { id, status }): GamesState => ({
    ...state,
    games: {
      ...state.games,
      [id]: {
        ...state.games[id],
        status
      }
    }
  })),
  on(GamesActions.endGame, (state, { id }): GamesState => ({
    ...state,
    games: {
      ...state.games,
      [id]: {
        ...state.games[id],
        status: GameStatus.Ended
      }
    }
  }))
);

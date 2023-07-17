import {createReducer, on} from '@ngrx/store';
import * as GamesActions from './games.actions';

export const name = 'games';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GamesState {
}

export const initialState: Readonly<GamesState> = {};

export const reducer = createReducer(
  initialState,
  on(GamesActions.clear, (_): GamesState => (initialState))
);

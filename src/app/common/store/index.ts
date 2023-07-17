import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromGames from './games/games.reducer';

export interface AppRootState {
  [fromGames.name]: fromGames.GamesState;
}

export const reducers: ActionReducerMap<AppRootState> = {
  [fromGames.name]: fromGames.reducer
};

export const metaReducers: MetaReducer<AppRootState>[] = isDevMode() ? [] : [];

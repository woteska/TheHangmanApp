import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromGames from './games/games.reducer';

export interface AppRootState {
  [fromGames.name]: fromGames.GamesState;
}

export const reducers: ActionReducerMap<AppRootState> = {
  [fromGames.name]: fromGames.reducer
};

// TODO: configure it on a way that it would persist data into storage just before the app unloads
export function localStorageSyncReducer(reducer: ActionReducer<AppRootState>): ActionReducer<AppRootState> {
  return localStorageSync({
    keys: [fromGames.name],
    rehydrate: true
  })(reducer);
}

export const metaReducers: MetaReducer<AppRootState>[] = [localStorageSyncReducer];

import {createFeatureSelector} from '@ngrx/store';
import * as fromGames from './games.reducer';

export const selectGamesState = createFeatureSelector<fromGames.GamesState>(fromGames.name);

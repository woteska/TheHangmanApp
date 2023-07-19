import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { GameStatus } from '../../definitions/game-status';
import * as GamesActions from './games.actions';
import * as GamesSelectors from './games.selectors';

@Injectable({
  providedIn: 'root'
})
export class GamesEffects {

  readonly postUpdateUsedLetters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        GamesActions.updateUsedLetters
      ),
      concatLatestFrom(action => [
        this.store.select(GamesSelectors.selectIsAllLettersFound({ id: action.id })),
        this.store.select(GamesSelectors.selectNumberOfBadTries({ id: action.id }))
      ]),
      map(([action, isAllLetterFound, numberOfBadTries]) => {
          if (isAllLetterFound) {
            return GamesActions.updateStatus({ id: action.id, status: GameStatus.Won });
          } else if (numberOfBadTries > 9) {
            return GamesActions.updateStatus({ id: action.id, status: GameStatus.Lost });
          } else {
            return GamesActions.updateStatus({ id: action.id, status: GameStatus.Pending });
          }
        }
      ));
  });

  constructor(private readonly actions$: Actions,
              private readonly store: Store) {
  }
}

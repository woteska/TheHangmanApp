import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class GamesEffects {

  constructor(private readonly actions$: Actions,
              private readonly store: Store) {
  }
}

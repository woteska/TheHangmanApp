import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { sample } from 'lodash-es';
import { GameId } from '../../definitions/game-id';
import { NumberOfLetters } from '../../definitions/number-of-letters';
import { words } from '../../definitions/words';
import * as GamesActions from '../../store/games/games.actions';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private readonly store: Store) {
  }

  startNewGame(numberOfLetters: NumberOfLetters): GameId {
    const gameId = this.createGameId();
    const word = this.getRandomWord(numberOfLetters);
    this.store.dispatch(GamesActions.startNewGame({ id: gameId, numberOfLetters, word }));
    return gameId;
  }

  private createGameId(): GameId {
    return new Date().getTime().toString();
  }

  private getRandomWord(numberOfLetters: NumberOfLetters): string {
    if (numberOfLetters === -1) {
      return sample(words) || '';
    } else {
      const filteredWords = words.filter(word => word.length === numberOfLetters);
      return sample(filteredWords) || '';
    }
  }
}

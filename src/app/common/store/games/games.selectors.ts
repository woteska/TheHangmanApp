import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { alphabet } from '../../definitions/alphabet';
import { AlphabetLetter } from '../../definitions/alphabet-letter';
import { Game } from '../../definitions/game';
import { GameId } from '../../definitions/game-id';
import * as fromGames from './games.reducer';

export const selectGamesState = createFeatureSelector<fromGames.GamesState>(fromGames.name);

const selectGames = createSelector(selectGamesState, state => state.games);

export const selectGame = (props: { id: GameId; }): MemoizedSelector<object, Game> =>
  createSelector(selectGames, games => {
      return games[props.id];
    }
  );

export const selectDisplayedLetters = (props: { id: GameId; }): MemoizedSelector<object, Array<string>> =>
  createSelector(selectGame({ id: props.id }), game => {
      return game.word.split('').map(letter => game.usedLetters.includes(letter) ? letter : '');
    }
  );

export const selectDisplayedAlphabetLetters = (props: {
  id: GameId;
}): MemoizedSelector<object, Array<AlphabetLetter>> =>
  createSelector(selectGame({ id: props.id }), game => {
    return alphabet.map<AlphabetLetter>(letter => {
      return {
        isDisabled: game.usedLetters.includes(letter),
        letter
      };
    });
  });

export const selectNumberOfTries = (props: { id: GameId; }): MemoizedSelector<object, number> =>
  createSelector(selectGame({ id: props.id }), game => {
      return game.usedLetters.length;
    }
  );

import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { alphabet } from '../../definitions/alphabet';
import { AlphabetLetter } from '../../definitions/alphabet-letter';
import { Game } from '../../definitions/game';
import { GameId } from '../../definitions/game-id';
import { GameStatus } from '../../definitions/game-status';
import { NumberOfLetters } from '../../definitions/number-of-letters';
import * as fromGames from './games.reducer';

export const selectGamesState = createFeatureSelector<fromGames.GamesState>(fromGames.name);

export const selectGames = createSelector(selectGamesState, state => state.games);

export const selectWords = createSelector(selectGamesState, state => state.words);

export const selectNumberOfLetters = createSelector(selectWords, words => {
  const numberOfLetters = new Set<NumberOfLetters>();
  words.forEach(word => numberOfLetters.add(word.length));
  return Array.from(numberOfLetters).sort((a, b) => a - b);
});

export const selectIsGameExist = (props: { id: GameId; }): MemoizedSelector<object, boolean> =>
  createSelector(selectGames, games => {
      return !!games[props.id];
    }
  );

export const selectGame = (props: { id: GameId; }): MemoizedSelector<object, Game> =>
  createSelector(selectGames, games => {
      return games[props.id];
    }
  );

export const selectDisplayedWord = (props: { id: GameId; }): MemoizedSelector<object, Array<string>> =>
  createSelector(selectGame({ id: props.id }), game => {
      return Array.from(game.word).map(letter => game.usedLetters.includes(letter) ? letter : '');
    }
  );

export const selectIsAllLettersFound = (props: { id: GameId; }): MemoizedSelector<object, boolean> =>
  createSelector(selectGame({ id: props.id }), game => {
      return Array.from(game.word).every(letter => game.usedLetters.includes(letter));
    }
  );

export const selectAlphabet = (props: {
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

export const selectNumberOfBadTries = (props: { id: GameId; }): MemoizedSelector<object, number> =>
  createSelector(selectGame({ id: props.id }), game => {
      return game.usedLetters.filter(letter => !game.word.includes(letter)).length;
    }
  );

export const selectGameStatus = (props: { id: GameId; }): MemoizedSelector<object, GameStatus> =>
  createSelector(selectGame({ id: props.id }), game => {
      return game.status;
    }
  );

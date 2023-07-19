import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlphabetLetter } from '../../common/definitions/alphabet-letter';
import { GameId } from '../../common/definitions/game-id';
import * as GamesActions from '../../common/store/games/games.actions';
import * as GamesSelectors from '../../common/store/games/games.selectors';

@Component({
  selector: 'app-game-routing',
  templateUrl: './game-routing.component.html',
  styleUrls: ['./game-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameRoutingComponent {
  readonly data$;
  readonly alphabetLetters$;
  readonly displayedLetters$;
  readonly numberOfTries$;
  private readonly gameId: GameId;

  constructor(private readonly store: Store,
              private readonly activatedRoute: ActivatedRoute) {
    this.gameId = this.activatedRoute.snapshot.paramMap.get('gameId') || '';
    this.data$ = this.store.select(GamesSelectors.selectGame({ id: this.gameId }));
    this.alphabetLetters$ = this.store.select(GamesSelectors.selectDisplayedAlphabetLetters({ id: this.gameId }));
    this.displayedLetters$ = this.store.select(GamesSelectors.selectDisplayedLetters({ id: this.gameId }));
    this.numberOfTries$ = this.store.select(GamesSelectors.selectNumberOfTries({ id: this.gameId }));
  }

  updateUsedLetters(alphabetLetter: AlphabetLetter): void {
    this.store.dispatch(GamesActions.updateUsedLetters({ id: this.gameId, letter: alphabetLetter.letter }));
  }
}

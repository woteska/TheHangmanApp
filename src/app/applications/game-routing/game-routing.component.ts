import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlphabetLetter } from '../../common/definitions/alphabet-letter';
import { GameId } from '../../common/definitions/game-id';
import { GameStatus } from '../../common/definitions/game-status';
import { GameNavigationService } from '../../common/services/game-navigation/game-navigation.service';
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
  readonly alphabet$;
  readonly displayedWord$;
  readonly numberOfBadTries$;
  readonly status$;
  readonly GameStatus = GameStatus;
  protected readonly Performance = Performance;
  private readonly gameId: GameId;

  constructor(private readonly store: Store,
              private readonly gameNavigationService: GameNavigationService,
              private readonly activatedRoute: ActivatedRoute) {
    this.gameId = this.activatedRoute.snapshot.paramMap.get('gameId') || '';
    this.data$ = this.store.select(GamesSelectors.selectGame({ id: this.gameId }));
    this.alphabet$ = this.store.select(GamesSelectors.selectAlphabet({ id: this.gameId }));
    this.displayedWord$ = this.store.select(GamesSelectors.selectDisplayedWord({ id: this.gameId }));
    this.numberOfBadTries$ = this.store.select(GamesSelectors.selectNumberOfBadTries({ id: this.gameId }));
    this.status$ = this.store.select(GamesSelectors.selectGameStatus({ id: this.gameId }));
  }

  onStartNewGame(): void {
    this.gameNavigationService.toStartNewGame();
  }

  updateUsedLetters(alphabetLetter: AlphabetLetter): void {
    this.store.dispatch(GamesActions.updateUsedLetters({ id: this.gameId, letter: alphabetLetter.letter }));
  }

  onEndGame(): void {
    this.store.dispatch(GamesActions.endGame({ id: this.gameId }));
    this.onStartNewGame();
  }
}

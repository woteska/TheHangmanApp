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
  readonly alphabet$;
  readonly displayedWord$;
  readonly numberOfBadTries$;
  readonly status$;
  readonly GameStatus = GameStatus;
  private readonly gameId: GameId;

  constructor(private readonly store: Store,
              private readonly gameNavigationService: GameNavigationService,
              private readonly activatedRoute: ActivatedRoute) {
    this.gameId = this.getGameIdFromUrl();
    this.alphabet$ = this.store.select(GamesSelectors.selectAlphabet({ id: this.gameId }));
    this.displayedWord$ = this.store.select(GamesSelectors.selectDisplayedWord({ id: this.gameId }));
    this.numberOfBadTries$ = this.store.select(GamesSelectors.selectNumberOfBadTries({ id: this.gameId }));
    this.status$ = this.store.select(GamesSelectors.selectGameStatus({ id: this.gameId }));
  }

  onStartNewGame(): void {
    this.gameNavigationService.toStartNewGame();
  }

  onInstructions(): void {
    this.gameNavigationService.toInstructions(this.gameId);
  }

  onPressLetter(alphabetLetter: AlphabetLetter): void {
    this.store.dispatch(GamesActions.updateUsedLetters({ id: this.gameId, letter: alphabetLetter.letter }));
  }

  onEndGame(): void {
    this.store.dispatch(GamesActions.endGame({ id: this.gameId }));
    this.onStartNewGame();
  }

  private getGameIdFromUrl(): GameId {
    return this.activatedRoute.snapshot.paramMap.get('gameId') || '';
  }
}

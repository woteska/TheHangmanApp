import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NumberOfLetters } from '../../common/definitions/number-of-letters';
import { GameNavigationService } from '../../common/services/game-navigation/game-navigation.service';
import { GameService } from '../../common/services/game/game.service';
import * as GamesSelector from '../../common/store/games/games.selectors';

@Component({
  selector: 'app-start-new-game-routing',
  templateUrl: './start-new-game-routing.component.html',
  styleUrls: ['./start-new-game-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartNewGameRoutingComponent {
  readonly letterNumbers$ = this.store.select(GamesSelector.selectNumberOfLetters);

  constructor(private readonly gameNavigationService: GameNavigationService,
              private readonly gameService: GameService,
              private readonly store: Store) {
  }

  onStartNewGame(numberOfLetters: NumberOfLetters): void {
    const gameId = this.gameService.startNewGame(numberOfLetters);
    this.gameNavigationService.toGame(gameId);
  }
}

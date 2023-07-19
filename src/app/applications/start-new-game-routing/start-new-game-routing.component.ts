import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NumberOfLetters } from '../../common/definitions/number-of-letters';
import { GameNavigationService } from '../../common/services/game-navigation/game-navigation.service';
import { GameService } from '../../common/services/game/game.service';

@Component({
  selector: 'app-start-new-game-routing',
  templateUrl: './start-new-game-routing.component.html',
  styleUrls: ['./start-new-game-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartNewGameRoutingComponent {

  constructor(private readonly gameNavigationService: GameNavigationService,
              private readonly gameService: GameService) {
  }

  onStartNewGame(numberOfLetters: NumberOfLetters): void {
    const gameId = this.gameService.startNewGame(numberOfLetters);
    this.gameNavigationService.toGame(gameId);
  }
}

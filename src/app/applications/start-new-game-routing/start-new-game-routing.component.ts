import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NumberOfLetters } from '../../common/definitions/number-of-letters';
import { GameService } from '../../common/services/game/game.service';

@Component({
  selector: 'app-start-new-game-routing',
  templateUrl: './start-new-game-routing.component.html',
  styleUrls: ['./start-new-game-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartNewGameRoutingComponent {
  constructor(private readonly router: Router,
              private readonly gameService: GameService) {
  }

  startNewGame(numberOfLetters: NumberOfLetters): void {
    const gameId = this.gameService.startNewGame(numberOfLetters);
    this.router.navigate(['game', gameId]);
  }
}

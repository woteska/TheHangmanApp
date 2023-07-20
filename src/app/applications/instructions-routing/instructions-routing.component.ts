import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameId } from '../../common/definitions/game-id';
import { GameNavigationService } from '../../common/services/game-navigation/game-navigation.service';

@Component({
  selector: 'app-instructions-routing',
  templateUrl: './instructions-routing.component.html',
  styleUrls: ['./instructions-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionsRoutingComponent {

  constructor(private readonly gameNavigationService: GameNavigationService,
              private readonly activatedRoute: ActivatedRoute) {
  }

  onGotIt(): void {
    const gameId = this.getGameIdFromUrl();
    if (gameId) {
      this.gameNavigationService.toGame(gameId);
    } else {
      this.gameNavigationService.toStartNewGame();
    }
  }

  private getGameIdFromUrl(): GameId {
    return this.activatedRoute.snapshot.paramMap.get('gameId') || '';
  }
}

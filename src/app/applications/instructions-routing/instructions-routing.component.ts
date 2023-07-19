import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameNavigationService } from '../../common/services/game-navigation/game-navigation.service';

@Component({
  selector: 'app-instructions-routing',
  templateUrl: './instructions-routing.component.html',
  styleUrls: ['./instructions-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionsRoutingComponent {

  constructor(private readonly gameNavigationService: GameNavigationService) {
  }

  onGotIt(): void {
    this.gameNavigationService.toStartNewGame();
  }
}

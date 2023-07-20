import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GameStatus } from '../../definitions/game-status';
import { GameStatusPipe } from '../../pipe/game-status/game-status.pipe';

@Component({
  selector: 'app-game-status',
  standalone: true,
  imports: [CommonModule, MatIconModule, GameStatusPipe],
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameStatusComponent {
  readonly GameStatus = GameStatus;
  @Input({ required: true }) status: GameStatus = GameStatus.Pending;
}

import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GameStatus } from '../../definitions/game-status';
import { GameStatusPipe } from '../../pipe/game-status/game-status.pipe';

@Component({
  selector: 'app-game-status',
  standalone: true,
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss'],
  imports: [
    NgClass,
    MatIconModule,
    NgSwitchCase,
    NgSwitch,
    GameStatusPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameStatusComponent {
  readonly GameStatus = GameStatus;
  @Input({ required: true }) status: GameStatus = GameStatus.Pending;
}

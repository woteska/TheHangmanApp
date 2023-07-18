import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NumberOfLetters } from '../../definitions/number-of-letters';

@Component({
  selector: 'app-start-new-game',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './start-new-game.component.html',
  styleUrls: ['./start-new-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartNewGameComponent {
  selectedNumber: NumberOfLetters | null = null;
  @Output() private readonly startNewGame = new EventEmitter<NumberOfLetters>;

  setNumberOfLetters(numberOfLetter: NumberOfLetters): void {
    this.selectedNumber = numberOfLetter;
  }

  onStartNewGame(): void {
    if (this.selectedNumber === null) {
      return;
    }
    this.startNewGame.emit(this.selectedNumber);
  }
}

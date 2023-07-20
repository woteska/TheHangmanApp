import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NumberOfLetters } from '../../definitions/number-of-letters';
import { WordLettersComponent } from '../word-letters/word-letters.component';

@Component({
  selector: 'app-start-new-game',
  standalone: true,
  imports: [CommonModule, MatButtonModule, WordLettersComponent],
  templateUrl: './start-new-game.component.html',
  styleUrls: ['./start-new-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartNewGameComponent {
  @Input() numberOfLetters: NumberOfLetters | null = null;
  @Input({ required: true }) letterNumbers: Array<NumberOfLetters> = [];
  @Output() private readonly startNewGame = new EventEmitter<NumberOfLetters>;

  onStartNewGame(): void {
    if (this.numberOfLetters === null) {
      return;
    }
    this.startNewGame.emit(this.numberOfLetters);
  }
}

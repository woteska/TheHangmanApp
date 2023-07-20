import { NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AlphabetLetter } from '../../definitions/alphabet-letter';
import { GameStatus } from '../../definitions/game-status';
import { AlphabetComponent } from '../alphabet/alphabet.component';
import { GameStatusComponent } from '../game-status/game-status.component';
import { HangmanComponent } from '../hangman/hangman.component';
import { WordComponent } from '../word/word.component';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [
    MatButtonModule,
    NgIf,
    AlphabetComponent,
    WordComponent,
    GameStatusComponent,
    TitleCasePipe,
    UpperCasePipe,
    HangmanComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  readonly GameStatus = GameStatus;
  @Input({ required: true }) status!: GameStatus;
  @Input({ required: true }) numberOfBadTries = 0;
  @Input({ required: true }) displayedWord: Array<string> = [];
  @Input({ required: true }) alphabet: Array<AlphabetLetter> = [];
  @Output() readonly pressLetter = new EventEmitter<AlphabetLetter>();
  @Output() readonly endGame = new EventEmitter<void>();
  @Output() readonly startNewGame = new EventEmitter<void>();

  onPressLetter(alp: AlphabetLetter): void {
    this.pressLetter.emit(alp);
  }

  onEndGame(): void {
    this.endGame.emit();
  }

  onStartNewGame(): void {
    this.startNewGame.emit();
  }
}

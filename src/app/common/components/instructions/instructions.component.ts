import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [CommonModule, MatButtonModule, HangmanComponent],
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionsComponent {
  @Output() private readonly gotIt = new EventEmitter<void>;

  onGotIt(): void {
    this.gotIt.emit();
  }
}

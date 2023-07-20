import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HangmanComponent } from '../hangman/hangman.component';

@Component({
  selector: 'app-instructions',
  standalone: true,
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
  imports: [
    HangmanComponent,
    TitleCasePipe,
    MatButtonModule,
    UpperCasePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionsComponent {
  @Output() private readonly gotIt = new EventEmitter<void>;

  onGotIt(): void {
    this.gotIt.emit();
  }
}

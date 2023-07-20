import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman',
  standalone: true,
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
  imports: [
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanComponent {
  @Input() numberOfTries = -1;
}

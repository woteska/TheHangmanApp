import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanComponent {
}

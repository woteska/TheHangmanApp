import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NumberOfLetters } from '../../definitions/number-of-letters';

@Component({
  selector: 'app-word-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-letters.component.html',
  styleUrls: ['./word-letters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordLettersComponent {
  @Input({ required: true }) letterNumbers: Array<NumberOfLetters> = [];
  @Input({ required: true }) numberOfLetters: NumberOfLetters | null = null;
  @Output() readonly numberOfLettersChange = new EventEmitter<NumberOfLetters>();

  setNumberOfLetters(numberOfLetter: NumberOfLetters): void {
    this.numberOfLetters = numberOfLetter;
    this.numberOfLettersChange.emit(this.numberOfLetters);
  }
}

import { NgClass, NgForOf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NumberOfLetters } from '../../definitions/number-of-letters';

@Component({
  selector: 'app-word-letters',
  standalone: true,
  templateUrl: './word-letters.component.html',
  styleUrls: ['./word-letters.component.scss'],
  imports: [
    NgClass,
    NgForOf,
    TitleCasePipe
  ],
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

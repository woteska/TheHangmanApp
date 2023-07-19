import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlphabetLetter } from '../../definitions/alphabet-letter';

@Component({
  selector: 'app-alphabet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphabetComponent {
  @Input({ required: true }) alphabet: Array<AlphabetLetter> = [];
  @Input() isDisabled = true;
  @Output() readonly update = new EventEmitter<AlphabetLetter>();

  onType(letter: AlphabetLetter): void {
    if (this.isDisabled) {
      return;
    }
    if (letter.isDisabled) {
      return;
    }
    this.update.emit(letter);
  }
}
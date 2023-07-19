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
  @Output() readonly update = new EventEmitter<AlphabetLetter>();

  onType(letter: AlphabetLetter): void {
    this.update.emit(letter);
  }
}

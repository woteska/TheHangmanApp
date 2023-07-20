import { NgClass, NgForOf, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AlphabetLetter } from '../../definitions/alphabet-letter';

@Component({
  selector: 'app-alphabet',
  standalone: true,
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss'],
  imports: [
    NgClass,
    NgForOf,
    UpperCasePipe,
    MatRippleModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphabetComponent {
  @Input({ required: true }) alphabet: Array<AlphabetLetter> = [];
  @Input() isDisabled = true;
  @Output() readonly press = new EventEmitter<AlphabetLetter>();

  onPress(letter: AlphabetLetter): void {
    if (this.isDisabled || letter.isDisabled) {
      return;
    }
    this.press.emit(letter);
  }

  trackBy(index: number, letter: AlphabetLetter): string {
    return letter.letter;
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent): void {
    if (this.isDisabled || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }
    const searchLetter = event.key.toLocaleLowerCase();
    const foundLetter = this.alphabet.find(letter => letter.letter === searchLetter && !letter.isDisabled);
    if (foundLetter) {
      this.press.emit(foundLetter);
    }
  }
}

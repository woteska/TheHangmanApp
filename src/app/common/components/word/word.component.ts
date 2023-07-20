import { NgForOf, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  standalone: true,
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
  imports: [
    NgForOf,
    UpperCasePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordComponent {
  @Input({ required: true }) word: Array<string> = [];

  trackBy(index: number, letter: string): string {
    return letter;
  }
}

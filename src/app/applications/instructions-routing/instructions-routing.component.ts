import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions-routing',
  templateUrl: './instructions-routing.component.html',
  styleUrls: ['./instructions-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionsRoutingComponent {
  constructor(private readonly router: Router) {
  }

  navigateToStartNewGamePage(): void {
    this.router.navigate(['start-new-game']);
  }
}

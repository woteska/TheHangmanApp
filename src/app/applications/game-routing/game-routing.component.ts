import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as GamesSelectors from '../../common/store/games/games.selectors';

@Component({
  selector: 'app-game-routing',
  templateUrl: './game-routing.component.html',
  styleUrls: ['./game-routing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameRoutingComponent {
  readonly data$;

  constructor(private readonly store: Store,
              private readonly activatedRoute: ActivatedRoute) {
    this.data$ = this.store.select(GamesSelectors.selectGamesState);
  }
}

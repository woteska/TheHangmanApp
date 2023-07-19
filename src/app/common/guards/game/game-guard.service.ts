import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { GameId } from '../../definitions/game-id';
import { GameNavigationService } from '../../services/game-navigation/game-navigation.service';
import * as GamesSelector from '../../store/games/games.selectors';

@Injectable({
  providedIn: 'root'
})
export class GameGuardService {

  constructor(private readonly store: Store,
              private readonly gameNavigationService: GameNavigationService) {
  }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<boolean> {
    const gameId = activatedRouteSnapshot.paramMap.get('gameId');
    return this.activateHandler(gameId);
  }

  private activateHandler(gameId: GameId | null): Observable<boolean> {
    if (!gameId) {
      this.gameNavigationService.toStartNewGame();
      return of(false);
    }

    return this.isGameExist(gameId)
      .pipe(
        map(isExist => {
          if (!isExist) {
            this.gameNavigationService.toStartNewGame();
            return false;
          }
          return isExist;
        })
      );
  }

  private isGameExist(gameId: GameId): Observable<boolean> {
    return this.store.select(GamesSelector.selectIsGameExist({ id: gameId }));
  }
}

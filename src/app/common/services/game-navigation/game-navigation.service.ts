import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GameId } from '../../definitions/game-id';

@Injectable({
  providedIn: 'root'
})
export class GameNavigationService {

  constructor(private readonly router: Router) {
  }

  toGame(gameId: GameId): void {
    this.router.navigate(['game', gameId]);
  }

  toStartNewGame(): void {
    this.router.navigate(['start-new-game']);
  }

  toInstructions(): void {
    this.router.navigate(['instructions']);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { GameStatus } from '../../definitions/game-status';

@Pipe({
  name: 'appGameStatus',
  standalone: true
})
export class GameStatusPipe implements PipeTransform {

  transform(status: GameStatus): string {
    switch (status) {
      case GameStatus.Ended:
      case GameStatus.Pending:
        return '';
      case GameStatus.Lost:
        return 'You\'ve lost';
      case GameStatus.Won:
        return 'You\'ve won';
    }
  }

}

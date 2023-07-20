import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGuardService } from '../common/guards/game/game-guard.service';
import { GameRoutingComponent } from './game-routing/game-routing.component';
import { InstructionsRoutingComponent } from './instructions-routing/instructions-routing.component';
import { StartNewGameRoutingComponent } from './start-new-game-routing/start-new-game-routing.component';

const routes: Routes = [
  {
    path: 'instructions',
    component: InstructionsRoutingComponent
  },
  {
    path: 'instructions/:gameId',
    component: InstructionsRoutingComponent
  },
  {
    path: 'start-new-game',
    component: StartNewGameRoutingComponent
  },
  {
    path: 'game/:gameId',
    component: GameRoutingComponent,
    canActivate: [GameGuardService]
  },
  {
    path: '**',
    redirectTo: 'instructions'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {
}

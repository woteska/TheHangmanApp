import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameRoutingComponent } from './game-routing/game-routing.component';
import { InstructionsRoutingComponent } from './instructions-routing/instructions-routing.component';
import { StartNewGameRoutingComponent } from './start-new-game-routing/start-new-game-routing.component';

const routes: Routes = [
  {
    path: 'instructions',
    component: InstructionsRoutingComponent
  },
  {
    path: 'start-new-game',
    component: StartNewGameRoutingComponent
  },
  {
    path: 'game/:gameId',
    component: GameRoutingComponent
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

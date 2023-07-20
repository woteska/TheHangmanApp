import { AsyncPipe, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameComponent } from '../common/components/game/game.component';
import { InstructionsComponent } from '../common/components/instructions/instructions.component';
import { StartNewGameComponent } from '../common/components/start-new-game/start-new-game.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { GameRoutingComponent } from './game-routing/game-routing.component';
import { InstructionsRoutingComponent } from './instructions-routing/instructions-routing.component';
import { StartNewGameRoutingComponent } from './start-new-game-routing/start-new-game-routing.component';

@NgModule({
  imports: [
    ApplicationsRoutingModule,
    GameComponent,
    NgIf,
    AsyncPipe,
    InstructionsComponent,
    StartNewGameComponent
  ],
  declarations: [
    InstructionsRoutingComponent,
    StartNewGameRoutingComponent,
    GameRoutingComponent
  ]
})
export class ApplicationsModule {
}

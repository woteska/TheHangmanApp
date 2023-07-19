import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AlphabetComponent } from '../common/components/alphabet/alphabet.component';
import { GameStatusComponent } from '../common/components/game-status/game-status.component';
import { HangmanComponent } from '../common/components/hangman/hangman.component';
import { InstructionsComponent } from '../common/components/instructions/instructions.component';
import { StartNewGameComponent } from '../common/components/start-new-game/start-new-game.component';
import { WordComponent } from '../common/components/word/word.component';
import { GameStatusPipe } from '../common/pipe/game-status/game-status.pipe';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { GameRoutingComponent } from './game-routing/game-routing.component';
import { InstructionsRoutingComponent } from './instructions-routing/instructions-routing.component';
import { StartNewGameRoutingComponent } from './start-new-game-routing/start-new-game-routing.component';

@NgModule({
  declarations: [
    InstructionsRoutingComponent,
    StartNewGameRoutingComponent,
    GameRoutingComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    InstructionsComponent,
    StartNewGameComponent,
    WordComponent,
    AlphabetComponent,
    HangmanComponent,
    MatButtonModule,
    GameStatusPipe,
    GameStatusComponent
  ]
})
export class ApplicationsModule {
}

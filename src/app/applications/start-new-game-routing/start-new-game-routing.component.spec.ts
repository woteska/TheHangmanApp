import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { StartNewGameComponent } from '../../common/components/start-new-game/start-new-game.component';
import { StartNewGameRoutingComponent } from './start-new-game-routing.component';

describe('StartNewGameRoutingComponent', () => {
  let component: StartNewGameRoutingComponent;
  let fixture: ComponentFixture<StartNewGameRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartNewGameRoutingComponent],
      imports: [
        StoreModule,
        StartNewGameComponent
      ],
      providers: [
        provideMockStore()
      ]
    });
    fixture = TestBed.createComponent(StartNewGameRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

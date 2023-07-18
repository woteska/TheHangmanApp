import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartNewGameRoutingComponent } from './start-new-game-routing.component';

describe('StartNewGameRoutingComponent', () => {
  let component: StartNewGameRoutingComponent;
  let fixture: ComponentFixture<StartNewGameRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartNewGameRoutingComponent]
    });
    fixture = TestBed.createComponent(StartNewGameRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

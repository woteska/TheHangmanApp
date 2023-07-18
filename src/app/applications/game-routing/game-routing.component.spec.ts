import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameRoutingComponent } from './game-routing.component';

describe('GameRoutingComponent', () => {
  let component: GameRoutingComponent;
  let fixture: ComponentFixture<GameRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameRoutingComponent]
    });
    fixture = TestBed.createComponent(GameRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

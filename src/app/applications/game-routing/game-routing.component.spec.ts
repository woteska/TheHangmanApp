import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { GameRoutingComponent } from './game-routing.component';

describe('GameRoutingComponent', () => {
  let component: GameRoutingComponent;
  let fixture: ComponentFixture<GameRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameRoutingComponent],
      imports: [
        StoreModule,
        RouterTestingModule
      ],
      providers: [
        provideMockStore()
      ]
    });
    fixture = TestBed.createComponent(GameRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

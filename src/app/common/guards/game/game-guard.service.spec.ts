import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { GameGuardService } from './game-guard.service';

describe('GameGuardService', () => {
  let service: GameGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule
      ],
      providers: [
        provideMockStore()
      ]
    });
    service = TestBed.inject(GameGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

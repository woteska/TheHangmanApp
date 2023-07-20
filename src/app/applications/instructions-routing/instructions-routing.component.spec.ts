import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructionsComponent } from '../../common/components/instructions/instructions.component';
import { InstructionsRoutingComponent } from './instructions-routing.component';

describe('InstructionsRoutingComponent', () => {
  let component: InstructionsRoutingComponent;
  let fixture: ComponentFixture<InstructionsRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionsRoutingComponent],
      imports: [InstructionsComponent]
    });
    fixture = TestBed.createComponent(InstructionsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserfeedbackComponent } from './userfeedback.component';

describe('UserfeedbackComponent', () => {
  let component: UserfeedbackComponent;
  let fixture: ComponentFixture<UserfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ UserfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

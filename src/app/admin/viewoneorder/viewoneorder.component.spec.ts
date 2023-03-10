import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneorderComponent } from './viewoneorder.component';

describe('ViewoneorderComponent', () => {
  let component: ViewoneorderComponent;
  let fixture: ComponentFixture<ViewoneorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ViewoneorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewoneorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

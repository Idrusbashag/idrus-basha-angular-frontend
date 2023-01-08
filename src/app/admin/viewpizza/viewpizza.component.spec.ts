import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndComponent } from '../ind/ind.component';

import { ViewpizzaComponent } from './viewpizza.component';

describe('ViewfoodComponent', () => {
  let component: ViewpizzaComponent;
  let fixture: ComponentFixture<ViewpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ViewpizzaComponent,IndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

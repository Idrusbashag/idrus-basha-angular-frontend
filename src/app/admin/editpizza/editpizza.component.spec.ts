import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IndComponent } from '../ind/ind.component';

import { EditpizzaComponent } from './editpizza.component';

describe('EditfoodComponent', () => {
  let component: EditpizzaComponent;
  let fixture: ComponentFixture<EditpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule],
      declarations: [ EditpizzaComponent ,IndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

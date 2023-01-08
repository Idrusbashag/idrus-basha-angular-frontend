import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { UserofferComponent } from './useroffer.component';

describe('UserofferComponent', () => {
  let component: UserofferComponent;
  let fixture: ComponentFixture<UserofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot()],
      declarations: [ UserofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

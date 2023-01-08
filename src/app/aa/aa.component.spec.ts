
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AaComponent } from './aa.component';

describe('AaComponent', () => {
  let component: AaComponent;
  let fixture: ComponentFixture<AaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(),HttpClientTestingModule,FormsModule],
      declarations: [ AaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

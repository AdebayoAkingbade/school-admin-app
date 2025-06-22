import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSchoolInfoComponent } from './previous-school-info.component';

describe('PreviousSchoolInfoComponent', () => {
  let component: PreviousSchoolInfoComponent;
  let fixture: ComponentFixture<PreviousSchoolInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousSchoolInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousSchoolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

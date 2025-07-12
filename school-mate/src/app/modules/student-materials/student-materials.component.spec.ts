import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMaterialsComponent } from './student-materials.component';

describe('StudentMaterialsComponent', () => {
  let component: StudentMaterialsComponent;
  let fixture: ComponentFixture<StudentMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

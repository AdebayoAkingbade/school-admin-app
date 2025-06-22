import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuardianInfoComponent } from './parent-guardian-info.component';

describe('ParentGuardianInfoComponent', () => {
  let component: ParentGuardianInfoComponent;
  let fixture: ComponentFixture<ParentGuardianInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentGuardianInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentGuardianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

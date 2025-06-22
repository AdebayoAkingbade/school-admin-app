import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ParentGuardianInfoComponent } from './parent-guardian-info/parent-guardian-info.component';
import { DocumentInfoComponent } from './document-info/document-info.component';
import { PreviousSchoolInfoComponent } from './previous-school-info/previous-school-info.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { CustomFieldComponent } from './custom-field/custom-field.component';

@Component({
  selector: 'app-student-admission',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PersonalInfoComponent,
    ParentGuardianInfoComponent,
    DocumentInfoComponent,
    PreviousSchoolInfoComponent,
    OtherInfoComponent,
    CustomFieldComponent
  ],
  templateUrl: './student-admission.component.html',
  styleUrl: './student-admission.component.css',
})
export class StudentAdmissionComponent implements OnInit {
  currentTab: string = 'personal'; // default tab

  setTab(tab: string): void {
    this.currentTab = tab;
  }

  ngOnInit() {}
}

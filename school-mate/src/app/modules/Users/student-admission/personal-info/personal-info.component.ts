import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {
form!: FormGroup;
  selectedTab = 'personalInfo';
  savedSections = {
    academicInfo: false,
    personalInfo: false,
    contactInfo: false
  };
  

constructor(private fb: FormBuilder){

}

get academicFormControls() {
  return this.form.controls;
}


ngOnInit() {
  this.form = this.fb.group({
    academicInfo: this.fb.group({
      academicYear: ['', Validators.required],
      section: ['', Validators.required],
      class: ['', Validators.required],
      admissionDate: ['', Validators.required],
      admissionNumber: ['', Validators.required]
    }),
    personalInfo: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      religion: ['', Validators.required],
      file: [null, Validators.required]
    }),
    contactInfo: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      currentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required]
    }),
    medicalReport: this.fb.group({
      bloodGroup: ['', Validators.required],
      genotype: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required]
    })
  });
}

allSectionsSaved(): boolean {
  return this.savedSections.academicInfo &&
         this.savedSections.personalInfo &&
         this.savedSections.contactInfo;
}

saveSection(section: keyof typeof this.savedSections): void {
  this.savedSections[section] = true;
}

submitMedicalReport() {
  if (this.form.get('medicalReport')?.valid && this.allSectionsSaved()) {
    
    this.showNextTab('parentsGuardiansInfo');
  }
}
showNextTab(tab: string) {
  this.selectedTab = tab;
}

onFileSelect(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
  }
}
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-document-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './document-info.component.html',
  styleUrl: './document-info.component.css',
})
export class DocumentInfoComponent {
  form!: FormGroup;
  selectedFileName = '';
  selectedTab = 'personalInfo';
  savedSections = {
    parentInfo: false,
    guardianInfo: false,
  };

  constructor(private fb: FormBuilder) {}

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
        admissionNumber: ['', Validators.required],
      }),
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        religion: ['', Validators.required],
        file: [null, Validators.required],
      }),
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        currentAddress: ['', Validators.required],
        permanentAddress: ['', Validators.required],
      }),
      medicalReport: this.fb.group({
        bloodGroup: ['', Validators.required],
        genotype: ['', Validators.required],
        height: ['', Validators.required],
        weight: ['', Validators.required],
      }),
    });
  }

  allSectionsSaved(): boolean {
    return this.savedSections.parentInfo && this.savedSections.guardianInfo;
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

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFileName = file.name;
      console.log('Selected file:', file.name);
    }
  }
}

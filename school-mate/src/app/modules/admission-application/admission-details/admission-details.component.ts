import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admission-details.component.html',
  styleUrl: './admission-details.component.css'
})
export class AdmissionDetailsComponent implements OnInit {
  applicationData: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.applicationData = nav?.extras?.state?.['data'];

    if (this.applicationData) {
      this.applicationData = {
        ...this.applicationData,
        profileId: '74676887654',
        submittedDate: '21–03–88',
        appliedClass: 'JSS 1',
        documents: [
          'Birthday certificate',
          'First School Leaving Cert.',
          'NIN Number/card',
          'Passport Photo',
        ],
      };
    }
  }

  ngOnInit() {
    if (!this.applicationData) {
      this.router.navigate(['/dashboard']);
    }
  }
}

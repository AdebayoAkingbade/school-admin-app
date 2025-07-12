import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedTableComponent } from '../../@shared/shared-table/shared-table.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission-application',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './admission-application.component.html',
  styleUrl: './admission-application.component.css'
})
export class AdmissionApplicationComponent {
  admission!: any[];
  showActionBtn: boolean = true;
  criteria = {
    dateFrom: '',
    dateTo: '',
    source: '',
    status: ''
  };
  selectedFile: File | null = null;
  selectedFileName = '';
  tableColumns = [
    { field: 'index', headerKey: 'No.' },
    { field: 'name', headerKey: 'Name' },
    { field: 'phone', headerKey: 'Phone' },
    { field: 'appNumber', headerKey: 'Aplication Number' },
    { field: 'appStatus', headerKey: 'Application Status' },
    { field: 'appDate', headerKey: 'Application Date' },
  ];
  fileInput!: HTMLInputElement;



  ngOnInit(): void {
      this.loadQuery()
  }

  constructor(private router: Router) {}


  loadQuery(): void {
    this.admission = [
      {
        index: 1,
        name: 'Akindele Maurice',
        document: 'Wassce',
        phone: '080123456789',
        appNumber: '3467665789',
        appStatus: 'N/A',
        appDate: '21 Feb, 2003',
      },
      {
        index: 2,
        name: 'Akindele Maurice',
        document: 'Wassce',
        phone: '080123456789',
        appNumber: '3467665789',
        appStatus: 'N/A',
        appDate: '21 Feb, 2003',
      },
      {
        index: 3,
        name: 'Akindele Maurice',
        document: 'Wassce',
        phone: '080123456789',
        appNumber: '3467665789',
        appStatus: 'N/A',
        appDate: '21 Feb, 2003',
      },
      {
        index: 4,
        name: 'Akindele Maurice',
        document: 'Wassce',
        phone: '080123456789',
        appNumber: '3467665789',
        appStatus: 'N/A',
        appDate: '21 Feb, 2003',
      },
      {
        index: 5,
        name: 'Akindele Maurice',
        document: 'Wassce',
        phone: '080123456789',
        appNumber: '3467665789',
        appStatus: 'N/A',
        appDate: '21 Feb, 2003',
      },
    ];
  }

  goToDetails(row: any): void {
    this.router.navigate(['/admission-details'], {
      state: { data: row },
    });
  }
}

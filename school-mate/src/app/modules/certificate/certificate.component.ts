import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedTableComponent } from '../../@shared/shared-table/shared-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {
  adminQuery!: any[];
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
    { field: 'document', headerKey: 'Document' },
    // { field: 'complaintType', headerKey: 'Complaint Type' },
    // { field: 'phone', headerKey: 'Phone' },
    { field: 'date', headerKey: 'Date' },
  ];
  fileInput!: HTMLInputElement;



  ngOnInit(): void {
      this.loadQuery()
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }


  loadQuery(): void {
    this.adminQuery = [
      {
        index: 1,
        name: 'Akindele Maurice',
        document: 'Wassce',
        // source: 'PTA',
        // phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 2,
        name: 'Akindele Maurice',
        document: 'Wassce',
        // source: 'PTA',
        // phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 3,
        name: 'Akindele Maurice',
        document: 'Wassce',
        // source: 'PTA',
        // phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 4,
        name: 'Akindele Maurice',
        document: 'Wassce',
        // source: 'PTA',
        // phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 5,
        name: 'Akindele Maurice',
        document: 'Wassce',
        // source: 'PTA',
        // phone: '080123456789',
        date: '21 Feb, 2003',
      },
    ];
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFileName = file.name;
      console.log('Selected file:', file.name);
    }
  }
}

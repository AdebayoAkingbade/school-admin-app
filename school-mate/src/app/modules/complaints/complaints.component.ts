import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedTableComponent } from '../../@shared/shared-table/shared-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent {
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
    { field: 'complaintBy', headerKey: 'Complaint By' },
    { field: 'complaintType', headerKey: 'Complaint Type' },
    { field: 'phone', headerKey: 'Phone' },
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
        complaintBy: 'Akindele Maurice',
        complaintType: 'Bully',
        source: 'PTA',
        phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 2,
        complaintBy: 'Akindele Maurice',
        complaintType: 'Bully',
        source: 'PTA',
        phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 3,
        complaintBy: 'Akindele Maurice',
        complaintType: 'Bully',
        source: 'PTA',
        phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 4,
        complaintBy: 'Akindele Maurice',
        complaintType: 'Bully',
        source: 'PTA',
        phone: '080123456789',
        date: '21 Feb, 2003',
      },
      {
        index: 5,
        complaintBy: 'Akindele Maurice',
        complaintType: 'Bully',
        source: 'PTA',
        phone: '080123456789',
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

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedTableComponent } from '../../@shared/shared-table/shared-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visitors-book',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './visitors-book.component.html',
  styleUrl: './visitors-book.component.css'
})
export class VisitorsBookComponent implements OnInit {
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
    { field: 'phone', headerKey: 'Phone' },
    { field: 'numberOfPerson', headerKey: 'No of Person' },
    { field: 'purpose', headerKey: 'Purpose' },
    { field: 'date', headerKey: 'Date' },
    { field: 'timeIn', headerKey: 'Time In' },
    { field: 'timeOut', headerKey: 'Time Out' },
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
        phone: '080123456789',
        numberOfPerson: '2',
        purpose: 'PTA',
        date: '21 Feb, 2003',
        timeIn: '9:00 am',
        timeOut: '2:30 pm',
      },
      {
        index: 2,
        name: 'Akindele Maurice',
        phone: '080123456789',
        numberOfPerson: '2',
        purpose: 'PTA',
        date: '21 Feb, 2003',
        timeIn: '9:00 am',
        timeOut: '2:30 pm',
      },
      {
        index: 3,
        name: 'Akindele Maurice',
        phone: '080123456789',
        numberOfPerson: '2',
        purpose: 'PTA',
        date: '21 Feb, 2003',
        timeIn: '9:00 am',
        timeOut: '2:30 pm',
      },
      {
        index: 4,
        name: 'Akindele Maurice',
        phone: '080123456789',
        numberOfPerson: '2',
        purpose: 'PTA',
        date: '21 Feb, 2003',
        timeIn: '9:00 am',
        timeOut: '2:30 pm',
      },
      {
        index: 5,
        name: 'Akindele Maurice',
        phone: '080123456789',
        numberOfPerson: '2',
        purpose: 'PTA',
        date: '21 Feb, 2003',
        timeIn: '9:00 am',
        timeOut: '2:30 pm',
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

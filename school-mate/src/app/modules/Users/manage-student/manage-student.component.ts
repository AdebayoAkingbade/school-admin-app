import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedTableComponent } from '../../../@shared/shared-table/shared-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-student',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.css'
})
export class ManageStudentComponent {
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
      { field: 'adNumber', headerKey: 'Admission Number' },
      { field: 'dob', headerKey: 'Date of Birth' },
      { field: 'class', headerKey: 'Class' },
      { field: 'gender', headerKey: 'Gender' },
      { field: 'phone', headerKey: 'Phone Number' },
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
          adNumber: '2012/AS78FB/ADMIN',
          dob: '12/12/1850',
          class: 'S.S.S 2',
          gender: 'Male',
          phone: '080123456789',
        },
        {
          index: 2,
          adNumber: '2012/AS78FB/ADMIN',
          dob: '12/12/1850',
          class: 'S.S.S 2',
          gender: 'Male',
          phone: '080123456789',
        },
        {
          index: 3,
          adNumber: '2012/AS78FB/ADMIN',
          dob: '12/12/1850',
          class: 'S.S.S 2',
          gender: 'Female',
          phone: '080123456789',
        },
        {
          index: 4,
          adNumber: '2012/AS78FB/ADMIN',
          dob: '12/12/1850',
          class: 'S.S.S 2',
          gender: 'Female',
          phone: '080123456789',
        },
        {
          index: 4,
          adNumber: '2012/AS78FB/ADMIN',
          dob: '12/12/1850',
          class: 'S.S.S 2',
          gender: 'Male',
          phone: '080123456789',
        },
      ];
    }
}

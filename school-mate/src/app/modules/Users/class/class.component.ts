import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedTableComponent } from '../../../@shared/shared-table/shared-table.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {
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
        { field: 'index', headerKey: 'Class.' },
        { field: 'grade', headerKey: 'Grade' },
        { field: 'noOftudents', headerKey: 'No of Students' }
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
            grade: 'S.S.S 1',
            noOftudents: '45'
          },
          {
            index: 2,
            grade: 'S.S.S 2',
            noOftudents: '45'
          },
          {
            index: 3,
            grade: 'S.S.S 3',
            noOftudents: '45'
          }
        ];
      }
}

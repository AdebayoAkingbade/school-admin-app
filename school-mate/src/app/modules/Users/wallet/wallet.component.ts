import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedTableComponent } from '../../../@shared/shared-table/shared-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
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
          { field: 'method', headerKey: 'Method' },
          { field: 'status', headerKey: 'Status' },
          { field: 'remark', headerKey: 'Remark' }
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
              name: 'Elder. Austin Wole',
              method: 'Bank Transfer',
              status: 'Completed',
              remark: 'Fees'
            },
            {
              index: 2,
              name: 'Elder. Austin Wole',
              method: 'USSD',
              status: 'Pending',
              remark: 'Fees'
            },
            {
              index: 3,
              name: 'Elder. Austin Wole',
              method: 'Bank Transfer',
              status: 'Completed',
              remark: 'Fees'
            }
          ];
        }
}

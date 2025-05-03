import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedTableComponent } from '../../@shared/shared-table/shared-table.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-query',
  standalone: true,
  imports: [CommonModule, SharedTableComponent, FormsModule],
  templateUrl: './admin-query.component.html',
  styleUrl: './admin-query.component.css',
})
export class AdminQueryComponent implements OnInit {
  adminQuery!: any[];
  showActionBtn: boolean = true;
  criteria = {
    dateFrom: '',
    dateTo: '',
    source: '',
    status: ''
  };
  tableColumns = [
    { field: 'index', headerKey: 'No.' },
    { field: 'name', headerKey: 'Name' },
    { field: 'phone', headerKey: 'Phone' },
    { field: 'source', headerKey: 'Source' },
    { field: 'queryDate', headerKey: 'Query Date' },
    { field: 'nextFollowUpDate', headerKey: 'Next Follow Up-date' },
    { field: 'lastFollowUpDate', headerKey: 'Last Follow Up-Date' },
  ];

  ngOnInit(): void {
      this.loadQuery()
  }


  loadQuery(): void {
    this.adminQuery = [
      {
        index: 1,
        name: 'Gerald Mophry',
        phone: '080123456789',
        source: 'Chem',
        queryDate: '9 Mar, 2002',
        nextFollowUpDate: '21 Feb, 2003',
        lastFollowUpDate: '21 Dec, 2004',
      },
      {
        index: 2,
        name: 'Gerald Mophry',
        phone: '080123456789',
        source: 'Chem',
        queryDate: '9 Mar, 2002',
        nextFollowUpDate: '21 Feb, 2003',
        lastFollowUpDate: '21 Dec, 2004',
      },
      {
        index: 3,
        name: 'Gerald Mophry',
        phone: '080123456789',
        source: 'Chem',
        queryDate: '9 Mar, 2002',
        nextFollowUpDate: '21 Feb, 2003',
        lastFollowUpDate: '21 Dec, 2004',
      },
      {
        index: 4,
        name: 'Gerald Mophry',
        phone: '080123456789',
        source: 'Chem',
        queryDate: '9 Mar, 2002',
        nextFollowUpDate: '21 Feb, 2003',
        lastFollowUpDate: '21 Dec, 2004',
      },
      {
        index: 5,
        name: 'Gerald Mophry',
        phone: '080123456789',
        source: 'Chem',
        queryDate: '9 Mar, 2002',
        nextFollowUpDate: '21 Feb, 2003',
        lastFollowUpDate: '21 Dec, 2004',
      },
    ];
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ListFilterPipe } from '../pipes/list-filter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [
    TableModule,
    ListFilterPipe,
    CommonModule,
  ],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.css'
})
export class SharedTableComponent {
  @Input() tableData: any[] = [];
  @Input() showActionBtn: boolean = false;
  @Input() showModifyBtn: boolean = false;
  @Input() showDeleteBtn: boolean = false;
  @Input() showRejectBtn: boolean = false;
  @Input() showApproveBtn: boolean = false;
  @Input() columns: { field: string; headerKey: string }[] = [];
  @Input() searchedKeyword: string = '';
  @Input() tableTitle: string = 'Query List'
  @Output() actionRow = new EventEmitter<any>();
  @Output() approveRow = new EventEmitter<any>();
  @Output() modifyRow = new EventEmitter<any>();
  @Output() rejectRow = new EventEmitter<any>();
  @Output() deleteRow = new EventEmitter<any>();

  deleteTarget: any = null;
  actionTarget: any = null;
  modifyTarget: any = null;
  approveTarget: any = null;
  rejectTarget: any = null;

  modalVisible: boolean = false;

  constructor() {}

  // getTranslatedHeader(key: string): string {
  //   return this.translate.instant(key);
  // }

  showDeleteModal(row: any) {
    this.deleteTarget = row;
    this.modalVisible = true;
  }

  showRejectModal(row: any) {
    this.rejectTarget = row;
    this.rejectRow.emit(this.rejectTarget);
  }

  showApproveModal(row: any) {
    this.approveTarget = row;
    this.approveRow.emit(this.approveTarget);
  }

  showModifyModal(row: any) {
    this.modifyTarget = row;
    this.modifyRow.emit(this.modifyTarget);
  }

  showActionModal(row: any) {
    this.actionTarget = row;
    this.actionRow.emit(this.actionTarget);
  }

  cancelDelete() {
    this.modalVisible = false;
    this.deleteTarget = null;
  }

  confirmDelete() {
    this.deleteRow.emit(this.deleteTarget);
    this.modalVisible = false;
    this.deleteTarget = null;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() itemSelected = new EventEmitter<string>();

  dropdowns: { [key: string]: boolean } = {
    dashboard: false,
    announcements: false,
    admin: false,
  };

  toggleDropdown(section: string): void {
    this.dropdowns[section] = !this.dropdowns[section];
  }
}

import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import { ToastMessage, ToastService } from '../../@services/toast.service';

@Component({
  selector: 'app-toast-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-component.component.html',
  styleUrl: './toast-component.component.css'
})
export class ToastComponentComponent implements OnInit {

  toasts: ToastMessage[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toastState$.subscribe((toast) => {
      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts.shift();
      }, 5000);
    });
  }
}

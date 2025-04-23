import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
    private toastSubject = new Subject<ToastMessage>();
    toastState$ = this.toastSubject.asObservable();

    show(message: string, type: ToastMessage['type'] = 'success') {
        this.toastSubject.next({ message, type });
    }
}
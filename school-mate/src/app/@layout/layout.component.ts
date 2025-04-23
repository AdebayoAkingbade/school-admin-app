import {Component, OnInit} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import { ToastComponentComponent } from '../@shared/toast-component/toast-component.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


interface RiskItem {
  id: number;
  impactCriteria: string;
  likelihood: string;
  inherentRisk: string;
  status?: string;
}

@Component({
  selector: "app-@layout",
  standalone: true,
    imports: [
        DialogModule,
        TableModule,
        HeaderComponent,
        SidebarComponent,
        // FooterComponent,
        RouterOutlet,
        // ToastComponentComponent
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
        
    }

  approveRisk(risk: RiskItem) {
    risk.status = "Approved";
  }

}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseGrid } from '@app/helpers/basegrid';
import { DecomeccOrder } from '@app/models/decomecc-order.model';
import { DecomeccOrderService } from '@app/services/decomecc-order.service';
import { DxButtonModule, DxDataGridComponent, DxDataGridModule, DxSwitchModule, DxToolbarModule } from 'devextreme-angular';


@Component({
  selector: 'app-view-orders',
  imports: [CommonModule, DxButtonModule, DxDataGridModule, DxToolbarModule, DxSwitchModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.scss'
})
export class  ViewOrdersComponent extends BaseGrid implements OnInit, AfterViewInit{

  orders: DecomeccOrder[] = [];
  private router = inject(Router);
  private orderService= inject(DecomeccOrderService);
  caption='Decomecc orders';
 

  constructor(){
    super();
    this.showColumnLinesSwitch=true;
    this.showGridCaption=false;
  }

  ngOnInit(): void {
    this.orders = this.orderService.getAllOrders();

  }
  ngAfterViewInit(): void {

  }

  loadOrders(): void {
    this.orders = this.orderService.getAllOrders();
  }

  editRecord = (e:any) => {
    const url = 'decomecc/new';
    this.router.navigate([url,e.row.data.orderNumber]);
  }

  deleteRecord = (e:any) => {
  }




}

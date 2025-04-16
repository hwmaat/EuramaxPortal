import { CommonModule } from '@angular/common';
import { Component, inject, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DecomeccOrder, DecomeccOrderLine } from '@app/models/decomecc-order.model';
import { DecomeccOrderService } from '@app/services/decomecc-order.service';
import { DxButtonModule, DxDataGridComponent, DxDataGridModule, DxToolbarModule } from 'devextreme-angular';
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import saveAs from "file-saver";

@Component({
  selector: 'app-order-lines',
  imports: [CommonModule, DxButtonModule, DxDataGridModule, DxToolbarModule],
  templateUrl: './order-lines.component.html',
  styleUrl: './order-lines.component.scss'
})
export class OrderLinesComponent {
  @Input() orderNumber='';
  orderLines: DecomeccOrderLine[] = [];
  private router = inject(Router);
  private orderService= inject(DecomeccOrderService);
  hoverIndex = -1;
  @ViewChild(DxDataGridComponent, {static: false}) gridx: DxDataGridComponent;
  
  constructor(){}

  ngOnInit(): void {
    this.loadOrderLines()

  }

  loadOrderLines(): void {
    this.orderLines = this.orderService.getOrderLines('903336');
  }
  
  onCellHoverChanged = (e:any) => {
    if(e.rowType==="data"){
      this.hoverIndex = e.rowIndex;
    } else {
      this.hoverIndex = -1;
    }
  }

  getRowIndex(data: { rowType: string; key: any; }): number {
    if (data.rowType==="data")
      return this.gridx.instance.getRowIndexByKey(data.key);
    else
      return 0;
  }

  editRecord = (e:any) => {
    const url = 'decomecc/new';
    this.router.navigate([url,e.row.data.orderNumber]);
  }

  deleteRecord = (e:any) => {

  }

  onExporting(e: any, sheetName:string) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(sheetName);

  exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), sheetName+'.xlsx');
        });
      });
      e.cancel = true;
  }

}

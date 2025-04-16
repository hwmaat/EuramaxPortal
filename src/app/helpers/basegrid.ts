import { Component, ViewChild } from "@angular/core";
import { WithDestroy } from "./WithDestroy";
import { DxButtonModule, DxDataGridComponent, DxDataGridModule, DxSwitchModule } from "devextreme-angular";
import { CommonModule } from "@angular/common";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import saveAs from "file-saver";

@Component({
    template: '',
    standalone:true,
    imports:[CommonModule, DxSwitchModule, DxButtonModule, DxDataGridModule]
  })

export class BaseGrid extends WithDestroy() {
@ViewChild(DxDataGridComponent, {static: false}) gridx: DxDataGridComponent;
rowFilter:boolean = false;
columnLines:boolean = false;
subTotals: boolean = false;
headerFilter:boolean = false;
pagingEnabled = true;
expanded = true;
hoverIndex = -1;
focusedRowIndex = -1;
colorMode='';

public info = ' ';

public showclearFilterSwitch:boolean=true;
public showColumnLinesSwitch:boolean=true;
public showHeaderFilterSwitch:boolean=true;
public showRowFilterSwitch:boolean=true;
public showGridCaption:boolean=false;
public showAddButton:boolean = false;
public showRefreshButton:boolean  = true;
public showSubTotalsSwitch:boolean = false;
public showTreeButton:boolean = false;
public addButtonLocation:string='after';
public refreshButtonLocation:string='after';

headerfilterText='heasder filter';
rowfilterText = 'row filter';
clearFilterText = 'clear filter';
columnLinesText = 'column lines';

constructor() {
    super();
    
    }

    onToolbarPreparing(e:any) {
      e.toolbarOptions.items.unshift(
        {
          location: 'before',
          template: 'headercaption',
          visible: this.showGridCaption
        },
        {
          location: 'before',
          widget: 'dxButton',
          cssClass: 'informer',
          visible: this.showTreeButton,
          options: {
                    icon: 'mdi mdi-expand-all',
                    stylingMode: 'text',
                    onClick: this.expandAll.bind(this),
                    visible: true
                  }
        },
        {
          location: 'after',
          text: "subtotals",
          widget: 'dxSwitch',
          cssClass: 'informer infcheckbox',
          visible: this.showSubTotalsSwitch,
          options: {
            value: this.subTotals,
            onValueChanged: this.ShowSubtotals.bind(this),
            hint: 'show subtotals',
            visible: this.showSubTotalsSwitch
          }
        },
        {
          location: 'after',
          text: this.columnLinesText,
          widget: 'dxSwitch',
          cssClass: 'informer infcheckbox',
          visible: this.showColumnLinesSwitch,
          options: {
            value: this.columnLines,
            onValueChanged: this.ShowColumnLines.bind(this),
            hint: 'column lines',
            visible: this.showColumnLinesSwitch
          }
        },
        {
          location: 'after',
          text: this.headerfilterText,
          widget: 'dxSwitch',
          cssClass: 'informer infcheckbox',
          visible: this.showHeaderFilterSwitch,
          options: {
            value: this.headerFilter,
            onValueChanged: this.ShowHeaderFilter.bind(this),
            hint: 'header filters',
            visible: this.showHeaderFilterSwitch
          }
        },
        {
          location: 'after',
          text: this.rowfilterText,
          widget: 'dxSwitch',
          cssClass: 'informer infcheckbox',
          visible:  this.showRowFilterSwitch,
          options: {
            value: this.rowFilter,
            onValueChanged: this.ShowRowFilter.bind(this),
            hint: 'row filters',
            visible: this.showRowFilterSwitch
          }
        },
        {
          location: 'after',
          text: this.clearFilterText,
          
          widget: 'dxButton',
          cssClass: 'informer infcheckbox',
          visible: this.showclearFilterSwitch,
          options: {
                    icon: 'clear',
                    stylingMode: 'text',
                    onClick: this.clearFilterA.bind(this),
                    hint: 'reset filters',
                    visible: this.showclearFilterSwitch
                  }
        },
        {
          location: this.addButtonLocation,
          widget: 'dxButton',
          cssClass: 'informer',
          visible: this.showAddButton,
          options: {
                    icon: 'add',
                    stylingMode: 'text',
                    onClick: this.addRecord.bind(this),
                    hint: 'add new record',
                    visible: this.showAddButton
                  }
        },
        {
          location: this.refreshButtonLocation,
          widget: 'dxButton',
          cssClass: 'informer',
          visible: this.showRefreshButton,
          options: {
                    icon: 'refresh',
                    stylingMode: 'text',
                    onClick: this.refresh.bind(this),
                    hint: 'reload data',
                    visible: this.showRefreshButton
                  }
        }
        );
    }
    public addRecord(e: any){

    }
    public refresh(e:any) {
  
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

    //Toolbar switches ==================================================================
    ShowColumnLines = (e:any) => {
      this.columnLines = e.value;
      this.gridx.instance.option('showColumnLines', e.value);
    }

    clearFilterA= () => {
      this.gridx.instance.clearFilter();
    }
  
    ShowSubtotals = (e:any) => {
      this.subTotals = e.value;
    }
  
    ShowHeaderFilter= (e:any) => {
      this.headerFilter=e.value;
      this.gridx.instance.option('headerFilter.visible', e.value);
    }
  
    ShowRowFilter = (e:any) => {
      this.rowFilter=e.value;
      this.gridx.instance.option('filterRow.visible', e.value);
    }
  
    showExportButton(e: boolean) {
      this.gridx.instance.option('export.enabled',e);
    }
    showSearchPanel(e: boolean) {
      this.gridx.instance.option('searchPanel.visible',e);
    }
    showGroupPanel(e: boolean) {
      this.gridx.instance.option('groupPanel.visible',e);
    }

    expandAll(){
      this.expanded = !this.expanded;
      if (this.expanded) {
        this.gridx.instance.expandAll();
      }
      if (!this.expanded) {
        this.gridx.instance.collapseAll();
      }
    }  

    //events=============================================================================
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



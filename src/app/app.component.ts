import { Component } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import DataGrid from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    DataGrid.defaultOptions({
      options: {
        allowColumnReordering: true,
        allowColumnResizing: true,
        columnResizingMode: 'widget',
        showBorders: false,
        showColumnLines: false,
        rowAlternationEnabled: true,
        columnAutoWidth: true,
        hoverStateEnabled:true,
        focusedRowEnabled:true,
        columnHidingEnabled: true,
        selection: { mode: 'single' },
        paging: { enabled: false, pageSize: 15 },
        pager: {
          visible: false, showNavigationButtons: true,
          showPageSizeSelector: true, allowedPageSizes: [5, 10, 15, 20, 25, 100],
          showInfo: true
        },
        editing: { mode: 'cell', allowUpdating: false, allowDeleting: false, allowAdding: false},
        sorting: { mode: 'multiple' },
        grouping: { contextMenuEnabled: true},
        columnChooser: { enabled: false, mode: 'dragAndDrop' },
        searchPanel: { visible: true },
        groupPanel: { visible: true },
        focusedRowIndex: 0,
        loadPanel: { enabled: false },
        scrolling: {mode: 'standard'},
        export: {enabled: false, allowExportSelectedData:true}
      }
    } );
  }

}
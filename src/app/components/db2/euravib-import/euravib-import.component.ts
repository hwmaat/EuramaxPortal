import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EuravibImport } from '@app/models/EuravibImport.model';
import { VibPagedResult } from '@app/models/VibPagedResult.model';
import { ApiService } from '@app/services/ApiService.service';
import { DxButtonModule, DxDataGridModule, DxToolbarModule } from 'devextreme-angular';

@Component({
  selector: 'app-euravib-import',
  imports: [CommonModule, DxButtonModule, DxDataGridModule, DxToolbarModule],
  templateUrl: './euravib-import.component.html',
  styleUrl: './euravib-import.component.scss'
})
export class EuravibImportComponent {
  private api = inject(ApiService);
  loading = false;
  euravib_import: EuravibImport[];
  page = 1;
  pageSize = 500;
  totalCount = 0;
  sortColumn = 'entry_Date';
  sortDirection: 'asc' | 'desc' = 'desc';
  filterText = '';
  statusFilter = '';

  ngOnInit(): void {
    this.loadData();
  }
 
  
  loadData(): void {
    this.loading = true;
    const body = {
      page: this.page,
      pageSize: this.pageSize,
      sortColumn: this.sortColumn,
      sortDirection: this.sortDirection,
      filter: this.filterText,
      status: ''
    };

    this.api.postPaged<VibPagedResult<EuravibImport>>('Db2euravib/paged', body).subscribe({
      next: result => {
        if (result.status === 'success') {
          console.log('manage-euravib.component ==> procname', result);
          this.euravib_import = result.records;
          this.totalCount = result.totalRecords;
        } else {
          this.euravib_import = [];
          this.totalCount = 0;
          console.log('manage-euravib.component ==> procname', result);
          console.error('Euravib paging failed:', result.message);
          // Optionally show a snackbar or message
        }
        this.loading = false;
      },
      error: err => {
        console.error('HTTP error while loading Euravib:', err);
        this.loading = false;
      }
    });
  }

}

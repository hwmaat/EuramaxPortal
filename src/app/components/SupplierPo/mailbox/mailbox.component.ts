import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GMessage, B2BProcessResult } from '@app/models/gmail.model';
import { ApiService } from '@app/services/ApiService.service';

@Component({
  selector: 'app-mailbox',
  imports: [CommonModule],
  templateUrl: './mailbox.component.html',
  styleUrl: './mailbox.component.scss'
})
export class MailboxComponent {
  messages: GMessage[] = [];
  viewMessages: any[] = [];

  page = 1;
  pageSize = 10;
  totalCount = 0;

  loading = false;
  filterText = '';
  statusFilter = '';
  statusOptions = ['new','seen', 'no-data', 'failed', 'processed'];

  displayedColumns: string[] = ['attachments', 'status', 'edit'];

  constructor(private api: ApiService) {
    this.loadMessages();
  }

  loadMessages(): void {
    this.loading = true;
    this.api.get<any>(`b2bgmail/b2bmessages?page=${this.page}&pageSize=${this.pageSize}&search=${this.filterText}&status=${this.statusFilter}`)
      .subscribe({
        next: res => {
          this.messages = res.data ?? [];
          this.totalCount = res.totalCount ?? 0;
          this.page = res.pageNumber ?? this.page;
          this.pageSize = res.pageSize ?? this.pageSize;

          this.viewMessages = [];

          this.messages.forEach((msg, index, arr) => {
            const isFirst = index === 0 || msg.gmailId !== arr[index - 1].gmailId;

            if (isFirst) {
              this.viewMessages.push({
                ...msg,
                isGroupHeader: true
              });
            }

            this.viewMessages.push({
              ...msg,
              isGroupHeader: false
            });
          });

          this.loading = false;
        },
        error: err => {
          this.loading = false;
        }
      });
  }

}

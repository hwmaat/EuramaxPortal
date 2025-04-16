import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '@app/services/ApiService.service';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-zenya-search',
  imports: [DxTextBoxModule, DxButtonModule],
  templateUrl: './zenya-search.component.html',
  styleUrl: './zenya-search.component.scss'
})
export class ZenyaSearchComponent implements OnInit{
  query = '';
  result = signal<any | null>(null);
  isLoading = signal(false);
  error = signal<string | null>(null);
  searchText = '';
  private api = inject(ApiService);
  
  constructor(){}

  ngOnInit(): void {
  }
  onSearchClick = () => {
    this.isLoading.set(true);
    this.result.set(null);
    this.error.set(null);

    this.api.searchZenya<any>({ title: this.query, folderId: '265' }).subscribe({
      next: (res) => {
        this.result.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error:', err);
        this.error.set('Er is een fout opgetreden bij het zoeken.');
        this.isLoading.set(false);
      }
    });
  };

}

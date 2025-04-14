import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { Globals } from '@app/services/globals.service';


@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderComponent {
  private globals = inject(Globals);
  title$ = this.globals.settings$.pipe(map(s => s.title));



}
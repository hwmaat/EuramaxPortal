import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Globals } from '@app/services/globals.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  settings$ = inject(Globals).settings$;
}

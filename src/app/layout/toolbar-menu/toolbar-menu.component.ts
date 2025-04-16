import { Component, inject } from '@angular/core';
import { DxMenuModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';
import { menuItems } from '../menu-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-menu',
  standalone: true,
  imports: [DxMenuModule, RouterModule],
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {
  items = menuItems;
  private router = inject(Router);

  onItemClick(e: any) {
    console.log('toolbar-menu.onItemClick ==> e', e);
    if (e.itemData?.path) {
      
      this.router.navigateByUrl(e.itemData.path);
    }
  }
}

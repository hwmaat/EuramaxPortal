import { Routes } from '@angular/router';
import { DxoMapApiKeyComponent } from 'devextreme-angular/ui/map/nested';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'b2b/mailbox', loadComponent: () => import('./components/b2b/mailbox/mailbox.component').then(m => m.MailboxComponent) },
  { path: 'b2b/orders', loadComponent: () => import('./components/b2b/order-confirmations/order-confirmations.component').then(m => m.OrderConfirmationsComponent) },
  { path: 'decomecc/view', loadComponent: () => import('./components/decomecc/view-orders/view-orders.component').then(m => m.ViewOrdersComponent) },
  { path: 'decomecc/new/:orderNumber', loadComponent: () => import('./components/decomecc/new-order/new-order.component').then(m => m.NewOrderComponent) },
  { path: 'euravib/import', loadComponent: () => import('./components/db2/euravib-import/euravib-import.component').then(m => m.EuravibImportComponent) },
  { path: 'zenya/search', loadComponent: () => import('./components/zenya/zenya-search/zenya-search.component').then(m => m.ZenyaSearchComponent) }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { MenuTriggerComponent } from './menu-trigger/menu-trigger.component';
import { TableComponent } from './table/table.component';
import { NewMatElementComponent } from './table/new-mat-element/new-mat-element.component';
import { DetailElementComponent } from './table/detail-element/detail-element.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menutrigger', component: MenuTriggerComponent },
  { path: 'table', component: TableComponent },
  { path: 'table/new', component: NewMatElementComponent },
  { path: 'table/:id', component: DetailElementComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

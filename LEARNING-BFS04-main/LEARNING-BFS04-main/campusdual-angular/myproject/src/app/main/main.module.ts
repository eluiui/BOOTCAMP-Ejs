import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { MenuTriggerComponent } from './menu-trigger/menu-trigger.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { NewElementComponent } from './table/new-element/new-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewMatElementComponent } from './table/new-mat-element/new-mat-element.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DetailElementComponent } from './table/detail-element/detail-element.component';


@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    MenuTriggerComponent,
    TableComponent,
    NewElementComponent,
    NewMatElementComponent,
    DetailElementComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MainModule { }

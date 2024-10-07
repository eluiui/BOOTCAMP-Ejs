import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { SumadorComponent } from './sumador/sumador.component';
import { UpperCasePipe } from './upper-case.pipe';
import { NumberStringPipe } from './number-string.pipe';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CustomButtonComponent,
    SumadorComponent,
    UpperCasePipe,
    NumberStringPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CustomButtonComponent,
    SumadorComponent,
    UpperCasePipe,
    NumberStringPipe
  ]
})
export class ToolsModule { }

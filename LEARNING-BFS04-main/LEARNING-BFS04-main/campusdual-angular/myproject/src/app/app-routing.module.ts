import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumadorComponent } from './tools/sumador/sumador.component';
import { CustomButtonComponent } from './tools/custom-button/custom-button.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./main/main.module').then(x => x.MainModule) },
];

// {path:'',redirectTo:'sumador',pathMatch:'full'},
// {path:'sumador',component:SumadorComponent},
// {path:'sumador/button',component:CustomButtonComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'myproject';
  numero!:number;
  arrNumeros: number[] = [1,2,3,4,5];
  today: Date = new Date();


  sumaNumero(a:number,b:number):number{
    this.numero = a*b;
    return a+b;
  }

  showValue(num: number){
    console.log(num);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sumador',
  templateUrl: './sumador.component.html',
  styleUrls: ['./sumador.component.css']
})
export class SumadorComponent {
  totalValue: number = 0;
  sumButtons = [{text:"+1",color:"green", operation:1},
    {text:"+5",color:"green", operation:5},
    {text:"-1",color:"red", operation:-1},
    {text:"-5",color:"red", operation:-5}];


    addValue(newValue: number){
      this.totalValue+=newValue;
    }
}

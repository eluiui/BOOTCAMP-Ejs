import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {

  @Input() customName!: string;
  @Input() customStyle!: string;

  @Input() customValue!: number;
  @Output() returnValueAction = new EventEmitter<number>();

  callAction(){
    this.returnValueAction.emit(this.customValue);
  }
}

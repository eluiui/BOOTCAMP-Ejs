import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ElementsService, PeriodicElement } from 'src/app/elements.service';

@Component({
  selector: 'app-new-mat-element',
  templateUrl: './new-mat-element.component.html',
  styleUrls: ['./new-mat-element.component.css']
})
export class NewMatElementComponent {

  element: PeriodicElement = new PeriodicElement();

  constructor(private location: Location,
    private elementsService: ElementsService) { }

    add() {
      this.elementsService.addElement(this.element);
      this.location.back();
    }

}

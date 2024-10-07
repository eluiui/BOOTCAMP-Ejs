import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ElementsService, PeriodicElement } from 'src/app/elements.service';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent {
  constructor(private location: Location,
    private formBuilder: FormBuilder,
    private elementsService: ElementsService) { }

    checkoutForm: FormGroup = this.formBuilder.group(new PeriodicElement());

    return() {
      this.location.back();
    }
  
    onSubmit(): void {
      this.elementsService.addElement(this.checkoutForm.value);
      this.return();
    }
}

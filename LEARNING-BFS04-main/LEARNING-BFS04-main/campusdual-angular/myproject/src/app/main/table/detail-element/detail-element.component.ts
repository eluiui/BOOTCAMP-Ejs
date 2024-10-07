import { Component } from '@angular/core';
import { ElementsService, PeriodicElement } from 'src/app/elements.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-element',
  templateUrl: './detail-element.component.html',
  styleUrls: ['./detail-element.component.css']
})
export class DetailElementComponent {

  element!: PeriodicElement;

  constructor(private location: Location,
    private elementsService: ElementsService,
    private activatedRoute:ActivatedRoute){
      this.activatedRoute.params.subscribe(params=>{
        let id = params['id'];
        if(id){
          this.element=this.elementsService.getElement(id)
        }
      })

  }

  update() {
    this.elementsService.updateElement(this.element);
    this.location.back();
  }

}

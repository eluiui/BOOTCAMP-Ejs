import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class PeriodicElement {
  name: string = '';
  position: number = 0;
  weight: number = 0;
  symbol: string = '';
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  private elements: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject<PeriodicElement[]>([]);

  constructor() {
    this.initElements();
  }

  getElements():Observable<PeriodicElement[]>{
    return this.elements.asObservable();
  }

  getElement(position: number):PeriodicElement{
    let items = this.elements.getValue();
    return items.find(ele=>ele.position==position) as PeriodicElement;
  }

  initElements(){
    this.elements.next(ELEMENT_DATA);
  }

  clearElements(){
    this.elements.next([]);
  }

  addElement(item: PeriodicElement){
    let items = this.elements.getValue();
    items.push(item);
    this.elements.next(items);
  }

  updateElement(item: PeriodicElement){
    let items = this.elements.getValue();
    let pos = items.findIndex(ele=>ele.position==item.position);
    items.splice(pos,1,item);
    this.elements.next(items);
  }

}

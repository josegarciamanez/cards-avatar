import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() datos: any;
  isEdit: boolean = false;
  selectedDato?: any;
  show: { [key: number]: boolean } = {};
  public showModal: boolean = false;

  constructor() {}

  public openSelect(dato: any, index: number) {
    console.table(dato);
    console.log('INDEX: ', index);
    this.show[index] = !this.show[index];
  }

  public onShowModal(dato: any, index: number) {
    console.log(dato);
    this.show[index] = !this.show[index];
    this.showModal = true;
    setTimeout(() => {
      this.showModal = false;
    }, 2000);
  }
}

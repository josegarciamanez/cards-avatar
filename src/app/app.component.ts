import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Curso Angular - Fernando Herrera 2021';
  public numero: number = 0;
  public dataCard: object[];
  public isEdit: boolean;

  constructor() {
    this.dataCard = [
      {
        tipoCuenta: 'Cuenta de Valores',
        alias: 'Alias de Cuenta1',
        cuenta: '838372635461628436765',
      },
      {
        tipoCuenta: 'Cuenta de Efectivo',
        alias: 'Alias de Cuenta2',
        cuenta: '72613804481917491797',
      },
      {
        tipoCuenta: 'Cuenta de Valores',
        alias: 'Alias de Cuenta3',
        cuenta: '72613804481917491797',
      },
      {
        tipoCuenta: 'Cuenta de Pensiones',
        alias: 'Alias de Cuenta4',
        cuenta: '72613804481917491797',
      },
      {
        tipoCuenta: 'Cuenta de Valores',
        alias: 'Alias de Cuenta5',
        cuenta: '72613804481917491797',
      },
      {
        tipoCuenta: 'Cuenta de Efectivo',
        alias: 'Alias de Cuenta6',
        cuenta: '72613804481917491797',
      },
      {
        tipoCuenta: 'Cuenta de Valores',
        alias: 'Alias de Cuenta7',
        cuenta: '72613804481917491797',
      },
      {
        tipoCuenta: 'Cuenta de Pensiones',
        alias: 'Alias de Cuenta8',
        cuenta: '72613804481917491797',
      },
    ];
    console.table(this.dataCard);
    this.isEdit = false;
  }
}

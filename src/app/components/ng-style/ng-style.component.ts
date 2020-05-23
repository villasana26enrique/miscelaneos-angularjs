import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola Mundo... Esta es una etiqueta HTML
    </p>
    <button class="btn btn-primary mr-1" (click)="tamano = tamano + 5">
      <i class="fa fa-2x fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-2x fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 30;

  constructor() { }

  ngOnInit(): void {
  }

}

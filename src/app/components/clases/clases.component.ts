import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  clase = 'alert-danger';
  loading = false;
  /* Lo coloque any | object porque me daba error en el HTML
  si lo dejaba unicamente de tipo Object */
  propiedades: any | object = {
    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
}

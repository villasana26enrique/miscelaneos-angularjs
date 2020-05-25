import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    /* Se utiliza "parent" para obtener el valor que se pasa a la ruta Padre
    que en este caso es la ruta /user */
    this.route.parent.params.subscribe( params => {
      console.log('Ruta Hija (New User)');
      console.log(params);
    });
  }

  ngOnInit(): void {
  }

}

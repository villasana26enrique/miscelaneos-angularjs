import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      console.log('Ruta Padre');
      console.log(params);
    });
  }

  ngOnInit(): void {
  }

}

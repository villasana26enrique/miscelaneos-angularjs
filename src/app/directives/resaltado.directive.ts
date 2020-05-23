import { Directive, ElementRef , HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // Obtiene el valor que se envía desde el HTML
  @Input('appResaltado') nuevoColor: string;

  /* El ElementRef nos ayuda a obtener el elemento que tiene la directiva
  e interactuar con el. En este caso le cambiaremos el Backgrouund*/
  constructor( private el: ElementRef ) {
    console.log('Directiva Llamada');
  }

  /* El HostListener se utiliza para saber cuando se interactua con el
  Elemento HTML que tiene la directva. En este caso se utiliza mouseenter
  y mouseleave para saber cuando el mouse esta o no encima de el, para así
  aplicar un Hover.
  */
  @HostListener( 'mouseenter' ) mouseEntro() {
    this.resaltar( this.nuevoColor || 'yellow' );
  }

  @HostListener( 'mouseleave' ) mouseFuera() {
    this.resaltar( null );
  }

  private resaltar( color: string ) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ocultar: boolean = true;
  title = 'lifecycle';

  ocultarPagina(){
    this.ocultar = !this.ocultar
  }
}

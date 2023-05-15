import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListadoPersonajesComponent } from './components/listado-personajes/listado-personajes.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoPersonajesComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent,
    ListadoPersonajesComponent,
    AgregarPersonajeComponent

  ]
})
export class DbzModule { }

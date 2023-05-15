import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent implements OnInit {

  @Output() public emitirNuevoCaracter: EventEmitter<Character> = new EventEmitter();

  public caracter : Character = {
    name: '',
    power: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  imprimirCharacter():void{

    console.log(this.caracter);

    if(this.caracter.name.length === 0) return;

    this.emitirNuevoCaracter.emit({...this.caracter});
    this.caracter = {
      name : "",
      power: 0
    }
  }

}

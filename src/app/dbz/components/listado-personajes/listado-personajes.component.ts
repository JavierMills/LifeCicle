import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent implements OnInit {


  @Output() public eliminarCaracter: EventEmitter<string> = new EventEmitter();

  @Input() public characterList: Character[] =[];


  constructor() { }

  ngOnInit(): void {
  }

  eliminarRegistro(id? : string):void{
// si no hay id, no hacemos nada 
    if(!id) return;

    this.eliminarCaracter.emit(id)
  }




}

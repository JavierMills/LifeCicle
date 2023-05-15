import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
        id: uuid(),
        name: 'krillin',
        power: 9000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 90000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
];

addNuevoCaracter(caracter: Character):void{
  const newCaracter : Character = {
    // le decimos que en este nuevo objeto y esparcelas 
    id: uuid(), ...caracter
  }
  this.characters.push(newCaracter)
}

// elementoEliminar( id : number){
//   this.character.splice(id, 1);
deleteCaracterByiId(id: string){
  // regresa un nuevo arreglo y retorno lo que la condicion cumpla en true; 
  this.characters = this.characters.filter( caracter => caracter.id !== id);
}

  constructor() { }
}

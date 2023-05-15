import { Component, OnInit } from '@angular/core';
import { throws } from 'assert';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  constructor(private dbzServices:DbzService) { }

  ngOnInit(): void {
  }

  get characters() :Character []{
    return [...this.dbzServices.characters]
  }

  onDeleteCaracter( id : string): void{
    this.dbzServices.deleteCaracterByiId(id);
  }

  onNewCaracter(caracters : Character ){
   this.dbzServices.addNuevoCaracter(caracters);
  }
  

}

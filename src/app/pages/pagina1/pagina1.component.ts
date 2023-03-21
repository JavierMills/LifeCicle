import { Component, OnInit,OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
                                        AfterViewInit, AfterViewChecked, OnDestroy{


   segundos: number = 0;  
   
   timerSubscription!: Subscription;

  constructor() { 
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('changes');
  }
  ngAfterContentInit(): void {
   console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
   console.log('AfterContentChecket');
  }
  ngAfterViewInit(): void {
   console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
   console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  ngOnInit(): void {
    console.log('ngoInit');
   this.timerSubscription = interval(1000).subscribe(i => {
      this.segundos = i
    })
  }

  aceptar(){

  }


}

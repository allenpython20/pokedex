import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexDataService {

  public idGenerationSubject = new Subject<number>();
  public numberPokemon:number = 0;
  public nameGeneration:string = '';

  // Método para obtener el Subject como Observable
  getIdGenerationObservable() {
    return this.idGenerationSubject.asObservable();
  }

  // Método para actualizar el valor y notificar a los suscriptores
  updateIdGeneration(id: number) {
    this.idGenerationSubject.next(id);
  }


  constructor() { }
}

import { Component } from '@angular/core';
import { PokedexDataService } from 'src/app/services/pokedex-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pokedexService:PokedexDataService){

  }

  public idGeneration:number = 1;

  get numberPokemon():number{
    return this.pokedexService.numberPokemon;
  }

  get nameGeneration():string{
    return this.pokedexService.nameGeneration;
  }

  changeGeneration(cant:number){
    this.idGeneration = this.idGeneration + cant;
    this.pokedexService.updateIdGeneration(this.idGeneration)
  }

}

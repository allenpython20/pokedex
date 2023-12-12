import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pokemon, PokemonBasic } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnChanges{

  public id:string = '';
  @Input() pokemon?:PokemonBasic;
  @Input() pokemonFull?:Pokemon;
  @Input() selected:boolean = false;
  @Input() showArrow:boolean = false;
  @Output() eventSelectPokemon = new EventEmitter<string>();

  ngOnChanges(): void {
    if(this.pokemon && this.pokemon.url != ''){
 
      this.id = this.pokemon.url.substring(42,this.pokemon.url.length-1)
      
    }

    if(this.pokemonFull){
      this.id = this.pokemonFull.species.url.substring(42,this.pokemonFull.species.url.length-1)
      this.pokemon = {
        url : '',
        name : this.pokemonFull.name
      }
    }


  }

  selectPokemon(){
    this.selected = true
    this.eventSelectPokemon.emit(this.id);
  }

 

  

}

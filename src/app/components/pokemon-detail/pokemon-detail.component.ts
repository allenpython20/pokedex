import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PokemonDetail } from 'src/app/interfaces/pokemon-detail.interface';
import { Pokemon, PokemonBasic } from 'src/app/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges{

  @Input() pokemon?: Pokemon;
  @Input() open: boolean = false;
  public pokemonDetail?: PokemonDetail;
  public description: string = '';

  @Output() eventTooogleDetail = new EventEmitter();

  constructor(private pokemonService:PokemonService){}

  ngOnChanges(): void {
    if(this.pokemon){
      this.pokemonService.getPokemonDetails(this.pokemon.id).subscribe( (pokemon) => {
        if(pokemon){
          this.pokemonDetail = pokemon;
          this.description = pokemon.flavor_text_entries.find( ( f ) => f.language.name === "es" )?.flavor_text || '';
          
        }
      });
    }
   
  }

  toogleDetail(){
  
    if(this.pokemon){
      this.eventTooogleDetail.emit(0);
    }
   
  }





}

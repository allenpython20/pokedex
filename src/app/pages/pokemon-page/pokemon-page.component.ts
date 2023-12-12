import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonBasic } from 'src/app/interfaces/pokemon.interface';
import { PokedexDataService } from 'src/app/services/pokedex-data.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  public pokemons:PokemonBasic[] = [];
  public pokemonSelected?:Pokemon;
  public openDetail:boolean = false;
  public load:boolean = true;
  // public numberPokemon:number = 0;
  // public nameGeneration:string = '';

  constructor(
    private pokemonService:PokemonService,
    private pokedexService:PokedexDataService
  ){}

  

  ngOnInit(): void {
   this.getData();
   this.pokedexService.getIdGenerationObservable().subscribe( (id) => {
    this.getData(id)
   })
  }

  getData(generation:number=1){
    this.load = true;
    this.pokemonService.getPokemons(generation).subscribe( (result) => {
      if(result){
       
        this.pokemons = result.pokemon_species;
        this.pokemons.sort((a, b) => {
          const idA = this.getIdFromUrl(a.url);
          const idB = this.getIdFromUrl(b.url);
          return idA - idB;
        });
        this.pokedexService.numberPokemon = this.pokemons.length;
   
        this.pokedexService.nameGeneration = result.main_region.name
        this.load = false;
      }
     
    });
  }

  getIdFromUrl(url: string): number {
    const parts = url.split("/");
    return parseInt(parts[parts.length - 2]);
  }

  selectPokemon(id:string){
    if(id){
      if(id !== this.pokemonSelected?.id.toString()){
       
        this.pokemonService.getPokemonById(id).subscribe( (pokemon) => {
          if(pokemon){
            this.pokemonSelected = pokemon;
          }
        
        });

      }else{
        this.toogleDetail()
      }
    }
  }

  toogleDetail(id:number=0){
    
    this.openDetail = !this.openDetail
  }

}

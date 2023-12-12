import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-photo',
  templateUrl: './pokemon-photo.component.html',
  styleUrls: ['./pokemon-photo.component.scss']
})
export class PokemonPhotoComponent implements OnChanges {

  public url:string = '';
 

  ngOnChanges(): void {
   this.changePokemon();
  }

  @Input() pokemon?:Pokemon;
  @Input() open?:boolean;

  changePokemon(){
    if(this.pokemon){
      this.url = this.pokemon?.sprites.front_default;
    }
   
  }



}

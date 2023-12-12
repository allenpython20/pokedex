import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImage'
})
export class PokemonImagePipe implements PipeTransform {

  transform(id:string|number): unknown {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}

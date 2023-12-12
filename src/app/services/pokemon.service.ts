import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonData } from '../interfaces/pokemon.interface';
import { HttpClient } from '@angular/common/http';
import { PokemonDetail } from '../interfaces/pokemon-detail.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url:string = `https://pokeapi.co/api/v2`;

  constructor(private http:HttpClient) { }

  getPokemons(generation:number=1):Observable<PokemonData>{

    return this.http.get<PokemonData>(`${this.url}/generation/${generation}`);

  }

  getPokemonById(id:string):Observable<Pokemon>{

    return this.http.get<Pokemon>(`${this.url}/pokemon/${id}`);

  }
 
  getPokemonDetails(id:string|number):Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>(`${this.url}/pokemon-species/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  API = environment.API;
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${this.API}/pokemon?limit=10`);
  }

  getMoreData(name:string){
    return this.http.get(`${this.API}/pokemon/${name}`);
  }
}

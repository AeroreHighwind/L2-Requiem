import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../dto/character.dto';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl: string = 'https://l2-requiem-backend-8dqg-dev.fl0.io'
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/frost`)
  }
}

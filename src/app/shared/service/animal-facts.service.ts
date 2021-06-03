import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAnimalFact } from '../models/responseAnimalFact.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalFactsService {

  apiUrl = "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=3";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { 

  }

  public getRandomDogFacts(): Observable<ResponseAnimalFact[]> {
    return this.httpClient.get<ResponseAnimalFact[]>(this.apiUrl);
  }
}

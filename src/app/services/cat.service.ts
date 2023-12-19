// cat.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatHistoryService } from './cat-history.service';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiUrl = 'https://api.thecatapi.com/v1';
  private api_key = 'live_Le4U2ynce9GrHl47x80mMG1wniY9w2lK9l7t7TJmxaOLqwLoiuIR6E0HPDByAJAY';

  constructor(private http: HttpClient, private catHistoryService: CatHistoryService) {}

  getRandomCat(): Observable<any> {
    return this.http.get(`${this.apiUrl}/images/search?api_key=${this.api_key}`);
  }

  getBreedImagesWithDetails(breedId: string): Observable<any> {
    const apiUrl = `${this.apiUrl}/images/search?limit=10&breed_ids=${breedId}`;
    return this.http.get(apiUrl);
  }

  getCatBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds`);
  }

  saveCatToHistory(imageUrl: string): void {
    this.catHistoryService.addCatImage(imageUrl);
  }
}

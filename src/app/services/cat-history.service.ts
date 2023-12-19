// cat-history.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatHistoryService {
  private catImages: string[] = [];

  addCatImage(imageUrl: string) {
    this.catImages.push(imageUrl);
  }

  getCatImages() {
    return this.catImages;
  }
}

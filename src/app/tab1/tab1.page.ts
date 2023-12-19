// tab1.page.ts

import { Component } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  catImageUrl: string = '';

  constructor(private catService: CatService) {}

  ionViewDidEnter() {
    this.loadRandomCat();
  }

  loadRandomCat() {
    this.catService.getRandomCat().subscribe((data: any) => {
      if (data && data.length > 0) {
        this.catImageUrl = data[0].url;
        this.catService.saveCatToHistory(this.catImageUrl); // Save to history
      }
    });
  }
}

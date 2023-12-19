// tab2.page.ts

import { Component } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  breeds: any[] = [];
  selectedBreed: string = '';
  catImages: any[] = [];
  selectedBreedInfo: any = {};
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
Math: any;

  constructor(private catService: CatService) {}

  ionViewDidEnter() {
    this.loadCatBreeds();
  }

  loadCatBreeds() {
    this.catService.getCatBreeds().subscribe((data: any) => {
      this.breeds = data;
    });
  }

  selectBreed(breedId: string) {
    this.selectedBreed = breedId;
    this.loadBreedImages();
    this.loadBreedInfo();
  }

  loadBreedImages() {
    this.catService.getBreedImagesWithDetails(this.selectedBreed).subscribe((data: any) => {
      this.catImages = data;
    });
  }

  loadBreedInfo() {
    const selectedBreedObj = this.breeds.find(breed => breed.id === this.selectedBreed);
    if (selectedBreedObj) {
      this.selectedBreedInfo = {
        temperament: selectedBreedObj.temperament || 'No information available',
        origin: selectedBreedObj.origin || 'No information available',
        life_span: selectedBreedObj.life_span || 'No information available',
        wikipedia_url: selectedBreedObj.wikipedia_url || 'No link available',
      };
    }
  }
}

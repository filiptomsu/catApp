// tab3.page.ts

import { Component } from '@angular/core';
import { CatHistoryService } from '../services/cat-history.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  catHistory: string[] = [];

  constructor(
    private catHistoryService: CatHistoryService,
    private actionSheetController: ActionSheetController
  ) {}

  ionViewDidEnter() {
    this.loadCatHistory();
  }

  loadCatHistory() {
    this.catHistory = this.catHistoryService.getCatImages();
  }

  async showDownloadOption(imageUrl: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Open Image in Browser',
          handler: () => {
            this.downloadImage(imageUrl);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  downloadImage(imageUrl: string) { 
    window.open(imageUrl, '_blank');
  }
}

import { Component } from '@angular/core';
import { QuranDua } from '../interfaces/quran-dua';
import { DuadataService } from '../services/duadata.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  duaData: any;
  constructor(private duadataservice: DuadataService) {
    this.getDuaData();
  }

  getDuaData() {
    this.duadataservice.loadQuranDua().subscribe((qurandata) => {
      this.duaData = qurandata;
    });
  }
}

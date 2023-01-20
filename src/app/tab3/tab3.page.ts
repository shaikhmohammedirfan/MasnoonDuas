import { Component } from '@angular/core';
import { DuadataService } from '../services/duadata.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  duaData: any;
  constructor(private duadataservice: DuadataService) {
    this.getDuaData();
  }

  getDuaData() {
    this.duadataservice.loadSunahDua().subscribe((sunnahdata) => {
      this.duaData = sunnahdata;
    });
  }
}

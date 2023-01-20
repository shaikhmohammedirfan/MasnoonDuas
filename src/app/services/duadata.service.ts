import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { QuranDua } from '../interfaces/quran-dua';
import { Observable } from 'rxjs';
import { SunnahDua } from '../interfaces/sunnah-dua';

@Injectable({
  providedIn: 'root',
})
export class DuadataService {
  constructor(private http: HttpClient) {}

  loadQuranDua(): Observable<QuranDua> {
    const duaAPIURL = '../../assets/jsonData/quranDua.json';
    return this.http.get<QuranDua>(duaAPIURL);
  }

  loadSunahDua(): Observable<SunnahDua> {
    const duaAPIURL = '../../assets/jsonData/SunnahDua.json';
    return this.http.get<SunnahDua>(duaAPIURL);
  }
}

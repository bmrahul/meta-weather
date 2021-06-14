import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  searchResult = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  searchLocation(searchdata: any) {
    if (searchdata.indexOf(',') > -1) {
      return this.http.get(`/api/location/search/?lattlong=${searchdata}`).subscribe((res: any) => {
        this.searchResult.next(res);
      });
    } else {
      return this.http.get(`/api/location/search/?query=${searchdata}`).subscribe((res: any) => {
        this.searchResult.next(res);
      });
    }
  }

  getWeatherData(woeid: any) {
    return this.http.get(`/api/location/${woeid}/`).pipe();
  }
}

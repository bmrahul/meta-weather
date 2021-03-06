import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.searchResult.subscribe((res: any) => {
      this.data = res;
    });
  }
}

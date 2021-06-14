import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  searchInfo: any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  search() {
    this.appService.searchLocation(this.searchInfo);
  }
}

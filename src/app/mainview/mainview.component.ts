import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal]
})
export class MainviewComponent implements OnInit {
  @ViewChild('content', { static: false }) content!: ElementRef;
  result: any = [];
  weatherData: any = [];

  constructor(private appService: AppService, private modalService: NgbModal, config: NgbModalConfig,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.appService.searchResult.subscribe((res: any) => {
      this.result = res;
    });
  }

  viewCity(citydata: any) {
    this.appService.getWeatherData(citydata.woeid).subscribe((res: any) => {
      this.weatherData = res;
      this.modalService.open(this.content, { size: 'xl' });
    });
  }

}

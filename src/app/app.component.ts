import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { IAppModel } from './data.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public model: IAppModel;
  constructor(public dataservice: DataService) {}

  ngOnInit() {
    this.callDataService();
  }

  callDataService() {
    this.dataservice.getData().subscribe(data => {
      console.log(data);
      this.model = data;
    });
  }
}

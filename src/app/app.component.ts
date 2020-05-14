import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.getData().subscribe(data => {
      console.log(data);
    });
  }
}

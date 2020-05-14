import { Component, OnInit, Input } from '@angular/core';
import { IRank } from '../data.interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() public data: IRank[];
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}

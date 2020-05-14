import { Component, OnInit, Input } from '@angular/core';
import { IRank } from '../data.interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() public data: IRank[];

}

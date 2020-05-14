import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent {

  @Input() public number: number;
  @Input() public extra: boolean;
  constructor() {}

}

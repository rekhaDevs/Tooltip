import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent {

  tooltip: string = 'Hello';
  left: number = 0;
  top: number = 0;

}

import {Component} from '@angular/core';
import {TooltipPosition} from "../../shared/directives/tooltip.enums";

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './new-tooltip.component.html',
  styleUrls: ['./new-tooltip.component.scss']
})
export class NewTooltipComponent {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  inputData: any;
  left: number = 0;
  top: number = 0;
}

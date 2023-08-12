import { Component } from '@angular/core';
import {customTooltipConfig} from "../../Interfaces/custom-tooltip.Interface";

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent {
  toolTipData: customTooltipConfig<any> | undefined;
  tooltip: string = 'Hello';
  left: number = 0;
  top: number = 0;

}

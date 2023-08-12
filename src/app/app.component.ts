import {Component} from '@angular/core';
import {CustomTooltipComponent} from "./components/custom-tooltip/custom-tooltip.component";
import {customTooltipConfig} from "./Interfaces/custom-tooltip.Interface";
import {TooltipPosition} from "./directives/tooltip.enums";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toolTipData: customTooltipConfig<any> = {
    component: CustomTooltipComponent,
    inputData: {
      username: 'Rekha',
      city: 'Delhi'
    },
    position: TooltipPosition.RIGHT
  };
  title = 'customDirective';
}

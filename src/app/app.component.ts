import {Component} from '@angular/core';
import {CustomTooltipComponent} from "./components/custom-tooltip/custom-tooltip.component";
import {customTooltipConfig} from "./shared/Interfaces/custom-tooltip.Interface";
import {TooltipPosition} from "./shared/directives/tooltip.enums";
import {NewTooltipComponent} from "./components/new-tooltip/new-tooltip.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toolTipLeft: customTooltipConfig<any> = {
    component: CustomTooltipComponent,
    inputData: {
      username: 'Rekha',
      city: 'Delhi'
    },
    position: TooltipPosition.LEFT
  };
  toolTipRight: customTooltipConfig<any> = {
    component: CustomTooltipComponent,
    inputData: {
      username: 'Rekha',
      city: 'Delhi'
    },
    position: TooltipPosition.RIGHT
  };
  toolTipAbove: customTooltipConfig<any> = {
    component: NewTooltipComponent,
    inputData: {
      username: 'Rekha',
      city: 'New Delhi',
      state: 'Delhi'
    },
    position: TooltipPosition.ABOVE
  };
  toolTipBelow: customTooltipConfig<any> = {
    component: NewTooltipComponent,
    inputData: {
      username: 'Rekha',
      city: 'New Delhi',
      state: 'Delhi'
    },
    position: TooltipPosition.BELOW
  };
  title = 'customDirective';
}

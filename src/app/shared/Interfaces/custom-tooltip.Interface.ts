import { Type } from "@angular/core";
import {TooltipPosition} from "../directives/tooltip.enums";

type customTooltipPosition = TooltipPosition.LEFT | TooltipPosition.RIGHT | TooltipPosition.BELOW | TooltipPosition.ABOVE;

export interface customTooltipConfig<T>{
    component: Type<T>,
    inputData?: Partial<T>;
    position: customTooltipPosition;
}

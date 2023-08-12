import { Type } from "@angular/core";

type customTooltipPosition = 'left' | 'right' | 'above' | 'below';

export interface customTooltipConfig<T>{
    component: Type<T>,
    inputData?: Partial<T>;
    position?: customTooltipPosition;
}
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, Injector, Input } from '@angular/core';
import { customTooltipConfig } from '../Interfaces/customtooltipInterface';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {
  @Input() appCustomTooltip = '';
  private componentRef: ComponentRef<any> = null;
  constructor( private elementRef: ElementRef, 
    private apppRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) { }

  @HostListener('mouseenter')
  onMouseEnter() : void{
   if(this.componentRef === null){

   }
  }
  
  private showTooltip(){
    
  }
}

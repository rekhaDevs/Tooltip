import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input } from '@angular/core';
import { CustomTooltipComponent } from '../components/custom-tooltip/custom-tooltip.component';
import { customTooltipConfig } from '../Interfaces/customtooltipInterface';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {
  @Input() appCustomTooltip = '';
  private componentRef: ComponentRef<any> = null;
  constructor( private elementRef: ElementRef, 
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.componentRef === null) {
        const componentFactory =
              this.componentFactoryResolver.resolveComponentFactory(
              CustomTooltipComponent);
        this.componentRef = componentFactory.create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);
        const domElem = 
              (this.componentRef.hostView as EmbeddedViewRef<any>)
              .rootNodes[0] as HTMLElement;       
        document.body.appendChild(domElem);
        this.setTooltipComponentProperties();
    }
  }
  
  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.appCustomTooltip;
      const {left, right, bottom} = 		  	
            this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }
}

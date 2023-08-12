import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input } from '@angular/core';
import { CustomTooltipComponent } from '../components/custom-tooltip/custom-tooltip.component';
import { customTooltipConfig } from '../Interfaces/custom-tooltip.Interface';
import {TooltipPosition, TooltipTheme} from "./tooltip.enums";

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {
  @Input() toolTipData: customTooltipConfig<any> | undefined;
  // @Input() toolTipComponent: any = null;
  // @Input() tooltip = '';
  // @Input() image = '';
  // @Input() position: TooltipPosition = TooltipPosition.DEFAULT;
  // @Input() theme: TooltipTheme = TooltipTheme.DEFAULT;
  @Input() showDelay = 0;
  @Input() hideDelay = 0;

  private componentRef: ComponentRef<any> | null = null;
  private showTimeout?: number;
  private hideTimeout?: number;
  private touchTimeout?: number;

  constructor(private elementRef: ElementRef, private appRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.initializeTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setHideTooltipTimeout();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
   /* if (this.componentRef !== null && this.toolTipData?.position === TooltipPosition.DYNAMIC) {
      this.componentRef.instance.left = $event.clientX;
      this.componentRef.instance.top = $event.clientY;
      this.componentRef.instance.tooltip = this.tooltip;
    }*/
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart($event: TouchEvent): void {
    $event.preventDefault();
    window.clearTimeout(this.touchTimeout);
    this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), 500);
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    window.clearTimeout(this.touchTimeout);
    this.setHideTooltipTimeout();
  }

  private initializeTooltip() {
    if (!this.toolTipData?.component) {
      return;
    }
    if (this.componentRef === null) {
      window.clearInterval(this.hideDelay);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.toolTipData?.component);
      this.componentRef = componentFactory.create(this.injector);

      this.appRef.attachView(this.componentRef.hostView);
      const [tooltipDOMElement] = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes;

      this.setTooltipComponentProperties();

      document.body.appendChild(tooltipDOMElement);
      this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.toolTipData = this.toolTipData;
      // this.componentRef.instance.image = this.image;
      // this.componentRef.instance.position = this.position;
      // this.componentRef.instance.theme = this.theme;

      const {left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();

      switch (this.toolTipData?.position) {
        case TooltipPosition.BELOW: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(bottom);
          break;
        }
        case TooltipPosition.ABOVE: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(top);
          break;
        }
        case TooltipPosition.RIGHT: {
          this.componentRef.instance.left = Math.round(right);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        case TooltipPosition.LEFT: {
          this.componentRef.instance.left = Math.round(left);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  private showTooltip() {
    if (this.componentRef !== null) {
      this.componentRef.instance.visible = true;
    }
  }

  private setHideTooltipTimeout() {
    this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      window.clearInterval(this.showTimeout);
      window.clearInterval(this.hideDelay);
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}

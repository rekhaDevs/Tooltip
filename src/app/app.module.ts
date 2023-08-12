import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { CustomTooltipDirective } from './directives/custom-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipComponent,
    CustomTooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

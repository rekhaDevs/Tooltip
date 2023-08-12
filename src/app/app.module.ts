import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { CustomTooltipDirective } from './shared/directives/custom-tooltip.directive';
import {NewTooltipComponent} from "./components/new-tooltip/new-tooltip.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipComponent,
    CustomTooltipDirective,
    NewTooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { CustomTooltipDirective } from './customdirectives/custom-tooltip.directive';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTooltipComponent,
    CustomTooltipDirective,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

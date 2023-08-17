import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { FormsModule } from '@angular/forms';
import { HiddenPropertyComponent } from './hidden-property/hidden-property.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTravelOperatorComponent } from './safe-travel-operator/safe-travel-operator.component';
import { ApplyColorDirective } from './apply-color.directive';
import { CustomAttributeDirectiveComponent } from './custom-attribute-directive/custom-attribute-directive.component';
import { CustomIfDirective } from './custom-if.directive';
import { CustomStructuralDirectiveComponent } from './custom-structural-directive/custom-structural-directive.component';
import { HoverDirective } from './hover.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    HiddenPropertyComponent,
    NgClassComponent,
    NgSwitchComponent,
    NgStyleComponent,
    SafeTravelOperatorComponent,
    ApplyColorDirective,
    CustomAttributeDirectiveComponent,
    CustomIfDirective,
    CustomStructuralDirectiveComponent,
    HoverDirective,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

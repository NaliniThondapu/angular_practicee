import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { DynamicControlsComponent } from './dynamic-controls/dynamic-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponentComponent,
    FormValidationsComponent,
    DynamicControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

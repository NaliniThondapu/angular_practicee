import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDataService } from './services/product-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { DeleteComponent } from './components/delete/delete.component';
import { PersonFormComponentComponent } from './components/person-form-component/person-form-component.component';
import { PersonTemplateFormsComponent } from './components/person-template-forms/person-template-forms.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { MyIfDirective } from './directives/my-if.directive';
import { MyForDirective } from './directives/my-for.directive';
import { MyStyleDirective } from './directives/my-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    FetchComponent,
    DeleteComponent,
    PersonFormComponentComponent,
    PersonTemplateFormsComponent,
    CustomDirectivesComponent,
    MyIfDirective,
    MyForDirective,
    MyStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

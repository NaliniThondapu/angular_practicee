import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { MapComponent } from './components/map/map.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ResolveComponent } from './components/resolve/resolve.component';
import { CrudComponent } from './components/crud/crud.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { UppercaseComponent } from './components/uppercase/uppercase.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    DashboardComponent,
    NotfoundComponent,
    NavbarComponent,
    AboutComponent,
    UsersComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    MapComponent,
    FeedbackComponent,
    ResolveComponent,
    CrudComponent,
    RxjsComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

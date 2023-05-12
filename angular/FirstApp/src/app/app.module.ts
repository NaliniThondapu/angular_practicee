import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { DataEventsComponent } from './components/data-events/data-events.component'
import { FormsModule } from '@angular/forms';
import { GetFirst50CharPipe } from './pipes/get-first50-char.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    UsersComponent,
    DataEventsComponent,
    GetFirst50CharPipe,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

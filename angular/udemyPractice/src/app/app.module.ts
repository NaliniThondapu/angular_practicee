import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { FormsModule } from '@angular/forms';
import { UppercaseComponent } from './components/uppercase/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SellerComponent,
    UppercaseComponent
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

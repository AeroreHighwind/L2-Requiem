import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CardComponent } from './characters/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponent,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

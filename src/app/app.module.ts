import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksCreateComponent } from './books/books-create/books-create.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { BooksDeleteComponent } from './books/books-delete/books-delete.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BooksCreateComponent,
    BooksEditComponent,
    BooksDeleteComponent,
    BooksDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { OAuthService } from 'angular2-oauth2';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule],
  declarations: [ AppComponent ],
  providers:[OAuthService],
  bootstrap:    [ AppComponent]
})
export class AppModule {
  }
 



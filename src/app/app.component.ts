import { Component } from '@angular/core';
import { OAuthService } from 'angular2-oauth2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
getData(name:any,password:any){
  console.log(name);
  console.log(password);
  }
  }

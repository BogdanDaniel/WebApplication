import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './layout/auth/auth.module';
import { AppRoutingModule } from './app.routes';
import { MainModule } from './layout/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule, 
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

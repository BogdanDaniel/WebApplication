import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routes';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputTextModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }

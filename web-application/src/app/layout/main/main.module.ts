import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainRoutingModule } from './main.routes';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    DashboardComponent
  ]
})
export class MainModule { }

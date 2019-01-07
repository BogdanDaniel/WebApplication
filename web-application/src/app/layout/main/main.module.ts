import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainRoutingModule } from './main.routes';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminModule } from '../../modules/admin/admin.module';
import {AccordionModule} from 'primeng/accordion';
import { HomeComponent } from '../home/home.component';
import { ProductBoxComponent } from '../home/product-box/product-box.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    AdminModule,
    AccordionModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    ProductBoxComponent
  ]
})
export class MainModule { }

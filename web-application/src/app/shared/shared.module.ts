import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import {DropdownModule} from 'primeng/dropdown';
import { UserSettingComponent } from './components/user-setting/user-setting.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule
  ],
  declarations: [
    UserToolbarComponent,
    UserSettingComponent,
    SidebarMenuComponent
  ],
  exports: [
    UserToolbarComponent,
    SidebarMenuComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import {DropdownModule} from 'primeng/dropdown';
import { UserSettingComponent } from './components/user-setting/user-setting.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule
  ],
  declarations: [
    UserToolbarComponent,
    UserSettingComponent
  ],
  exports: [UserToolbarComponent]
})
export class SharedModule { }

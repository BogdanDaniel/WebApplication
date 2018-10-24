import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule
  ],
  declarations: [
    UserToolbarComponent
  ],
  exports: [UserToolbarComponent]
})
export class SharedModule { }

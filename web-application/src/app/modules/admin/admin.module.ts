import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../../../node_modules/primeng/components/common/shared';

@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }

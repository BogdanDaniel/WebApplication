import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

@NgModule({
imports: [
    RouterModule.forChild([
    {
        path: 'main',
        redirectTo: '',
        pathMatch: 'full'
    },   
    {
      path: '',
      component: MainComponent,
      children: [
          {
              path: 'dashboard',
              component: DashboardComponent
          }
      ]
     },
])
],
exports: [RouterModule]
})
export class MainRoutingModule {

}
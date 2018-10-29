import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AdminComponent } from "../../modules/admin/admin.component";
import { UserSettingComponent } from "../../shared/components/user-setting/user-setting.component";

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
                    },
                    {
                        path: 'admin',
                        component: AdminComponent
                    },
                    {
                        path: 'user-setting',
                        component: UserSettingComponent
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class MainRoutingModule {

}
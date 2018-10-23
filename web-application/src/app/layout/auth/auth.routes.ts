import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

@NgModule({
imports: [
    RouterModule.forChild([{
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }])
],
exports: [RouterModule]
})

export class AuthRoutingModule {

}
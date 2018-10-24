import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./layout/auth/login/login.component";

@NgModule({
imports: [
    RouterModule.forRoot([
        {
            path: 'auth/login',
            component: LoginComponent
        },
        {
            path: '',
            redirectTo: 'auth/login',
            pathMatch: 'full'
        }
    ])
],
exports: [RouterModule]
})

export class AppRoutingModule {

}
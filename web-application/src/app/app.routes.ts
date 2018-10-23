import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
imports: [
    RouterModule.forRoot([
        {
            path: 'login',
            redirectTo: 'auth/login',
            pathMatch: 'full'
        }
    ])
]
})

export class AppRoutingModule {

}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogingComponent } from "./components/loging/loging.component";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    { path: 'auth/login', component: LogingComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRountingModule {}
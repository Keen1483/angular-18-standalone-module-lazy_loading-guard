import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'facesnaps',
        loadChildren: () => import('./face-snaps/face-snaps.module').then(
            m => m.FaceSnapsModule
        )
    },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
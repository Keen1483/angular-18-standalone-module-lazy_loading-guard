import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogingComponent } from './components/loging/loging.component';
import { AuthRountingModule } from './auth.rounting.module';



@NgModule({
  declarations: [
    LogingComponent
  ],
  imports: [
    CommonModule,
    AuthRountingModule
  ],
  exports: [
    LogingComponent
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxsModule } from '@ngxs/store';
// import { LoginPageStore } from '../../store/login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ReactiveFormsModule
    // NgxsModule.forFeature([LoginPageStore])
  ]
})
export class LoginPageModule {}
